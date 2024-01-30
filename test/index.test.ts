import {
    arrayeq
    ,Tzero,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10
    ,Vzero,V1,V2,V3,V4,V5,V6,V7,V8,V9,V10
    ,TpseudoNumber,TELesserUnion,TLesserUnion
    ,RtoV,VtoR
    ,Vadd,Vmin,Vmul
    ,TWrapArray
    ,WrapArray,UnwrapArray
    ,inWrapRest,inWrapConj,inWrapGet
    ,inWrapTake,inWrapDrop,inWrapConcat,inWrapFilter,inWrapRemove} from "../src/index"

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

test('Vmul', ()=>{
    const v30 = [[[[[[[[[[[[[[[[[[[[V10]]]]]]]]]]]]]]]]]]]]
    expect(Vmul(Vzero,Vzero)).toEqual(Vzero)
    expect(Vmul(V1,Vzero)).toEqual(Vzero)
    expect(Vmul(Vzero,V1)).toEqual(Vzero)
    expect(Vmul(v30,Vzero)).toEqual(Vzero)
    expect(Vmul(Vzero,v30)).toEqual(Vzero)
    expect(Vmul(V1,V1)).toEqual(V1)
    expect(Vmul(V1,v30)).toEqual(v30)
    expect(Vmul(v30,V1)).toEqual(v30)

    // expect(Vmul(V1,v30)).toEqual(V30)
    // expect(Vmul(v30,V1)).toEqual(V30)

    expect(Vmul(V2,V3)).toEqual(V6)
    expect(Vmul(V6,V5)).toEqual(v30)
    expect(Vmul(V5,V6)).toEqual(v30)
})

test('WrapArray/UnwrapArray', ()=>{
    expect(UnwrapArray(WrapArray([0,1,2,3],V4))).toEqual([0,1,2,3])
})

test('inWrapRest', ()=>{
    let a = WrapArray([1,2,3,4],V4)
    let r = inWrapRest(a)
    expect(r.type).toEqual(V3)
    expect(r.data).toEqual([2,3,4])
    expect(UnwrapArray(r)).toEqual([2,3,4])

    // todo
    // inWrapRest(WrapArray([], Vzero)) // well
    // inWrapRest(inWrapRest(WrapArray([], Vzero))) // error (type).
})

test('inWrapConj', ()=>{
    let a = WrapArray([1,2,3,4],V4)
    let r = inWrapConj(a,5)
    expect(r.type).toEqual(V5)
    expect(r.data).toEqual([1,2,3,4,5])
    expect(UnwrapArray(r)).toEqual([1,2,3,4,5])
})

test('inWrapGet', ()=>{
    let a = WrapArray([1,2,3,4],V4)
    let r = inWrapGet(a,Vzero)
    expect(r).toEqual(1)
})

test('inWrapConcat', ()=>{
    let a = WrapArray([1,2,3,4],V4)
    let b = WrapArray([5,6,7],V3)
    let r = inWrapConcat(a,b)
    expect(r.type).toEqual(V7)
    expect(r.data).toEqual([1,2,3,4,5,6,7])
})

test('inWrapTake', ()=>{
    let a = WrapArray([1,2,3,4],V4)
    let r = inWrapTake(V2,a)
    expect(r.type).toEqual(V2)
    expect(r.data).toEqual([1,2])
})

test('inWrapDrop', ()=>{
    let a = WrapArray([1,2,3,4],V4)
    let r = inWrapDrop(V2,a)
    expect(r.type).toEqual(V2)
    expect(r.data).toEqual([3,4])
})

test('inWrapFilter', ()=>{
    let a = WrapArray([1,2,3,4],V4)
    let r = inWrapFilter((x: number)=>x > 2, a)
    expect(r.type).toEqual(V2)
    expect(r.data).toEqual([3,4])
})

test('inWrapRemove', ()=>{
    let a = WrapArray([1,2,3,4],V4)
    let r = inWrapRemove((x: number)=>x > 2, a)
    expect(r.type).toEqual(V2)
    expect(r.data).toEqual([1,2])
})
