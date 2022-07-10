export enum _EActionType {
  ALLOW,
  SKIP,
  IGNORE,
  TERMINATE,
}

export enum _EResultType {
  SUCCESS,
  FAIL,
  FINALIZE,
  TERMINATE,
}

export enum EFailReason {
  UNKNOWN,
  INTERNAL_ERROR,
  EXTERNAL_ERROR,
}

export interface _IAction {
  type: _EActionType;
  taskName?: string;
}

export interface _IResult {
  type: _EResultType;
  taskName?: string;
}

export type _TCheck = () => Promise<_IAction>;

export type _TExec = () => Promise<_IResult>;

export interface ITask {
  name: string;
  check?: _TCheck;
  exec: _TExec;
  numberOfChecks?: number;
  intervalBetweenChecks?: number;
  numberOfExecutions?: number;
  intervalBetweenExecutions?: number;
}

export const Action = {
  allow: (): _IAction => {
    return { type: _EActionType.ALLOW };
  },

  skip: (taskName?: string): _IAction => {
    return { type: _EActionType.SKIP, taskName };
  },

  ignore: (): _IAction => {
    return { type: _EActionType.IGNORE };
  },

  terminate: (): _IAction => {
    return { type: _EActionType.TERMINATE };
  },
};

export const Result = {
  success: (nextTaskName?: string): _IResult => {
    return { type: _EResultType.SUCCESS, taskName: nextTaskName };
  },

  fail: (nextTaskName?: string, reason?: EFailReason): _IResult => {
    return { type: _EResultType.FAIL, taskName: nextTaskName };
  },

  finalize: (): _IResult => {
    return { type: _EResultType.FINALIZE };
  },

  terminate: (): _IResult => {
    return { type: _EResultType.TERMINATE };
  },
};
