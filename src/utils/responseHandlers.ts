import { Response } from 'express';
import { RESPONSE_MESSAGES } from '../consts';
import { ISucessfullResponse, ISucessfullRequest } from './utils.types';
import { AppError, GlobalErrorType } from './AppError';

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

/**
 * We can get either Error or IAppError
 * TODO: return less informative error on production
 *  */
export const errorResponse = (err: GlobalErrorType, res: Response) => {
  if (err instanceof AppError) {
    const { statusCode = StatusCodes.INTERNAL_SERVER_ERROR, getErrorInfo } = err;

    return res.status(statusCode).send(getErrorInfo());
  }

  return res.status(500).send({
    success: false,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Unknown error',
  });
};
