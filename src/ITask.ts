export enum ActionTypes {
  ALLOW,
  SKIP,
  IGNORE,
  TERMINATE,
}

export enum ResultTypes {
  SUCSESS,
  FAIL,
  FINALIZE,
}

export interface IAction {
  type: ActionTypes;
  taskName?: string;
}

export interface IResult {
  type: ResultTypes;
  taskName?: string;
}

export type TCheck = () => Promise<IAction>;

export type TExec = () => Promise<IResult>;

export interface ITask {
  name: string;
  check?: TCheck;
  exec: TExec;
  numberOfChecks?: number;
  intervalBetweenChecks?: number;
  numberOfExecutions?: number;
  intervalBetweenExecutions?: number;
}

export const Action = {
  allow: (): IAction => {
    return { type: ActionTypes.ALLOW };
  },

  skip: (taskName?: string): IAction => {
    return { type: ActionTypes.SKIP, taskName };
  },

  ignore: (): IAction => {
    return { type: ActionTypes.IGNORE };
  },

  terminate: (): IAction => {
    return { type: ActionTypes.TERMINATE };
  },
};

export const Result = {
  sucsess: (nextTaskName?: string): IResult => {
    return { type: ResultTypes.SUCSESS, taskName: nextTaskName };
  },
  fail: (nextTaskName?: string): IResult => {
    return { type: ResultTypes.FAIL, taskName: nextTaskName };
  },
  finalize: (): IResult => {
    return { type: ResultTypes.FINALIZE };
  },
};
