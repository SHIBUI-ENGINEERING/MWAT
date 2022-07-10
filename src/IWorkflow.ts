import { ITask } from "./ITask.ts";

export interface IWorkflow {
  name: string;
  tasks: ITask[];
}
