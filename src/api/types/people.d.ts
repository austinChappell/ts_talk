export interface PersonResponse {
  copyright: string;
  people: Person[];
}

export interface Person {
  id: number;
  fullName: string;
  link: string;
  firstName: string;
  lastName: string;
  primaryNumber: string;
  birthDate: string;
  currentAge: number;
  birthCity: string;
  birthStateProvince: string;
  birthCountry: string;
  nationality: string;
  height: string;
  weight: number;
  active: boolean;
  alternateCaptain: boolean;
  captain: boolean;
  rookie: boolean;
  shootsCatches: string;
  rosterStatus: string;
  currentTeam: PersonCurrentTeam;
  primaryPosition: PersonPrimaryPosition;
}

export interface PersonCurrentTeam {
  id: number;
  name: string;
  link: string;
}

export interface PersonPrimaryPosition {
  code: string;
  name: string;
  type: string;
  abbreviation: string;
}

export interface StatsResponse<S> {
  copyright: string;
  stats: StatElement<S>[];
}

export interface StatElement<S> {
  type: {
    displayName: string;
  };
  splits: S[];
}

export interface SingleSeasonStatsSplit {
  season: string;
  stat: SingleSeasonStats;
}

export interface SingleSeasonStats {
  [key: string]: any;
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  faceOffPct: number;
  shotPct: number;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
  timeOnIcePerGame: string;
  evenTimeOnIcePerGame: string;
  shortHandedTimeOnIcePerGame: string;
  powerPlayTimeOnIcePerGame: string;
}

export interface HomeAwayStatsSplit {
  season: string;
  stat: HomeAwayStats;
  isHome: boolean;
}

export interface HomeAwayStats {
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  shotPct: number;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
  timeOnIcePerGame: string;
  evenTimeOnIcePerGame: string;
  shortHandedTimeOnIcePerGame: string;
  powerPlayTimeOnIcePerGame: string;
}

export interface WinLossStatsSplit {
  season: string;
  stat: WinLossStats;
  isWin: boolean;
  isOT: boolean;
}

export interface WinLossStats {
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  shotPct: number;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
  timeOnIcePerGame: string;
  evenTimeOnIcePerGame: string;
  shortHandedTimeOnIcePerGame: string;
  powerPlayTimeOnIcePerGame: string;
}

export interface ByMonthStatsSplit {
  season: string;
  stat: ByMonthStats;
  month: number;
}

export interface ByMonthStats {
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  shotPct: number;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
  timeOnIcePerGame: string;
  evenTimeOnIcePerGame: string;
  shortHandedTimeOnIcePerGame: string;
  powerPlayTimeOnIcePerGame: string;
}

export interface ByDayOfWeekStatsSplit {
  season: string;
  stat: ByDayOfWeekStats;
  dayOfWeek: number;
}

export interface ByDayOfWeekStats {
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  shotPct: number;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
  timeOnIcePerGame: string;
  evenTimeOnIcePerGame: string;
  shortHandedTimeOnIcePerGame: string;
  powerPlayTimeOnIcePerGame: string;
}

export interface VsDivisionStatsSplit {
  season: string;
  stat: VsDivisionStats;
  opponentDivision: Opponent;
  opponentConference: Opponent;
}

export interface Opponent {
  id: number;
  name: string;
  link: string;
}

export interface VsDivisionStats {
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  faceOffWins: number;
  shotPct: number;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
  timeOnIcePerGame: string;
  evenTimeOnIcePerGame: string;
  shortHandedTimeOnIcePerGame: string;
  powerPlayTimeOnIcePerGame: string;
}

export interface VsConferenceStatsSplit {
  season: string;
  stat: VsConferenceStats;
  opponentConference: Opponent;
}

export interface VsConferenceStats {
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  faceOffWins: number;
  shotPct: number;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
  timeOnIcePerGame: string;
  evenTimeOnIcePerGame: string;
  shortHandedTimeOnIcePerGame: string;
  powerPlayTimeOnIcePerGame: string;
}

export interface VsTeamStatsSplit {
  season: string;
  stat: VsTeamStats;
  opponent: Opponent;
  opponentDivision: Opponent;
  opponentConference: Opponent;
}

export interface VsTeamStats {
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  faceOffWins: number;
  shotPct: number;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
  timeOnIcePerGame: string;
  evenTimeOnIcePerGame: string;
  shortHandedTimeOnIcePerGame: string;
  powerPlayTimeOnIcePerGame: string;
}

export interface GameLogStatsSplit {
  season: string;
  stat: GameLogStats;
  team: Opponent;
  opponent: Opponent;
  date: Date;
  isHome: boolean;
  isWin: boolean;
  isOT: boolean;
  game: Game;
}

export interface Game {
  gamePk: number;
  link: string;
  content: Content;
}

export interface Content {
  link: string;
}

export interface GameLogStats {
  timeOnIce: string;
  assists: number;
  goals: number;
  pim: number;
  shots: number;
  games: number;
  hits: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  powerPlayTimeOnIce: string;
  evenTimeOnIce: string;
  penaltyMinutes: string;
  gameWinningGoals: number;
  overTimeGoals: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  shortHandedTimeOnIce: string;
  blocked: number;
  plusMinus: number;
  points: number;
  shifts: number;
}

export interface RegularSeasonRankingStatsSplit {
  season: string;
  stat: RegularSeasonRankingStats;
}

export interface RegularSeasonRankingStats {
  [key: string]: any;
  rankPowerPlayGoals: string;
  rankBlockedShots: string;
  rankAssists: string;
  rankShotPct: string;
  rankGoals: string;
  rankHits: string;
  rankPenaltyMinutes: string;
  rankShortHandedGoals: string;
  rankPlusMinus: string;
  rankShots: string;
  rankPoints: string;
  rankOvertimeGoals: string;
  rankGamesPlayed: string;
}

export interface GoalsByGameSituationStatsSplit {
  season: string;
  stat: GoalsByGameSituationStats;
}

export interface GoalsByGameSituationStats {
  goalsInFirstPeriod: number;
  goalsInSecondPeriod: number;
  goalsWhenTied: number;
  goalsLeadingByTwo: number;
}
