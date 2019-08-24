import { getRequest } from '.';
import { AxiosResponse } from 'axios';
import { TeamsResponse } from './types/teams';

// Local Typings
type GetTeams = () => Promise<AxiosResponse<TeamsResponse>>;

export const getTeams: GetTeams = async () => {
  return await getRequest('/api/v1/teams');
}
