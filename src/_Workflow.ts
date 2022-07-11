import { ITask } from "./types/ITask.ts";
import { _TAccept, IWorkflow } from "./types/IWorkflow.ts";
import { Task } from "./_Task.ts";

const defaultAccept: _TAccept = async () => true;

export class Workflow implements IWorkflow {
  name: string;
  accept?: _TAccept;
  tasks: ITask[];
  numberOfAttempts?: number | undefined;
  intervalBetweenAttempts?: number | undefined;

  constructor(workflowStruct: IWorkflow) {
    this.name = workflowStruct.name;
    this.accept = workflowStruct.accept || defaultAccept;
    this.tasks = this.#initTasks(workflowStruct.tasks);
    this.numberOfAttempts = workflowStruct.numberOfAttempts || 1;
    this.intervalBetweenAttempts = workflowStruct.intervalBetweenAttempts ||
      1000;
  }

  #initTasks(taskStrucs: ITask[]): ITask[] {
    return taskStrucs.map((taskStruct) => new Task(taskStruct));
  }

  async launch() {
    return {};
  }
}
