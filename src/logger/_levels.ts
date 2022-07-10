import { COLOR } from "./colors.ts";

export enum LEVEL {
  LOG,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL,
}

export const LEVEL_NAMES = [
  "LOG",
  "DEBUG",
  "INFO",
  "WARM",
  "ERROR",
  "FATAL",
];

export const LEVEL_COLORS = [
  COLOR.DEFAULT,
  COLOR.BLUE,
  COLOR.GREEN,
  COLOR.YELLOW,
  COLOR.PURPLE,
  COLOR.RED,
];
