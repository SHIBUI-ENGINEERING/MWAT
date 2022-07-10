import { COLOR, colorize } from "./colors.ts";

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

const LEVEL_COLORS = [
  COLOR.DEFAULT,
  COLOR.RED,
];

export class Logger {
  constructor() {
  }

  log(level: LEVEL, msg: string, ...data: object[]) {
    const time = new Date().toISOString();
    const str =
      `${time} [ ${
        colorize(LEVEL_COLORS[level], `${LEVEL_NAMES[level]}`)
      } ] - ${colorize(LEVEL_COLORS[level], msg)} ` +
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
