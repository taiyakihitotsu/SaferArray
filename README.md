# Brief
This makes an array typed even in a length part.

You cannot assign an length 4 array to an lenth 3 array-arg with this.
```
let __a = WrapArray([0,1,2,3], V4)
let __b: TWrapArray<number, T3> = __a // <= error.
```
```
> error TS2322: Type 'TWrapArray<number, T4>' is not assignable to type 'TWrapArray<number, T3>'.
```

And values returned with inWrap- functions keeps a length info.
```
let __c : TWrapArray<number, T3> = inWrapRest(__a)
let __d : TWrapArray<number, T2> = inWrapRest(__a) // <= Error.
let __e : TWrapArray<number, T5> = inWrapConj(__a, 4)
```
```
> error TS2322: Type 'TWrapArray<number, T3>' is not assignable to type 'TWrapArray<number, T2>'.
```

The way of translating normal arrays by js is using of WrapArray/UnwrapArray.
This works as identity fn.
```
UnwrapArray(WrapArray([0,1,2,3],V4))
```
