export interface SubParams {
  value: number;
  type: string;
}
export enum SubOp {
  add = 'add',
  sub = 'sub',
  mul = 'mul',
}
export function sub(a: SubParams, b: SubParams) {
  return a.value - b.value;
}
