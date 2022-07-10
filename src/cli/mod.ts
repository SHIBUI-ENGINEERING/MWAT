import * as commands from "./commands/_mod.ts";
import { STR_CLI_HELP } from "../_strings.ts";

function parseArgs(args: string[]) {
  if (args.length == 0) {
    console.log(STR_CLI_HELP());
    return;
  }

  switch (args[0]) {
    case "help":
      commands.help();
      break;
    case "version":
      commands.version();
      break;
    case "upgrade":
      commands.upgrade();
      break;
    case "run":
      commands.run();
      break;
    default:
      commands.help();
  }
}

function main(args: string[]): void {
  parseArgs(args);
}

main(Deno.args);
