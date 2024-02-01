export interface HistoryResponse {
  sessions: HistoryObject[];
}

export interface HistoryObject {
  gameRecords: GameRecords[];
  players: string[];
  sessionId: string;
}
export interface PlayersParams {
  players: Players[];
}

export interface PlayerResponse {
  sessionId: string;
  players: Players[];
}

export interface AddRecordParams {
  winner: string;
  rounds: number;
  players: Players[];
  sessionId: string;
}

export interface AddRecordResponse {
  message: string;
  gameRecord: AddRecordsGameRecords;
  sessionId: string;
}

export interface AddRecordsGameRecords {
  winner: string;
  rounds: number;
  players: PlayersRecords[];
  _id: string;
  gameId: string;
  __v: number;
}

export interface GetRecordParams {
  sessionId: string;
}

export interface GetRecordResponse {
  history: History[];
}

export interface History {
  _id: string;
  winner: string;
  rounds: number;
  players: Players & { __v: number }[];
  gameId: string;
  __v: number;
}

interface PlayersRecords {
  _id: string;
  name: string;
  numberOfWins: number;
  numberOfLoss: number;
  numberOfDraws: number;
  position: string;
  session: string;
  id: string;
  __v: number;
}
interface GameRecords {
  winner: string;
  rounds: number;
  players: Players[];
  gameId: string;
  __v: number;
  winnerDetails: WinnerDetails;
}

interface Players {
  name: string;
  numberOfWins: number;
  numberOfLoss: number;
  numberOfDraws: number;
  position: string;
}

interface WinnerDetails {
  player1: string;
  player2: string;
  winner: string;
}
