type Tzero = [null]

type T1 = Tzero[]
type T2 = T1[]
type T3 = T2[]
type T4 = T3[]
type T5 = T4[]
type T6 = T5[]
type T7 = T6[]
type T8 = T7[]
type T9 = T8[]
type T10 = T9[]

const Vzero: Tzero = [null]
const V1: T1 = [Vzero]
const V2: T2 = [V1]
const V3: T3 = [V2]
const V4: T4 = [V3]
const V5: T5 = [V4]
const V6: T6 = [V5]
const V7: T7 = [V6]
const V8: T8 = [V7]
const V9: T9 = [V8]
const V10: T10 = [V9]


type TpseudoNumber  = any[]
type TvirtualNumber = Tzero | Array<TvirtualNumber>
const testV0: TvirtualNumber = Vzero
const testV1: TvirtualNumber = V1
const testV2: TvirtualNumber = V2

function ConvertRtoT (n: number): TpseudoNumber {
  let acc:any = Vzero
  let i = n
  while (0 <= i) {
    acc = [acc]
    i   = i - 1
  }
  return acc
}

const arrayeq = <T>(a: T[], b: T[]) => {
  return JSON.stringify(a) === JSON.stringify(b)
}


////
// test
console.log('ConvertRtoT, 1 is', ConvertRtoT(1))
console.log('ConvertRtoT, 4 is', ConvertRtoT(4))
console.log('ConvertRtoT, 0 is', ConvertRtoT(0))
const t4: T4 = ConvertRtoT(4)


"Math Util for Type Level."

type Tdec<T> = T extends Array<infer U> ? U : never
type Tinc<T> = T extends Array<infer U> ? Array<Array<U>> : never

type Tadd<T, TT> = TT extends Tzero
    ? T
    : T extends Array<infer U>
    ? Tadd<Tinc<T>, Tdec<TT>>
    : never

type Tmin<T, TT> = TT extends Tzero
    ? T
    : TT extends Array<infer U>
    ? Tmin<Tdec<T>, U>
    : never

type Tmul<T, TT, I = T> = T extends (Tzero | T1)
   ? Tmul<TT, T, TT>
   : TT extends Tzero
   ? Tzero
   : TT extends T1
   ? T
   : TT extends Array<infer U>
   ? Tmul<Tadd<T,I>, U, I>
   : never

type Tequal<T, TT> = T extends TT ? (TT extends T ? true : never) : false

type Tgrater<T, TT> = T extends Tzero ? false : (TT extends Tzero ? true : Tgrater<Tdec<T>, Tdec<TT>>)

type Tlesser<T, TT> = T extends Tzero ? (TT extends Tzero ? false : true) : (TT extends Tzero ? false : Tgrater<Tdec<T>, Tdec<TT>>)


// --------------------
// test
const maybe6 : Tmul<T2,T3> = V6
const maybe0a: Tmul<T5, Tzero> = Vzero
const maybe0b: Tmul<Tzero, T5> = Vzero
const maybe0c: Tmin<T2, T1> = V1
const maybe0d: Tmin<T5, T3> = V2

const Tincv0:Tinc<Tzero> = V1

const Tev0v1:Tequal<Tzero, T1> = false
const Tev0v0:Tequal<Tzero, Tzero> = true

const Tgev0v1:Tgrater<Tzero, T1> = false
const Tgev1v0:Tgrater<T1, Tzero> = true
const Tgev0v0:Tgrater<Tzero, Tzero> = false

const Tlev0v1:Tlesser<Tzero, T1> = true
const Tlev1v0:Tlesser<T1, Tzero> = false
const Tlev0v0:Tlesser<Tzero, Tzero> = false



"Virtual Number Operations"
const Vadd = <N extends TpseudoNumber, M extends TpseudoNumber>(n: N, m: M): Tadd<N,M> => {
  let r:any = n
  let t:any = m
  while (arrayeq(t, Vzero)) {
    r = [r]
    t = t[0]
  }
  return r
}

const __Vmin = <N extends TpseudoNumber, M extends TpseudoNumber, B extends Tlesser<N, M>>(n: N, m: M, b: B): Tmin<N,M> => {
  let r:any = n
  let t:any = m
  while (arrayeq(t, Vzero)) {
    r = r[0]
    t = t[0]
  }
  return r
}
const Vmin = <N extends TpseudoNumber, M extends TpseudoNumber>(n: N, m: M): Tmin<N, M> => { return __Vmin(n,m,true as Tlesser<N,M>)}

"2024.01.16 test"
const Vaddv6: T6 = Vadd(V2, V4)
// const Vaddv7: T7 = Vadd(V2, V4) // Error.
const VminV2: T2 = Vmin(V5, V3)
// const __VminV2: T2 = __Vmin(V5, V3, true)
// const VminV1: T1 = Vmin(V5, V3) // Error.
// const VminV1: T1 = __Vmin(V5, V3, true) // Error.


"Inspection of increase/decrease of a number of elems."

type TWrapArray<T, N> = {
  type: N;
  data: T[];
}

type TExtract<T> = T extends Array<infer U> ? U : never

const WrapArray = <T, N>(data: T[], num: N): TWrapArray<T, N> => {
  return {
    type: num,
    data: data,
  }
}

const WrapRest = <T, N extends Array<any>>({type, data}: {type: N; data: T[];}): TWrapArray<T, Tdec<N>> => {
  const [a, ...retdata] = data;
  return {
    type: type[0],
    data: data,
  }
}

// todo
const WrapGet = <T, N extends Array<any>, S extends Array<any>, B extends Tgrater<N, S>>({type,data}: {type: N; data: T[];}, n:S, b:B): T => {
  return data[1]
}

// todo
const WrapConj = <T, N extends Array<any>>({type, data}: {type: N; data: T[];}, v: T): TWrapArray<T, N[]>=> {
  return {
    type: [type],
    data: [...data, v]
  }
}

const UnwrapArray = <T>({type, data}: {type: any; data: T[]}): T[] => {
  return data
}

const saferest = <T>(data: T[]): T[] => {
  return UnwrapArray(WrapRest(WrapArray(data, ConvertRtoT(data.length))))
}

// ---------------
// test
const tar    = [0, 1, 2, 3]
const tar2   = [4, 5, 6, 7]
const tarest = [1, 2, 3]

let wtar: TWrapArray<TExtract<typeof tar>, T4> = WrapArray(tar, V4) // this V4 can be real value 4 automaticaly.
wtar = WrapArray(tar2, V4) // It can be done.
// wtar = WrapArray([4, 5, 6], V3) // Error.

const wtarnum: T4 = wtar.type
const wtarest = WrapRest(wtar)
const wtarestnum: T3 = wtarest.type

const sssrest = saferest(tarest)
console.log(sssrest)
console.log(WrapGet(wtar, V2, true))

console.log(WrapConj(wtar, 19))
console.log(arrayeq(WrapConj(wtar, 19).type, V5))

//--------------------

console.log('well done')
