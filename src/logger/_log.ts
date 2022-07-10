import { colorize, COLORS } from "./_colors.ts";

export enum LEVEL {
  LOG,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL,
}

const LEVEL_NAMES = [
  "LOG",
  "DEBUG",
  "INFO",
  "WARM",
  "ERROR",
  "FATAL",
];

export class Logger {
  constructor() {
  }

  log(type: LEVEL, msg: string, ...data: object[]) {
    const time = new Date().toISOString();
    const str = `${time} [${LEVEL_NAMES[type]}] ${msg} ` +
      (data.length ? `DATA: ${JSON.stringify(data, null, 2)}` : "");
    console.log(str);
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
