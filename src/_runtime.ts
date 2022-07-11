import { IWorkflow } from "./types/IWorkflow.ts";
import { Workflow } from "./_Workflow.ts";

/*
successfully
unsuccessfully
partially
*/

function initializeWorkflow(workflowModule: IWorkflow): Workflow | null {
  try {
    return new Workflow(workflowModule);
  } catch (e) {
    return null;
  }
}

async function executeWorkflow(workflow: Workflow): Promise<object> {
  return await workflow.launch();
}

export async function launch(workflowModule: IWorkflow) {
  const workflow = initializeWorkflow(workflowModule);

  console.log(workflow);

  let res = null;
  if (workflow) {
    res = await executeWorkflow(workflow);
  }

  return res;
}
