// External Dependencies
import React, { useState, useEffect } from 'react';

// Internal Dependencies
import Tabs from '../../../components/shared/Tabs';
import SingleSeasonStatsTable from './SingleSeasonStatsTable';
import { SingleSeasonStats, RegularSeasonRankingStats } from '../../../api/types/people';
import { getPersonStatsSingleSeason, getPersonStatsRegularSeasonRanking, GetPersonWithStats } from '../../../api/people';
import RegularSeasonRankingStatsTable from './RegularSeasonRankingStatsTable';

// Local Typings
interface Props {
  personId: number;
}

// Local Variables
async function fetchStats<Response>(
  personId: number,
  apiCall: GetPersonWithStats<{ stat: Response }>,
  cb: React.Dispatch<React.SetStateAction<Response | null>>,
  loadingCb: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const response = await apiCall(personId, { season: 20182019 });

    const [stat] = response.data.stats;
    if (stat) {
      const [split] = stat.splits;
      if (split) {
        cb(split.stat);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    loadingCb(false)
  }
}

const PersonStats: React.FC<Props> = (props) => {
  const [activeTabId, setActiveTabId] = useState('singleSeason');
  const [singleSeasonStats, setSingleSeasonStats] = useState<SingleSeasonStats | null>(null);
  const [regularSeasonRarnkingStats, setRegularSeasonRankingStats] = useState<RegularSeasonRankingStats | null>(null);
  const [singleSeasonStatsLoading, setSingleSeasonStatsLoading] = useState(true);
  const [regularSeasonRarnkingStatsLoading, setRegularSeasonRankingStatsLoading] = useState(true);

  useEffect(() => {
    switch (activeTabId) {
      case 'singleSeason':
        fetchStats(
          props.personId, 
          getPersonStatsSingleSeason, 
          setSingleSeasonStats, 
          setSingleSeasonStatsLoading
        );
        break;
      case 'regularSeason':
        fetchStats(
          props.personId, 
          getPersonStatsRegularSeasonRanking, 
          setRegularSeasonRankingStats, 
          setRegularSeasonRankingStatsLoading
        );
        break;
    }
  }, [activeTabId, props.personId]);

  return (
    <Tabs
      activeTabId={activeTabId}
      onSelectTab={setActiveTabId}
      tabs={[
        { 
          content: <SingleSeasonStatsTable isLoading={singleSeasonStatsLoading} stats={singleSeasonStats} />, 
          id: 'singleSeason', 
          label: 'Single Season' 
        },
        { 
          content: <RegularSeasonRankingStatsTable isLoading={regularSeasonRarnkingStatsLoading} stats={regularSeasonRarnkingStats} />, 
          id: 'regularSeason', 
          label: 'Reg. Season Rankings' 
        },
      ]}
    />
  );
}

export default PersonStats;
