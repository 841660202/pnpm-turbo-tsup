export interface AddParams {
  value: number;
  type: string;
}
export enum AddOp {
  add = 'add',
  sub = 'sub',
  mul = 'mul',
}
export function add(a: AddParams, b: AddParams) {
  return a.value + b.value;
}
