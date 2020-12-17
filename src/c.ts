import { A, Q } from './b'
import { print } from './x'

type Baz = A.IO<number>

const foo: number = Q.q

print(foo)
