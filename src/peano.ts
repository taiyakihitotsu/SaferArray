export type Tzero = [null];

// biome-ignore lint/suspicious/noExplicitAny:
export type TpseudoNumber = any[];

export type T1 = Tzero[];
export type T2 = T1[];
export type T3 = T2[];
export type T4 = T3[];
export type T5 = T4[];
export type T6 = T5[];
export type T7 = T6[];
export type T8 = T7[];
export type T9 = T8[];
export type T10 = T9[];

export const Vzero: Tzero = [null];
export const V1: T1 = [Vzero];
export const V2: T2 = [V1];
export const V3: T3 = [V2];
export const V4: T4 = [V3];
export const V5: T5 = [V4];
export const V6: T6 = [V5];
export const V7: T7 = [V6];
export const V8: T8 = [V7];
export const V9: T9 = [V8];
export const V10: T10 = [V9];
