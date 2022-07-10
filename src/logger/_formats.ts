import { colorize } from "./colors.ts";
import { LEVEL, LEVEL_COLORS, LEVEL_NAMES } from "./_levels.ts";

export function defualtLogFormatter(
  level: LEVEL,
  msg: string,
  ...data: object[]
): string {
  return `${new Date().toISOString()} [ ${
    colorize(LEVEL_COLORS[level], `${LEVEL_NAMES[level]}`)
  } ] - ${colorize(LEVEL_COLORS[level], msg)} ` +
    (data.length ? `DATA: ${JSON.stringify(data, null, 2)}` : "");
}
