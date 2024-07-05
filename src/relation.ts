


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




type Validate<A extends Relation, B extends Relation, env = Peano[], _AOP = A["op"], _BOP = B["op"]> = _BOP extends "+" ? "+" : 0


const testsa : Validate<R1, OP1> = "+"
