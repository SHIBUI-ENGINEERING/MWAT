export type TCheck = () => Promise<any>;

export type TExec = () => Promise<any>;

export interface ITask {
  name: string;
  check: TCheck;
  exec: TExec;
}
