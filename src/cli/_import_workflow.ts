import { resolve } from "https://deno.land/std@0.147.0/path/mod.ts";
import { IWorkflow } from "../types/IWorkflow.ts";
import { Logger } from "../logger/_log.ts";

const logger = new Logger();

export async function importWorkflow(
  relatiovePath: string,
): Promise<IWorkflow | null> {
  try {
    const absolutePath = resolve(Deno.cwd(), relatiovePath);
    const workflowModule = await import(`file://${absolutePath}`);
    return workflowModule.workflow;
  } catch (e) {
    logger.fatal(e.toString());
    return null;
  }
}
