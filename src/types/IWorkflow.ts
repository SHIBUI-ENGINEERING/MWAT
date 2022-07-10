import { ITask } from "./ITask.ts";

export interface IWorkflow {
  name: string;
  accept?: undefined;
  tasks: ITask[];
  numberOfAttempts?: number;
  intervalBetweenAttempts?: number;
}
