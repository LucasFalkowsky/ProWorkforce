import { StatusCode } from "@/frontend/hooks/utils/http/status-code";

class NotFoundError extends Error {
  statusCode: StatusCode;

  constructor(message: string) {
    super(message);
    this.statusCode = 500;
  }
}

export default NotFoundError;