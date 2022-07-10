import { ITask } from "../src/ITask.ts";
import { IWorkflow } from "../src/IWorkflow.ts";

const task2: ITask = {
  name: "Task 2",
  check: async () => {
  },
  exec: async () => {
  },
};

const task1: ITask = {
  name: "Task 1",
  check: async () => {
  },
  exec: async () => {
  },
};

const task0: ITask = {
  name: "Task 0",
  check: async () => {
  },
  exec: async () => {
  },
};

export const workflow: IWorkflow = {
  name: "Example Workflow",
  tasks: [task0, task1, task2],
};
