import ServiceError from "@/backend/services/utils/service-error";
import { StatusCode } from "@/frontend/hooks/utils/http/status-code";
import { NextApiRequest, NextApiResponse } from "next";
import { Struct } from "superstruct";
import requestNotOkayMsg from "./request-message";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";

function validateOrThrow<T>(
    schema: Struct<T>, value: unknown, isCoercionEnabled?: boolean,
  ): T {
    const [err, val] = schema.validate(value, { coerce: (Boolean(isCoercionEnabled)) });
    if (val) {
      return value as T;
    }
    throw err;
  }

function getIdTokenOrThrow(req: NextApiRequest): string {
  const authHeaderContent = req.headers.authorization;

  if (!(typeof authHeaderContent === 'string' && authHeaderContent.includes('Bearer '))) {
    const statusCode = StatusCode.ClientErrorBadRequest;
    throw new ServiceError(statusCode, requestNotOkayMsg(req, statusCode));
  }
  return authHeaderContent.replace('Bearer ', '');
}

function handleError(error: PrismaClientInitializationError | Error | unknown, res: NextApiResponse): void {
  if (error instanceof PrismaClientInitializationError) {
    const errorMessage = error.message || 'Prisma client initialization error';
    console.log(errorMessage);
    return void res.status(500).end(errorMessage);
  } else {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.log(errorMessage);
    return void res.status(400).end(errorMessage);
  }
}

export {
  validateOrThrow,
  getIdTokenOrThrow,
  handleError,
}
