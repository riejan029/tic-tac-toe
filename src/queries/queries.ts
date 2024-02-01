import { useQuery } from "react-query";
import { getRecordList } from "~/api/api";
import { GetRecordParams, GetRecordResponse } from "~/api/types";

export const useHistory = (params: GetRecordParams) => {
  return useQuery<GetRecordResponse, Error>("getHistory", () =>
    getRecordList(params)
  );
};
