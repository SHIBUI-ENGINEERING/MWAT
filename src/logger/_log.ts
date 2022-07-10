import { defualtLogFormatter } from "./_formats.ts";
import { LEVEL } from "./_levels.ts";

export class Logger {
  constructor() {
  }

  log(level: LEVEL, msg: string, ...data: object[]) {
    console.log(defualtLogFormatter(level, msg, ...data));
  }

  debug(msg: string, ...data: object[]) {
    this.log(LEVEL.DEBUG, msg, ...data);
  }

  info(msg: string, ...data: object[]) {
    this.log(LEVEL.INFO, msg, ...data);
  }

  warn(msg: string, ...data: object[]) {
    this.log(LEVEL.WARN, msg, ...data);
  }

  error(msg: string, ...data: object[]) {
    this.log(LEVEL.ERROR, msg, ...data);
  }

  fatal(msg: string, ...data: object[]) {
    this.log(LEVEL.FATAL, msg, ...data);
  }
}
