import { StatusCode } from "@/frontend/hooks/utils/http/status-code";
import { NextApiRequest } from "next";

function requestNotOkayMsg(
    req: NextApiRequest, statusCode: StatusCode,
  ): string {
    return `The request with the method: '${req.method}', the query: '${Object.values(req.query)}' \
  and the body: '${req.body}' lead to a return of a '${statusCode}'.`;
  }

export default requestNotOkayMsg;