import { getRequest } from '.';
import { AxiosResponse } from 'axios';
import { TeamsResponse } from './types/teams';

// Local Typings
type GetTeamQueryString =
  'expand=team.roster' |
  'expand=person.names' |
  'expand=team.schedule.next' |
  'expand=team.schedule.previous' |
  'expand=team.stats' |
  'stats=statsSingleSeasonPlayoffs';

type GetTeams = () => Promise<AxiosResponse<TeamsResponse>>;
type GetTeam = (id: number, queryString?: GetTeamQueryString) => Promise<AxiosResponse<TeamsResponse>>;

export const getTeams: GetTeams = async () => {
  return await getRequest('/api/v1/teams');
}
export const getTeam: GetTeam = async (id, queryString) => {
  const baseEndpoint = `/api/v1/teams/${id}`;
  const url = queryString
    ? `${baseEndpoint}?${queryString}`
    : baseEndpoint;

  return await getRequest(url);
}
