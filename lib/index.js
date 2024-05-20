"use strict";
// ------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.inWrapRemove = exports.inWrapFilter = exports.inWrapConcat = exports.inWrapDrop = exports.inWrapTake = exports.inWrapGet = exports.inWrapConj = exports.inWrapRest = exports.UnwrapArray = exports.WrapArray = exports.Vmul = exports.Vmin = exports.Vadd = exports.VtoR = exports.RtoV = exports.V10 = exports.V9 = exports.V8 = exports.V7 = exports.V6 = exports.V5 = exports.V4 = exports.V3 = exports.V2 = exports.V1 = exports.Vzero = exports.arrayeq = void 0;
const Vzero = [null];
exports.Vzero = Vzero;
const V1 = [Vzero];
exports.V1 = V1;
const V2 = [V1];
exports.V2 = V2;
const V3 = [V2];
exports.V3 = V3;
const V4 = [V3];
exports.V4 = V4;
const V5 = [V4];
exports.V5 = V5;
const V6 = [V5];
exports.V6 = V6;
const V7 = [V6];
exports.V7 = V7;
const V8 = [V7];
exports.V8 = V8;
const V9 = [V8];
exports.V9 = V9;
const V10 = [V9];
exports.V10 = V10;
// over 1000
// const Tmulov1000_a: Tmul<Tmul<T10,T10>, T10> = '1'
const Tmulov1000_b = Vzero;
const Tmulov1000_c = V10;
const Vmin10 = (n) => n[0][0][0][0][0][0][0][0][0][0];
const Vadd10 = (n) => [[[[[[[[[[n]]]]]]]]]];
const V20 = Vadd10(V10);
const V30 = Vadd10(V20);
const V40 = Vadd10(V30);
const V50 = Vadd10(V40);
const V60 = Vadd10(V50);
const V70 = Vadd10(V60);
const V80 = Vadd10(V70);
const V90 = Vadd10(V80);
const V100 = Vadd10(V90);
const testTELesserT3V0 = Vzero;
const testTELesserT3V3 = V3;
// const testTELesserT3V4: TELesserUnion<T3> = V4 // Error.
const testTLesserT3V2 = V2; // Error.
// const testTLesserT3V3: TLesserUnion<T3> = V3 // Error.
// biome-ignore lint/suspicious/noExplicitAny:
const arraystr = (a) => {
    return JSON.stringify(a);
};
const arrayeq = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};
exports.arrayeq = arrayeq;
const RtoV = (n) => {
    // biome-ignore  lint/suspicious/noExplicitAny:
    let acc = Vzero;
    let i = n;
    while (0 < i) {
        acc = [acc];
        i = i - 1;
    }
    return acc;
};
exports.RtoV = RtoV;
const VtoR = (n) => {
    // biome-ignore lint/suspicious/noExplicitAny:
    let r = n;
    let i = 0;
    while (!arrayeq(Vzero, r)) {
        i = i + 1;
        r = r[0];
    }
    return i;
};
exports.VtoR = VtoR;
////
// test
const t4 = RtoV(4);
const aaaa = [[[[[[V10]]]]]];
const bbbb = V30;
// --------------------
// test
const Tadd_50a = V50;
// const Tadd_50b: Tadd<T20, T30> = V60 // error.
const Tmul6 = V6;
const Tmul0a = Vzero;
const Tmul0b = Vzero;
const Tmul0c = Vzero;
const Tmul0d = Vzero;
const Tmul0e = Vzero;
const Tmul1a = V1;
// stress test
// const TmulSa: Tmul<T10, Tmul<T10, T10> extends infer A ? A : never> = V1;
const aaaaa = V10;
const maybe0c = V1;
const maybe0d = V2;
const Tincv0 = V1;
const Tev0v1 = false;
const Tev0v0 = true;
const Tgev0v1 = false;
const Tgev1v0 = true;
const Tgev0v0 = false;
const Tlev0v1 = true;
const Tlev1v0 = false;
const Tlev0v0 = false;
("Virtual Number Operations");
const Vadd = (n, m) => {
    // biome-ignore lint/suspicious/noExplicitAny:
    let r = n;
    // biome-ignore lint/suspicious/noExplicitAny:
    let t = m;
    while (!arrayeq(t, Vzero)) {
        r = [r];
        t = t[0];
    }
    return r;
};
exports.Vadd = Vadd;
const Vmin = (n, m) => {
    // biome-ignore lint/suspicious/noExplicitAny:
    let r = n;
    // biome-ignore lint/suspicious/noExplicitAny:
    let t = m;
    while (!arrayeq(t, Vzero)) {
        r = r[0];
        t = t[0];
    }
    return r;
};
exports.Vmin = Vmin;
const Vmul = (n, m) => {
    if (n === Vzero || m === V1)
        return n;
    if (m === Vzero || n === V1)
        return m;
    // biome-ignore lint/suspicious/noExplicitAny:
    let r = n;
    // biome-ignore lint/suspicious/noExplicitAny:
    let tm = m;
    while (tm !== V1) {
        r = Vadd(r, n);
        tm = tm[0];
    }
    return r;
};
exports.Vmul = Vmul;
const Vaddv6 = Vadd(V2, V4);
// const Vaddv7: T7 = Vadd(V2, V4) // Error.
const Vaddv6_2 = Vadd(V6, Vzero);
const VminV2_1 = Vmin(V5, V3);
const VminV0_1 = Vmin(V5, V5);
const VminV0_2 = Vmin(Vzero, Vzero);
// const VminV2_2: T2 = Vmintest(V5,V2) // Error.
// const VminV2_3: any = Vmintest(V4,V6) // Error.
const VmulV1_1 = Vmul(V1, V1);
const VmulV0_1 = Vmul(V1, Vzero);
const VmulV0_2 = Vmul(Vzero, V1);
const VmulV6_1 = Vmul(V2, V3);
const VmulV6_2 = Vmul(V3, V2);
const VmulV30_1 = Vmul(V5, V6);
// const VmulV50_1 = Vmul(V30, Vmul(V30,V30))
// const Vmult1: Tmul<typeof V30, typeof V30> = Vmul(V30,V30)
// const Vmult2: Tmul<Tmul<Tmul<Tmul<Tmul<T10,T10>,T10>,T2>,T1>,T1> = V30 // error,
// const Vmult3: Tadd<T1,Tmul<Tmul<Tmul<T10,T10>,T10>,T1>> = V30 // error
// const Vmult4: Tadd<Tmul<Tmul<Tmul<T10,T10>,T10>,T1>, T1> = V30
("Inspection of increase/decrease of a number of elems.");
const WrapArray = (data, num) => {
    return {
        type: num,
        data: data,
    };
};
exports.WrapArray = WrapArray;
const UnwrapArray = ({ type, data }) => {
    return data;
};
exports.UnwrapArray = UnwrapArray;
const inWrapRest = ({ type, data, }) => {
    const [a, ...retdata] = data;
    return {
        type: type[0],
        data: retdata,
    };
};
exports.inWrapRest = inWrapRest;
const inWrapGet = ({ type, data }, n) => {
    return data[VtoR(n)];
};
exports.inWrapGet = inWrapGet;
const inWrapConj = ({ type, data }, v) => {
    return {
        type: [type],
        data: [...data, v],
    };
};
exports.inWrapConj = inWrapConj;
const inWrapTake = (n, { type, data }) => {
    return {
        type: n,
        data: data.slice(0, VtoR(n)),
    };
};
exports.inWrapTake = inWrapTake;
const inWrapDrop = (n, { type, data }) => {
    return {
        type: Vmin(type, n),
        data: data.slice(VtoR(n), VtoR(type)),
    };
};
exports.inWrapDrop = inWrapDrop;
const inWrapConcat = (a, b) => {
    return {
        type: Vadd(a.type, b.type),
        data: a.data.concat(b.data),
    };
};
exports.inWrapConcat = inWrapConcat;
const inWrapFilter = (f, { type, data }) => {
    const r = data.filter(f);
    return {
        type: RtoV(r.length),
        data: r,
    };
};
exports.inWrapFilter = inWrapFilter;
// todo
const inWrapRemove = (f, { type, data }) => {
    const r = data.filter((x) => !f(x));
    return {
        type: RtoV(r.length),
        data: r,
    };
};
exports.inWrapRemove = inWrapRemove;
// ---------------
// test
const tar = [0, 1, 2, 3];
const tar2 = [4, 5, 6, 7];
const tarest = [1, 2, 3];
let wtar = WrapArray(tar, V4);
const wtar2 = WrapArray(tarest, V3);
wtar = WrapArray(tar2, V4); // It can be done.
// wtar = WrapArray([4, 5, 6], V3) // Error.
const __a = WrapArray([0, 1, 2, 3], V4);
// let __b : TWrapArray<number, T3> = __a
const wtarnum = wtar.type;
const wtarest = inWrapRest(wtar);
const wtarestnum = wtarest.type;
const __c = inWrapRest(__a);
// let __d : TWrapArray<number, T2> = inWrapRest(__a) // <= Error.
// console.log(inWrapConj(wtar, 19));
// console.log(arrayeq(inWrapConj(wtar, 19).type, V5));
const __e = inWrapConj(__a, 4);
const __f = WrapArray([0, 1, 2, 3], V4);
let __g = inWrapRest(__f);
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
const wrapconcat = inWrapConcat(wtar, wtar2);
// const wrapconcat2: TWrapArray<number, T6> = WrapConcat(wtar, wtar2) // Error.
// console.log(VtoR(wrapconcat.type));
// console.log(wrapconcat);
const wrapfilter = inWrapFilter((x) => 3 > x, wrapconcat);
const wrapfilter2 = inWrapFilter((x) => 3 > x, wrapconcat); // NOTE.
// const wrapfilter3: TWrapArray<number, T10> = WrapFilter((x:number)=> 3 > x, wrapconcat) // Error.
// console.log(arraystr(RtoV(2)))
// console.log(VtoR(wrapfilter.type));
// console.log(wrapfilter);
let __h = inWrapFilter((x) => 2 > x, __a);
__h = WrapArray([4, 5, 6, 7], V4);
