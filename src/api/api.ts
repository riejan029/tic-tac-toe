import axios from "axios";
import {
  AddRecordParams,
  AddRecordResponse,
  GetRecordParams,
  GetRecordResponse,
  HistoryResponse,
  PlayerResponse,
  PlayersParams,
} from "./types";

const basePath = `https://tic-tac-toe-api-pi.vercel.app/api/v1/tic-tac-toe`;
export const getHistory = async (): Promise<HistoryResponse> => {
  const response = await axios.get(`${basePath}/getHistory`);
  return response.data;
};

export const addPlayers = async (
  params: PlayersParams
): Promise<PlayerResponse> => {
  const response = await axios.post(`${basePath}/addPlayers`, params);
  return response.data;
};

export const addRecord = async (
  params: AddRecordParams
): Promise<AddRecordResponse> => {
  const response = await axios.post(`${basePath}/addGameRecord`, params);
  return response.data;
};

export const getRecordList = async (
  params: GetRecordParams
): Promise<GetRecordResponse> => {
  const response = await axios.get(`${basePath}/getGameRecords`, {
    params: params,
  });

  return response.data;
};
