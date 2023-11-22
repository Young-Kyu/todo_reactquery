
/**
 * @params staus : number, message : string, statusCode : string
 */
class CustomServerError {
  private status = 0;
  private message = '';
  private statusCode = '';
  constructor(status: number, message: string, statusCode: string) {
    this.status = status;
    this.message = message;
    this.statusCode = statusCode;
  }

  getError() {
    return {
      status: this.status,
      message: this.message,
      statusCode: this.statusCode
    }
  }

};

export default CustomServerError;
