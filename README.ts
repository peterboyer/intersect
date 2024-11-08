/*!
# intersect

## Installation

```shell
npm install pb.intersect
```

## Requirements

- `typescript@>=5.0.0`
- `tsconfig.json > "compilerOptions" > { "strict": true }`
!*/

/*!
# API

- [`Intersect`](#intersectt)
!*/

/*!
### `Intersect<T>`
!*/

//>
import type { Intersect } from "pb.intersect";

type Example = { A: true } | { B: true } | { C: true };
type Result = Intersect<Example>;
//   ^ { A: true } & { B: true } & { C: true }
//   ^ { A: true; B: true; C: true }
void {} as unknown as Result; //-
//<
