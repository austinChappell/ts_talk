import axios, { AxiosResponse } from 'axios';

type GetRequest = (endpoint: string) => Promise<AxiosResponse<any>>;

const baseUrl = 'https://statsapi.web.nhl.com';

export const getRequest: GetRequest = async (endpoint: string) => {
  try {
    const url = `${baseUrl}${endpoint}`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
