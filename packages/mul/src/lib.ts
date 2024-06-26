export interface MulParams {
  value: number;
  type: string;
}
export enum MulOp {
  add = 'add',
  sub = 'sub',
  mul = 'mul',
}
export function mul(a: MulParams, b: MulParams) {
  return a.value * b.value;
}
