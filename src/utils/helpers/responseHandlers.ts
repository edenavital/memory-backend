import { Response } from 'express';
import { RESPONSE_MESSAGES } from '../../consts';
import { ISucessfullResponse, ISucessfullParams } from '../utils.types';
import { AppError, GlobalErrorType } from '../AppError';

import { StatusCodes } from 'http-status-codes';

export const successResponse = <T>(params: ISucessfullParams<T>, res: Response) => {
  const { statusCode = StatusCodes.ACCEPTED, data } = params;

  return res.status(statusCode).send({ success: true, data });
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
