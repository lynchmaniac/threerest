/**
* Rest service error
* @class
*/
export default class RestError extends Error {
  
  constructor(public message: string, public code: number) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.stack = (new Error()).stack;
  }

};
