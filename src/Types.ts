import internal from "stream";
import { EphemeralKeyInfo } from "tls";

export interface IGalleryItem {
  id: string;
  url: string;
  description: string;
  href: string;
}

export interface INotificationState {
  enable: boolean;
}
export interface Welcome {
  standings: WelcomeStanding[];
}

export interface WelcomeStanding {
  id: number;
  competition: Competition;
  standings: StandingStanding[];
}

export interface Competition {
  name: string;
}

export interface StandingStanding {
  table: Table[];
}

export interface Table {
  position: number;
  points: number;
  won: number;
  draw: number;
  lost: number;
  team: Team;
}

export enum TableTypename {
  Table = "Table",
}

export interface Team {
  name: string;
  crestUrl: string;
}

export enum TeamTypename {
  Team = "Team",
}

export interface LoginModel {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IGlobalState {
  token: string;
  email: string;
}
export interface IAllNews {
  news: INews[];
}

export interface INews {
  id: number;
  title: string;
  photoUrl: string;
  content: string;
  author: string;
  dateOfCreation: Date;
}

export interface IComment {
  id: number;
  likes: number;
  dislikes: number;
  author: string;
  content: string;
  newsId: number;
}

export interface ISummary {
  title: string;
  displaytitle: string;
  originalimage: IOriginalimage;
  extract: string;
  extract_html: string;
}

export interface IOriginalimage {
  source: string;
  width: number;
  height: number;
}
