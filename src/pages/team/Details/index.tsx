import React, { useState, useEffect } from 'react';

import Tabs, { TabId } from './Tabs';
import Roster from './Roster';
import Stats from './Stats';
import { getTeam } from '../../../api/teams';
import {
  TeamRoster,
  TeamStats,
} from '../../../api/types';

interface Props {
  teamId: number;
}

async function fetchRoster(
  data: TeamRoster | null,
  teamId: number,
  cb: React.Dispatch<React.SetStateAction<TeamRoster | null>>
) {
  if (data) {
    return;
  }

  try {
    const response = await getTeam(teamId, 'expand=team.roster');
    const [team] = response.data.teams;
    const roster = team ? team.roster || null : null;
    cb(roster);
  } catch (error) {
    throw error;
  }
}
async function fetchStats(
  data: TeamStats | null,
  teamId: number,
  cb: React.Dispatch<React.SetStateAction<TeamStats | null>>
) {
  if (data) {
    return;
  }

  try {
    const response = await getTeam(teamId, 'expand=team.stats');
    const [team] = response.data.teams;
    const stats = team ? team.teamStats || null : null;
    cb(stats);
  } catch (error) {
    throw error;
  }
}

const Details: React.FC<Props> = (props) => {
  const [stats, setStats] = useState<TeamStats | null>(null);
  const [roster, setRoster] = useState<TeamRoster | null>(null);
  const [activeTabId, setActiveTabId] = useState<TabId>('roster');

  useEffect(() => {
    switch (activeTabId) {
      case 'roster':
        fetchRoster(roster, props.teamId, setRoster);
        break;
      case 'stats':
        fetchStats(stats, props.teamId, setStats);
        break;
    }
  }, [activeTabId, roster, stats, props.teamId, setRoster, setStats]);

  console.log({ roster, stats })

  return (
    <div>
      <Tabs
        activeTabId={activeTabId}
        onSelectTab={setActiveTabId}
        tabs={[
          { content: <Roster />, id: 'roster', label: 'Roster' },
          { content: <Stats />, id: 'stats', label: 'Stats' },
        ]}
      />
    </div>
  )
}

export default Details;