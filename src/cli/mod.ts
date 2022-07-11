import * as commands from "./commands/_mod.ts";
import { STR_CLI_HELP } from "../_strings.ts";
import { Logger } from "../logger/mod.ts";

const logger = new Logger();

function parseArgs(args: string[]) {
  if (args.length == 0) {
    console.log(STR_CLI_HELP());
    return;
  }

  const commandArgs = args.slice(1);

  switch (args[0]) {
    case "help":
      commands.help(commandArgs);
      break;
    case "version":
      commands.version(commandArgs);
      break;
    case "upgrade":
      commands.upgrade(commandArgs);
      break;
    case "run":
      commands.run(commandArgs);
      break;
    default:
      commands.help(args);
  }
}

function main(args: string[]): void {
  try {
    // new Logger().debug("debug");
    // new Logger().info("info");
    // new Logger().warn("warn");
    // new Logger().error("error");
    // new Logger().fatal("fatal");

    parseArgs(args);
  } catch (e) {
    logger.fatal(e.toString());
    Deno.exit(-1);
  }
}

main(Deno.args);
