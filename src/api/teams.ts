import { getRequest } from '.';
import { AxiosResponse } from 'axios';
import { TeamsResponse } from './types/teams';

// Local Typings
type GetTeams = () => Promise<AxiosResponse<TeamsResponse>>;
type GetTeam = (id: number) => Promise<AxiosResponse<TeamsResponse>>;

export const getTeams: GetTeams = async () => {
  return await getRequest('/api/v1/teams');
}
export const getTeam: GetTeam = async (id) => {
  return await getRequest(`/api/v1/teams/${id}?expand=team.stats`);
}
