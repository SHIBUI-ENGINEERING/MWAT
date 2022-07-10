export enum COLORS {
  DEFAULT,
  RED,
  GREEN,
  BLUE,
  MAGANTA,
  ORANGE,
}

const COLOR_CODES: string[] = [];

export function colorize(color: COLORS, str: string): string {
  return `${COLOR_CODES[color]}${str}${COLOR_CODES[COLORS.DEFAULT]}`;
}
