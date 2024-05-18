# Brief
This makes an array typed even in a length part.

# Summary
we cannot assign an length 4 array to an lenth 3 array-arg with this.
```typescript
let __a = WrapArray([0,1,2,3], V4)
let __b: TWrapArray<number, T3> = __a // <= error.
```
```typescript
> error TS2322: Type 'TWrapArray<number, T4>' is not assignable to type 'TWrapArray<number, T3>'.
```

And values returned with inWrap- functions keeps a length info.
```typescript
let __c : TWrapArray<number, T3> = inWrapRest(__a)
let __d : TWrapArray<number, T2> = inWrapRest(__a) // <= error.
let __e : TWrapArray<number, T5> = inWrapConj(__a, 4)
let __f = WrapArray([0,1,2,3], V4)
let __g : TWrapArray<number, TLesserUnion<T4>> = inWrapRest(__f)
__g = inWrapRest(__g)
```
```typescript
> error TS2322: Type 'TWrapArray<number, T3>' is not assignable to type 'TWrapArray<number, T2>'.
```

The way of translating normal arrays by js is using of WrapArray/UnwrapArray.  
This works as identity fn.
```typescript
UnwrapArray(WrapArray([0,1,2,3],V4))
```

As above, TELesserUnion/TLesserUnion is used in the case we don't know the specific length but it should be the same or less than some number.
```typescript
let __h: TWrapArray<number, TELesserUnion<T4>> = inWrapFilter((x:number)=> 2 > x , __a)
__h = WrapArray([4,5,6,7], V4)
__h = WrapArray([4,5,6,7,8], V5) // <= error.

```
```typescript
> error TS2322: Type 'TWrapArray<number, T5>' is not assignable to type 'TWrapArray<number, Tzero | T1 | T2 | T3 | T4>'
```

# Functions
## Numbers
- Tzero, T1 ~ T10
- Vzero, V1 ~ V10  
They are predefined peano-numbers.  
The 1st are used in type level, passed into TWrapArray or type level culculate or something.  
The 2nd are values, passed into WrapArray's 2nd arg or so.

## Util
- RtoV, VtoR  
They convert a real number to a peano and vice versa, useful for debug.

- Tadd, Tmin, Vmul
- Vadd, Vmin, Vmul  
All are two arg functions, culculating as +, -, *.  
Vmin's 2nd arg should be equal to or less than 1st, or it spits a type error.  

- TLesserUnion  
- TELesserUnion  
They get a type-level number, then return an union type, elements of which are equal to (with 2nd) or less than the number passed.

# Functions 
Those order of args and name are decided in reference to clojure fns.  
  
(Array and Number written below are wrapped-array and peano-number implicitly.)  

- inWrapGet: Array<T> -> Number -> T  
Type error if 2nd is grater than a length of 1st.

- inWrapRest: Array<T> -> Array<T>  
This removes a head and dec a length.

- inWrapConj: Array<T> -> T -> Array<T>  
This pushes a value into a tail and inc a length.

- inWrapTake, inWrapDrop: Number -> Array<T> -> Array<T>  
It splits an array to two part at an index, 1st arg, then inWrapTake returns the left-part and inWrapDrop right-part.  
In js, it can be translated to slice(0,n) and slice(n,length).  
  
They spits out a type error if an passed index is grater than a  length of 2nd (the same as inWrapGet).  

- inWrapConcat: Array<T> -> Array<T> -> Array<T>  
- inWrapFilter, inWrapRemove: (T -> boolean) -> Array<T> -> Array<T>  

# Author
https://github.com/taiyakihitotsu

# License
3-clause BSD license





