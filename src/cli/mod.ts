import * as commands from "./commands/_mod.ts";
import { STR_CLI_HELP } from "../_strings.ts";
import { Logger } from "../logger/mod.ts";

function parseArgs(args: string[]) {
  if (args.length == 0) {
    console.log(STR_CLI_HELP());
    return;
  }

  switch (args[0]) {
    case "help":
      commands.help(args);
      break;
    case "version":
      commands.version(args);
      break;
    case "upgrade":
      commands.upgrade(args);
      break;
    case "run":
      commands.run(args);
      break;
    default:
      commands.help(args);
  }
}

function main(args: string[]): void {
  new Logger().debug("test debug log");

  parseArgs(args);
}

main(Deno.args);
