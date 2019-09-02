import { getRequest } from '.';
import { AxiosResponse } from 'axios';
import { PersonResponse, StatsResponse, SingleSeasonStatsSplit, HomeAwayStatsSplit, WinLossStatsSplit, ByMonthStatsSplit, ByDayOfWeekStatsSplit, VsDivisionStatsSplit, VsConferenceStatsSplit, VsTeamStatsSplit, GameLogStatsSplit, RegularSeasonRankingStatsSplit, GoalsByGameSituationStatsSplit } from './types/people';

// Local Typings
export type GetPersonWithStats<Res> = (id: number, options: StatsOptions) =>  
  Promise<AxiosResponse<StatsResponse<Res>>>;

type GetPerson = (id: number) => Promise<AxiosResponse<PersonResponse>>;
type GetPersonWithStatsSingleSeason = GetPersonWithStats<SingleSeasonStatsSplit>
type GetPersonWithStatsHomeAway = GetPersonWithStats<HomeAwayStatsSplit>
type GetPersonWithStatsWinLoss = GetPersonWithStats<WinLossStatsSplit>
type GetPersonWithStatsByMonth = GetPersonWithStats<ByMonthStatsSplit>
type GetPersonWithStatsByDayOfWeek = GetPersonWithStats<ByDayOfWeekStatsSplit>
type GetPersonWithStatsVsDivision = GetPersonWithStats<VsDivisionStatsSplit>
type GetPersonWithStatsVsConference = GetPersonWithStats<VsConferenceStatsSplit>
type GetPersonWithStatsVsTeam = GetPersonWithStats<VsTeamStatsSplit>
type GetPersonWithStatsGameLog = GetPersonWithStats<GameLogStatsSplit>
type GetPersonWithStatsRegularSeasonRanking = GetPersonWithStats<RegularSeasonRankingStatsSplit>
type GetPersonWithStatsGoalsByGameSituation = GetPersonWithStats<GoalsByGameSituationStatsSplit>

interface StatsOptions {
  season: number;
}

export const getPerson: GetPerson = async (id) => {
  const url = `/api/v1/people/${id}`;

  return await getRequest(url);
}
export const getPersonStatsSingleSeason: GetPersonWithStatsSingleSeason = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=statsSingleSeason&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsHomeAway: GetPersonWithStatsHomeAway = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=homeAndAway&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsWinLoss: GetPersonWithStatsWinLoss = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=winLoss&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsByMonth: GetPersonWithStatsByMonth = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=byMonth&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsByDayOfWeek: GetPersonWithStatsByDayOfWeek = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=byDayOfWeek&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsVsDivision: GetPersonWithStatsVsDivision = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=vsDivision&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsVsConference: GetPersonWithStatsVsConference = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=vsConference&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsVsTeam: GetPersonWithStatsVsTeam = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=vsTeam&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsGameLog: GetPersonWithStatsGameLog = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=gameLog&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsRegularSeasonRanking: GetPersonWithStatsRegularSeasonRanking = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=regularSeasonStatRankings&season=${season}`;

  return await getRequest(url);
}
export const getPersonStatsGoalsByGameSituation: GetPersonWithStatsGoalsByGameSituation = async (id, { season }) => {
  const url = `/api/v1/people/${id}/stats?stats=goalsByGameSituation&season=${season}`;

  return await getRequest(url);
}
