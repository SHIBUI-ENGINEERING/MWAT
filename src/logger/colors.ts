export enum COLOR {
  DEFAULT,
  RED,
  GREEN,
  BLUE,
  MAGANTA,
  YELLOW,
  CYAN,
  ORANGE,
  PURPLE,
}

const COLOR_CODES: string[] = [
  "\u001b[0m",
  "\u001b[31m",
  "\u001b[32m",
  "\u001b[34m",
  "\u001b[35m",
  "\u001b[33m",
  "\u001b[36m",
  "",
  "\u001b[95m",
];

export function colorize(color: COLOR, str: string): string {
  return `${COLOR_CODES[color]}${str}${COLOR_CODES[COLOR.DEFAULT]}`;
}

export function RED(str: string): string {
  return colorize(COLOR.RED, str);
}

export function GREEN(str: string): string {
  return colorize(COLOR.GREEN, str);
}

export function BLUE(str: string): string {
  return colorize(COLOR.BLUE, str);
}

export function MAGANTA(str: string): string {
  return colorize(COLOR.MAGANTA, str);
}

export function YELLOW(str: string): string {
  return colorize(COLOR.YELLOW, str);
}

export function CYAN(str: string): string {
  return colorize(COLOR.YELLOW, str);
}
