// Ts Type Challenges

// Pick
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

// Readonly
type MyReadonly<T> = {
  +readonly [key in keyof T]: T[key]
}

// Tuple to Object
type TupleToObject<T extends readonly PropertyKey[]> = {
  [key in T[number]]: key
}

// First of Array
type First<T extends any[] > = T extends {length: 0} ? never : T[0]

// Lenght of Tuple
type Length<T extends readonly any[]> = T extends {length: infer Length} ? Length : never;

// Exclude
type MyExclude<T, U> = T extends U ? never : T

// Awaited 
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? ( U extends Promise<any> ? MyAwaited<U> : U ) : never 