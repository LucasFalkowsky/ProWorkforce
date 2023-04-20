import { StatusCode } from "@/frontend/hooks/utils/http/status-code";

class ServiceError extends Error {
  statusCode: StatusCode;

  constructor(statusCode: StatusCode, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ServiceError;