import { RESPONSE_MESSAGES } from '../consts';
import { ISucessfullResponse, IFailRequest, IFailResponse, ISucessfullRequest } from './utils.types';
import { StatusCodes } from 'http-status-codes';

export const successResponse = <T>({
  status = StatusCodes.ACCEPTED,
  data,
  message = RESPONSE_MESSAGES.SUCCESS,
}: ISucessfullRequest<T>): ISucessfullResponse<T> => {
  return {
    status,
    message,
    data,
  };
};

export const failResponse = ({ status = StatusCodes.INTERNAL_SERVER_ERROR, message = RESPONSE_MESSAGES.FAIL }: IFailRequest): IFailResponse => {
  return {
    status,
    message,
  };
};
