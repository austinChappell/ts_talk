export interface TeamsResponse {
  copyright: string;
  teams: Team[];
}

export interface Team {
  abbreviation: string;
  active: boolean;
  conference: Conference;
  division: Division;
  firstYearOfPlay: string;
  franchise: Franchise;
  franchiseId: number;
  id: number;
  link: string;
  locationName: string;
  name: string;
  officialSiteUrl: string;
  roster?: TeamRoster;
  shortName: string;
  teamName: string;
  teamStats?: TeamStats;
  venue: Venue;
}

export interface Conference {
  id: number;
  name: ConferenceName;
  link: string;
}

export type ConferenceName = "Eastern" | "Western";

export interface Division {
  abbreviation: string;
  id: number;
  link: string;
  name: DivisionName;
  nameShort: DivisionNameShort;
}

export type DivisionName =
  "Atlantic" |
  "Central" |
  "Metropolitan" |
  "Pacific";

export type DivisionNameShort = 'ATL' | 'CEN' | 'Metro' | 'PAC';

export interface Franchise {
  franchiseId: number;
  link: string;
  teamName: string;
}

export interface Venue {
  city: string;
  id?: number;
  link: string;
  name: string;
  timeZone: TimeZone;
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
  splits: Split[];
  type: Type;
}

export type TeamStats = TeamStat[];

export interface Split {
  stat: Stat;
  team: AbbrevTeam;
}

export interface Stat {
  [key: string]: any;
  evGGARatio: number | string;
  faceOffWinPercentage: string;
  faceOffsLost: number | string;
  faceOffsTaken: number | string;
  faceOffsWon: number | string;
  gamesPlayed?: number;
  goalsAgainstPerGame: number | string;
  goalsPerGame: number | string;
  losses: number | string;
  ot: number | string;
  penaltyKillOpportunities?: string;
  penaltyKillPercentage: string;
  powerPlayGoals: number | string;
  powerPlayGoalsAgainst: number | string;
  powerPlayOpportunities: number | string;
  powerPlayPercentage: string;
  ptPctg: string;
  pts: number | string;
  savePctRank?: string;
  savePctg?: number;
  shootingPctRank?: string;
  shootingPctg?: number;
  shotsAllowed: number | string;
  shotsPerGame: number | string;
  winLeadFirstPer: number | string;
  winLeadSecondPer: number | string;
  winOppScoreFirst: number | string;
  winOutshootOpp: number | string;
  winOutshotByOpp: number | string;
  winScoreFirst: number | string;
  wins: number | string;
}

export interface AbbrevTeam {
  id: number;
  link: string;
  name: string;
}

export interface Type {
  displayName: string;
}

export interface TeamRoster {
  roster: RosterElement[];
}

export interface RosterElement {
  person: Person;
  jerseyNumber: string;
  position: Position;
}

export interface Person {
  id: number;
  fullName: string;
  link: string;
}

export interface Position {
  code: string;
  name: string;
  type: PositionType;
  abbreviation: string;
}

export type PositionType =
  'Defenseman' |
  'Forward' |
  'Goalie';