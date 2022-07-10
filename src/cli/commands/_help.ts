import { STR_CLI_HELP } from "../../_strings.ts";

function validate(args: string[]) {
}

export function help(args: string[]) {
  console.log(STR_CLI_HELP());
}
