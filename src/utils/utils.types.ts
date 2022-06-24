import { StatusCodes } from 'http-status-codes';

type Message = string;

export interface requestCommon {
  message?: Message;
  status?: StatusCodes;
}

interface responseCommon extends requestCommon {
  success?: boolean;
}

export interface ISucessfullRequest<T> extends requestCommon {
  data: T;
}

export interface ISucessfullResponse<T> extends responseCommon {
  data: T;
}

// export interface IFailRequest extends responseCommon {}
// export interface IFailResponse extends responseCommon {}
