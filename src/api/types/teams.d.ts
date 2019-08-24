export interface TeamsResponse {
  copyright: string;
  teams: Team[];
}

export interface Team {
  id: number;
  name: string;
  link: string;
  venue: Venue;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  division: Division;
  conference: Conference;
  franchise: Franchise;
  shortName: string;
  officialSiteUrl: string;
  franchiseId: number;
  active: boolean;
  teamStats?: TeamStat[];
}

export interface Conference {
  id: number;
  name: ConferenceName;
  link: string;
}

export type ConferenceName = "Eastern" | "Western";

export interface Division {
  id: number;
  name: DivisionName;
  nameShort: DivisionNameShort;
  link: string;
  abbreviation: string;
}

export type DivisionName =
  "Atlantic" |
  "Central" |
  "Metropolitan" |
  "Pacific";

export type DivisionNameShort = 'ATL' | 'CEN' | 'Metro' | 'PAC';

export interface Franchise {
  franchiseId: number;
  teamName: string;
  link: string;
}

export interface Venue {
  name: string;
  link: string;
  city: string;
  timeZone: TimeZone;
  id?: number;
}

export interface TimeZone {
  id: string;
  offset: number;
  tz: Tz;
}

export type Tz =
  "CDT" |
  "EDT" |
  "MDT" |
  "MST" |
  "PDT";

export interface TeamStat {
  type: Type;
  splits: Split[];
}

export interface Split {
  stat: Stat;
  team: AbbrevTeam;
}

export interface Stat {
  gamesPlayed?: number;
  wins: number | string;
  losses: number | string;
  ot: number | string;
  pts: number | string;
  ptPctg: string;
  goalsPerGame: number | string;
  goalsAgainstPerGame: number | string;
  evGGARatio: number | string;
  powerPlayPercentage: string;
  powerPlayGoals: number | string;
  powerPlayGoalsAgainst: number | string;
  powerPlayOpportunities: number | string;
  penaltyKillPercentage: string;
  shotsPerGame: number | string;
  shotsAllowed: number | string;
  winScoreFirst: number | string;
  winOppScoreFirst: number | string;
  winLeadFirstPer: number | string;
  winLeadSecondPer: number | string;
  winOutshootOpp: number | string;
  winOutshotByOpp: number | string;
  faceOffsTaken: number | string;
  faceOffsWon: number | string;
  faceOffsLost: number | string;
  faceOffWinPercentage: string;
  shootingPctg?: number;
  savePctg?: number;
  penaltyKillOpportunities?: string;
  savePctRank?: string;
  shootingPctRank?: string;
}

export interface AbbrevTeam {
  id: number;
  name: string;
  link: string;
}

export interface Type {
  displayName: string;
}
