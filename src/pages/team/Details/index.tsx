import React, { useState, useEffect } from 'react';

import Tabs, { TabId } from './Tabs';
import Roster from './Roster';
import Stats from './Stats';
import { getTeam } from '../../../api/teams';
import {
  TeamRoster,
  TeamStats,
} from '../../../api/types';
import styled from '@emotion/styled';

interface Props {
  teamId: number;
}

const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
})

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

  return (
    <Wrapper>
      <Tabs
        activeTabId={activeTabId}
        onSelectTab={setActiveTabId}
        tabs={[
          { content: <Roster teamRoster={roster} />, id: 'roster', label: 'Roster' },
          { content: <Stats teamStats={stats} />, id: 'stats', label: 'Stats' },
        ]}
      />
    </Wrapper>
  )
}

export default Details;
