import { ITask } from "./ITask.ts";

export type _TAccept = () => Promise<boolean>;

export interface IWorkflow {
  name: string;
  accept?: _TAccept;
  tasks: ITask[];
  numberOfAttempts?: number;
  intervalBetweenAttempts?: number;
}
