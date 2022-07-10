import { ITask } from "./ITask.ts";
import { IWorkflow } from "./IWorkflow.ts";

const task2: ITask = {
  name: "Test Task 2",
  check: async () => {
  },
  exec: async () => {
  },
};

const task1: ITask = {
  name: "Test Task 1",
  check: async () => {
  },
  exec: async () => {
  },
};

const task0: ITask = {
  name: "Test Task 0",
  check: async () => {
  },
  exec: async () => {
  },
};

export const workflow: IWorkflow = {
  name: "Test Workflow",
  tasks: [task0, task1, task2],
};
