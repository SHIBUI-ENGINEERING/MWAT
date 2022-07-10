import { resolve } from "https://deno.land/std@0.147.0/path/mod.ts";
import { STR_CLI_HELP_RUN } from "../../_strings.ts";

function validate(args: string[]): boolean {
  return true;
}

export async function run(args: string[]) {
  if (!validate(args)) {
    console.log(STR_CLI_HELP_RUN());
  }

  const relatiovePath = args[0];
  const absolutePath = resolve(Deno.cwd(), relatiovePath);

  console.log("PATHS:", Deno.cwd(), relatiovePath, absolutePath);

  const workflowModule = await import(absolutePath);

  console.log(workflowModule);
}
