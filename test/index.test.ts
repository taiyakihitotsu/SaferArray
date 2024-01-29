import {
    arrayeq
    ,Tzero,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10
    ,Vzero,V1,V2,V3,V4,V5,V6,V7,V8,V9,V10
    ,TpseudoNumber,TELesserUnion,TLesserUnion
    ,RtoV,VtoR
    ,Vadd,Vmin
    ,TWrapArray
    ,WrapArray,UnwrapArray
    ,inWrapRest,inWrapConj,inWrapGet
    ,inWrapTake,inWrapDrop,inWrapConcat,inWrapFilter} from "../src/index"

test('RtoV', ()=>{
    expect(RtoV(0)).toEqual(Vzero)
    expect(RtoV(1)).toEqual(V1)
})

test('VtoR', ()=>{
    expect(VtoR(Vzero)).toBe(0)
    expect(VtoR(V1)).toBe(1)
})

test('Vadd', ()=>{
    let v30 = [[[[[[[[[[[[[[[[[[[[V10]]]]]]]]]]]]]]]]]]]]
    expect(Vadd(Vzero,Vzero)).toEqual(Vzero)
    expect(Vadd(V1,Vzero)).toEqual(V1)
    expect(Vadd(Vzero,V1)).toEqual(V1)
    expect(Vadd(Vadd(V10,V10),V10)).toEqual(v30)
})

test('Vmin', ()=>{
    let v30 = [[[[[[[[[[[[[[[[[[[[V10]]]]]]]]]]]]]]]]]]]]
    expect(Vmin(Vzero,Vzero)).toEqual(Vzero)
    expect(Vmin(V1,Vzero)).toEqual(V1)
    // Vmin(Vzero, V1) // type error.
    expect(Vmin(Vmin(v30,V10),V10)).toEqual(V10)
})
