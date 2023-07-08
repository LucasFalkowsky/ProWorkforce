import exp from "constants";
import { StatusCode } from "./status-code";

class PostError extends Error {
    info?: Error;
    status: StatusCode;
  
    constructor(status: StatusCode, message?: string) {
      super(message);
      this.status = status;
    }
}

export default PostError;