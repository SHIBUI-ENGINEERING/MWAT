// deno-lint-ignore-file
import { Action, ITask, Result } from "../src/types/ITask.ts";
import { IWorkflow } from "../src/types/IWorkflow.ts";

const task2: ITask = {
  name: "Task 2",
  check: async () => {
    return Action.allow();
  },
  exec: async () => {
    return Result.success();
  },
};

const task1: ITask = {
  name: "Task 1",
  check: async () => {
    return Action.allow();
  },
  exec: async () => {
    return Result.success(task2.name);
  },
};

const task0: ITask = {
  name: "Task 0",
  check: async () => {
    return Action.allow();
  },
  exec: async () => {
    return Result.success(task1.name);
  },
};

export const workflow: IWorkflow = {
  name: "Example Workflow",
  tasks: [task0, task1, task2],
};
