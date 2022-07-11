import { STR_CLI_HELP_RUN, STR_CLI_INVALID_COMMAND } from "../../_strings.ts";
import { importWorkflow } from "../_import_workflow.ts";
import { launch } from "../../_runtime.ts";

function validate(args: string[]): boolean {
  return args.length > 0;
}

export async function run(args: string[]) {
  if (!validate(args)) {
    console.log(STR_CLI_INVALID_COMMAND());
    console.log("HELP: mwat", STR_CLI_HELP_RUN());
    Deno.exit(-1);
  }

  const relativePath = args[0];
  const workflowModule = await importWorkflow(relativePath);

  if (!workflowModule) {
    Deno.close(-1);
  }

  await launch(workflowModule!);
}
