import { _TCheck, _TExec, Action, ITask } from "./types/ITask.ts";

// deno-lint-ignore require-await
const defaultCheck: _TCheck = async () => {
  return Action.allow();
};

export class Task implements ITask {
  name: string;
  check?: _TCheck | undefined;
  exec: _TExec;
  numberOfChecks?: number | undefined;
  intervalBetweenChecks?: number | undefined;
  numberOfExecutions?: number | undefined;
  intervalBetweenExecutions?: number | undefined;

  constructor(taskStruct: ITask) {
    this.name = taskStruct.name;
    this.check = taskStruct.check || defaultCheck;
    this.exec = taskStruct.exec;
    this.numberOfChecks = taskStruct.numberOfChecks || 1;
    this.intervalBetweenChecks = taskStruct.intervalBetweenChecks || 1000;
    this.numberOfExecutions = taskStruct.numberOfExecutions || 1;
    this.intervalBetweenExecutions = taskStruct.intervalBetweenExecutions ||
      1000;
  }

  async launch() {
  }
}
