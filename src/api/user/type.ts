export interface ReqParams {
  username: string;
  password: string;
}

export interface ResResult {
  data?: ResResultData;
  status: string | "";
  headers: object;
}

export interface ResResultData {
  code?: number;
  result?: any;
  message: string;
  status: string;
}
