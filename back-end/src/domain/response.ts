class Response {
  timestamp: string;
  statusCode: number;
  httpStatus: string;
  message: string;
  data: any;

  constructor(
    statusCode: number,
    httpStatus: string,
    message: string,
    data: any
  ) {
    this.timestamp = new Date().toLocaleString();
    this.statusCode = statusCode;
    this.httpStatus = httpStatus;
    this.message = message;
    this.data = data;
  }
}

export default Response;
