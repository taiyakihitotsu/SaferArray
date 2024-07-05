// ------------------------------------

import {
  type T1,
  type T2,
  type T3,
  type T4,
  type T5,
  type T6,
  type T7,
  type T8,
  type T9,
  type T10,
  type TpseudoNumber,
  type Tzero,
  V1,
  V2,
  V3,
  V4,
  V5,
  V6,
  V7,
  V8,
  V9,
  V10,
  Vzero,
} from "./peano";

type Tover10<T> = T extends Array<
  Array<Array<Array<Array<Array<Array<Array<Array<Array<infer U>>>>>>>>>
>
  ? true
  : false;
type Tmin10<T> = T extends Array<
  Array<Array<Array<Array<Array<Array<Array<Array<Array<infer U>>>>>>>>>
>
  ? U
  : T;
type Tadd10<T> = Array<
  Array<Array<Array<Array<Array<Array<Array<Array<Array<T>>>>>>>>>
>;
// over 1000
// const Tmulov1000_a: Tmul<Tmul<T10,T10>, T10> = '1'
const Tmulov1000_b: Tmin10<T10> = Vzero;
const Tmulov1000_c: Tadd10<Tzero> = V10;

const Vmin10 = (n: TpseudoNumber) => n[0][0][0][0][0][0][0][0][0][0];
const Vadd10 = (n: TpseudoNumber) => [[[[[[[[[[n]]]]]]]]]];

type T20 = Tadd10<T10>;
type T30 = Tadd10<T20>;
type T40 = Tadd10<T30>;
type T50 = Tadd10<T40>;
type T60 = Tadd10<T50>;
type T70 = Tadd10<T60>;
type T80 = Tadd10<T70>;
type T90 = Tadd10<T80>;
type T100 = Tadd10<T90>;

const V20: T20 = Vadd10(V10);
const V30: T30 = Vadd10(V20);
const V40: T40 = Vadd10(V30);
const V50: T50 = Vadd10(V40);
const V60: T60 = Vadd10(V50);
const V70: T70 = Vadd10(V60);
const V80: T80 = Vadd10(V70);
const V90: T90 = Vadd10(V80);
const V100: T100 = Vadd10(V90);

// type TELesserUnion<T> = T extends Array<infer U> ? (T | TELesserUnion<U>) : never
type TELesserUnion<T> = T extends Array<infer U> ? T | TELesserUnion<U> : never;
type TLesserUnion<T> = T extends Array<infer U> ? TELesserUnion<U> : never;

const testTELesserT3V0: TELesserUnion<T3> = Vzero;
const testTELesserT3V3: TELesserUnion<T3> = V3;
// const testTELesserT3V4: TELesserUnion<T3> = V4 // Error.
const testTLesserT3V2: TLesserUnion<T3> = V2; // Error.
// const testTLesserT3V3: TLesserUnion<T3> = V3 // Error.

// biome-ignore lint/suspicious/noExplicitAny:
const arraystr = (a: any[]): string => {
  return JSON.stringify(a);
};
const arrayeq = <T>(a: T[], b: T[]) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const RtoV = (n: number): TpseudoNumber => {
  // biome-ignore  lint/suspicious/noExplicitAny:
  let acc: any = Vzero;
  let i = n;
  while (0 < i) {
    acc = [acc];
    i = i - 1;
  }
  return acc;
};

const VtoR = (n: TpseudoNumber): number => {
  // biome-ignore lint/suspicious/noExplicitAny:
  let r: any = n;
  let i = 0;
  while (!arrayeq(Vzero, r)) {
    i = i + 1;
    r = r[0];
  }
  return i;
};

////
// test
const t4: T4 = RtoV(4);

type Tdec<T> = T extends Array<infer U> ? U : never;
// type Tdec<T> = T extends Array<infer U> ? U : Tzero
type Tinc<T> = T extends Array<infer U> ? Array<Array<U>> : never;

// memo.
// 2589 error.
// type Tadd<T, TT> = TT extends Tzero
//     ? T
//     : T extends Tzero
//     ? TT
//     : TT extends Array<infer U>
//     ? Tadd<Tinc<T>, U>
//     : never
type Tadd<T, TT> = TT extends Tzero
  ? T
  : T extends Tzero
    ? TT
    : Tover10<TT> extends true
      ? // ---
        Tadd<Tadd10<T>, Tmin10<TT>>
      : TT extends Array<infer U>
        ? // ---
          Tadd<Tinc<T>, U>
        : never;

type Tmin<T, TT> = TT extends Tzero
  ? T
  : // ---
    Tover10<TT> extends true
    ? Tmin<Tmin10<T>, Tmin10<TT>>
    : // ---
      TT extends Array<infer U>
      ? Tmin<Tdec<T>, U>
      : never;

type Tmul<T, TT, I = T> = T extends T1
  ? TT
  : TT extends T1
    ? T
    : T extends Tzero
      ? Tzero
      : TT extends Tzero
        ? Tzero
        : TT extends Array<infer U>
          ? Tmul<Tadd<T, I>, U, I>
          : never;

type Tequal<T, TT> = T extends TT ? (TT extends T ? true : never) : false;

type Tgrater<T, TT> = T extends Tzero
  ? false
  : TT extends Tzero
    ? true
    : Tgrater<Tdec<T>, Tdec<TT>>;

type Tlesser<T, TT> = Tequal<T, TT> extends true ? false : Tgrater<TT, T>;

type TEgrater<T, TT> = Tequal<T, TT> extends true ? true : Tgrater<T, TT>;
type TElesser<T, TT> = Tequal<T, TT> extends true ? true : Tgrater<TT, T>;

const aaaa: Tmul<T4, T4> = [[[[[[V10]]]]]];
const bbbb: Tmul<T5, T6> = V30;

// --------------------
// test
const Tadd_50a: Tadd<T20, T30> = V50;
// const Tadd_50b: Tadd<T20, T30> = V60 // error.

const Tmul6: Tmul<T2, T3> = V6;
const Tmul0a: Tmul<T5, Tzero> = Vzero;
const Tmul0b: Tmul<Tzero, T5> = Vzero;
const Tmul0c: Tmul<Tzero, Tzero> = Vzero;
const Tmul0d: Tmul<Tzero, T1> = Vzero;
const Tmul0e: Tmul<T1, Tzero> = Vzero;
const Tmul1a: Tmul<T1, T1> = V1;
// stress test
// const TmulSa: Tmul<T10, Tmul<T10, T10> extends infer A ? A : never> = V1;

const aaaaa: T10 = V10;

const maybe0c: Tmin<T2, T1> = V1;
const maybe0d: Tmin<T5, T3> = V2;

const Tincv0: Tinc<Tzero> = V1;

const Tev0v1: Tequal<Tzero, T1> = false;
const Tev0v0: Tequal<Tzero, Tzero> = true;

const Tgev0v1: Tgrater<Tzero, T1> = false;
const Tgev1v0: Tgrater<T1, Tzero> = true;
const Tgev0v0: Tgrater<Tzero, Tzero> = false;

const Tlev0v1: Tlesser<Tzero, T1> = true;
const Tlev1v0: Tlesser<T1, Tzero> = false;
const Tlev0v0: Tlesser<Tzero, Tzero> = false;

("Virtual Number Operations");
const Vadd = <N extends TpseudoNumber, M extends TpseudoNumber>(
  n: N,
  m: M,
): Tadd<N, M> => {
  // biome-ignore lint/suspicious/noExplicitAny:
  let r: any = n;
  // biome-ignore lint/suspicious/noExplicitAny:
  let t: any = m;
  while (!arrayeq(t, Vzero)) {
    r = [r];
    t = t[0];
  }
  return r;
};

const Vmin = <N extends TpseudoNumber, M extends TELesserUnion<N>>(
  n: N,
  m: M,
): Tmin<N, M> => {
  // biome-ignore lint/suspicious/noExplicitAny:
  let r: any = n;
  // biome-ignore lint/suspicious/noExplicitAny:
  let t: any = m;
  while (!arrayeq(t, Vzero)) {
    r = r[0];
    t = t[0];
  }
  return r;
};

const Vmul = <N extends TpseudoNumber, M extends TpseudoNumber>(
  n: N | Tzero | T1,
  m: M | Tzero | T1,
): Tmul<N, M> => {
  if (n === Vzero || m === V1) return n as Tmul<N, M>;
  if (m === Vzero || n === V1) return m as Tmul<N, M>;
  // biome-ignore lint/suspicious/noExplicitAny:
  let r: any = n;
  // biome-ignore lint/suspicious/noExplicitAny:
  let tm: any = m;
  while (tm !== V1) {
    r = Vadd(r, n);
    tm = tm[0];
  }
  return r;
};

const Vaddv6: T6 = Vadd(V2, V4);
// const Vaddv7: T7 = Vadd(V2, V4) // Error.
const Vaddv6_2: T6 = Vadd(V6, Vzero);

const VminV2_1: T2 = Vmin(V5, V3);
const VminV0_1: Tzero = Vmin(V5, V5);
const VminV0_2: Tzero = Vmin(Vzero, Vzero);
// const VminV2_2: T2 = Vmintest(V5,V2) // Error.
// const VminV2_3: any = Vmintest(V4,V6) // Error.

const VmulV1_1: T1 = Vmul(V1, V1);
const VmulV0_1: Tzero = Vmul(V1, Vzero);
const VmulV0_2: Tzero = Vmul(Vzero, V1);
const VmulV6_1: T6 = Vmul(V2, V3);
const VmulV6_2: T6 = Vmul(V3, V2);
const VmulV30_1: typeof V30 = Vmul(V5, V6);

// const VmulV50_1 = Vmul(V30, Vmul(V30,V30))
// const Vmult1: Tmul<typeof V30, typeof V30> = Vmul(V30,V30)
// const Vmult2: Tmul<Tmul<Tmul<Tmul<Tmul<T10,T10>,T10>,T2>,T1>,T1> = V30 // error,

// const Vmult3: Tadd<T1,Tmul<Tmul<Tmul<T10,T10>,T10>,T1>> = V30 // error
// const Vmult4: Tadd<Tmul<Tmul<Tmul<T10,T10>,T10>,T1>, T1> = V30

("Inspection of increase/decrease of a number of elems.");

type TWrapArray<T, N> = {
  type: N;
  data: T[];
};

type TExtract<T> = T extends Array<infer U> ? U : never;

const WrapArray = <T, N>(data: T[], num: N): TWrapArray<T, N> => {
  return {
    type: num,
    data: data,
  };
};

const UnwrapArray = <T>({ type, data }: { type: unknown; data: T[] }): T[] => {
  return data;
};

const inWrapRest = <T, N extends TpseudoNumber>({
  type,
  data,
}: { type: N; data: T[] }): TWrapArray<T, NonNullable<Tdec<N>>> => {
  const [a, ...retdata] = data;
  return {
    type: type[0],
    data: retdata,
  };
};

const inWrapGet = <T, N extends TpseudoNumber, S extends TELesserUnion<N>>(
  { type, data }: { type: N; data: T[] },
  n: S,
): T => {
  return data[VtoR(n)];
};

const inWrapConj = <T, N extends TpseudoNumber>(
  { type, data }: { type: N; data: T[] },
  v: T,
): TWrapArray<T, N[]> => {
  return {
    type: [type],
    data: [...data, v],
  };
};

const inWrapTake = <T, M extends TpseudoNumber, N extends TELesserUnion<M>>(
  n: N,
  { type, data }: { type: M; data: T[] },
): { type: N; data: T[] } => {
  return {
    type: n,
    data: data.slice(0, VtoR(n)),
  };
};

const inWrapDrop = <T, M extends TpseudoNumber, N extends TELesserUnion<M>>(
  n: N,
  { type, data }: { type: M; data: T[] },
): { type: Tmin<M, N>; data: T[] } => {
  return {
    type: Vmin(type, n), // todo.
    data: data.slice(VtoR(n), VtoR(type)),
  };
};

const inWrapConcat = <T, N extends TpseudoNumber, M extends TpseudoNumber>(
  a: { type: N; data: T[] },
  b: { type: M; data: T[] },
): { type: Tadd<N, M>; data: T[] } => {
  return {
    type: Vadd(a.type, b.type),
    data: a.data.concat(b.data),
  };
};

const inWrapFilter = <T, N extends TpseudoNumber, M extends TELesserUnion<N>>(
  f: (x: T) => boolean,
  { type, data }: { type: N; data: T[] },
): { type: M; data: T[] } => {
  const r: T[] = data.filter(f);
  return {
    type: RtoV(r.length) as M,
    data: r,
  };
};

// todo
const inWrapRemove = <T, N extends TpseudoNumber, M extends TELesserUnion<N>>(
  f: (x: T) => boolean,
  { type, data }: { type: N; data: T[] },
): { type: M; data: T[] } => {
  const r: T[] = data.filter((x: T) => !f(x));
  return {
    type: RtoV(r.length) as M,
    data: r,
  };
};

// ---------------
// test
const tar = [0, 1, 2, 3];
const tar2 = [4, 5, 6, 7];
const tarest = [1, 2, 3];

let wtar: TWrapArray<number, T4> = WrapArray(tar, V4);
const wtar2: TWrapArray<number, T3> = WrapArray(tarest, V3);
wtar = WrapArray(tar2, V4); // It can be done.
// wtar = WrapArray([4, 5, 6], V3) // Error.

const __a = WrapArray([0, 1, 2, 3], V4);
// let __b : TWrapArray<number, T3> = __a

const wtarnum: T4 = wtar.type;
const wtarest = inWrapRest(wtar);
const wtarestnum: T3 = wtarest.type;

const __c: TWrapArray<number, T3> = inWrapRest(__a);
// let __d : TWrapArray<number, T2> = inWrapRest(__a) // <= Error.

// console.log(inWrapConj(wtar, 19));
// console.log(arrayeq(inWrapConj(wtar, 19).type, V5));

const __e: TWrapArray<number, T5> = inWrapConj(__a, 4);
const __f = WrapArray([0, 1, 2, 3], V4);
let __g: TWrapArray<number, TLesserUnion<T4>> = inWrapRest(__f);
__g = inWrapRest(__g);

const wraptaken = inWrapTake(V2, wtar);
// console.log(VtoR(wraptaken.type));
// console.log(wraptaken);
// const wraptaken2 = WrapTake(V5, wtaret) // Error.

// arrayeq([0,1,2,3], UnwrapArray(inWrapRest(inWrapConj(WrapArray([0,1,2,3])),1)))

const wrapdropen = inWrapDrop(V3, wtar);
// console.log(VtoR(wrapdropen.type));
// console.log(wrapdropen);
// console.log(VtoR(Vmin(V4, V3)));

const wrapconcat: TWrapArray<number, T7> = inWrapConcat(wtar, wtar2);
// const wrapconcat2: TWrapArray<number, T6> = WrapConcat(wtar, wtar2) // Error.
// console.log(VtoR(wrapconcat.type));
// console.log(wrapconcat);

const wrapfilter: TWrapArray<number, TELesserUnion<T7>> = inWrapFilter(
  (x: number) => 3 > x,
  wrapconcat,
);
const wrapfilter2: TWrapArray<number, TELesserUnion<T3>> = inWrapFilter(
  (x: number) => 3 > x,
  wrapconcat,
); // NOTE.
// const wrapfilter3: TWrapArray<number, T10> = WrapFilter((x:number)=> 3 > x, wrapconcat) // Error.
// console.log(arraystr(RtoV(2)))
// console.log(VtoR(wrapfilter.type));
// console.log(wrapfilter);

let __h: TWrapArray<number, TELesserUnion<T4>> = inWrapFilter(
  (x: number) => 2 > x,
  __a,
);
__h = WrapArray([4, 5, 6, 7], V4);
// __h = WrapArray([4,5,6,7,8], V5)













type Operator = "<" | ">" | "=" | "<=" | ">="
type Calculator = "+" | "-" | "*" | "/" | "%"
type Zero = 0
type Peano = Zero | [Peano]
type Pivot = string | Peano
type Relation = {pivot: Pivot, op: Operator | Calculator, num: Peano}

type R1 = {"pivot": "A", "op": "<", "num": [[[0]]]}
type R2 = {"pivot": "A", "op": "<", "num": [[[[0]]]]}
type OP1 =  {"pivot": [[[[0]]]], "op": "+", "num": [[[[0]]]]}
type R3 = {"pivot": [0], "op": "<", "num": [[[[0]]]]}




type Validate<A extends Relation, B extends Relation, env = Peano[], _AOP = A["op"], _BOP = B["op"], _Anum = A[""]> = _BOP extends "+" ? _AOP = "<" ?

const testsa : Validate<R1, OP1> = "+"


















export {
  arrayeq,
  type Tzero,
  type T1,
  type T2,
  type T3,
  type T4,
  type T5,
  type T6,
  type T7,
  type T8,
  type T9,
  type T10,
  Vzero,
  V1,
  V2,
  V3,
  V4,
  V5,
  V6,
  V7,
  V8,
  V9,
  V10,
  type TpseudoNumber,
  type TELesserUnion,
  type TLesserUnion,
  RtoV,
  VtoR,
  Vadd,
  Vmin,
  Vmul,
  type TWrapArray,
  WrapArray,
  UnwrapArray,
  inWrapRest,
  inWrapConj,
  inWrapGet,
  inWrapTake,
  inWrapDrop,
  inWrapConcat,
  inWrapFilter,
  inWrapRemove,
};
