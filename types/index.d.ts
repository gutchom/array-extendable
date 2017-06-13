interface Array<T> {
  head: T
  last: T
  nth(n: number): T
  unique(predicate?: (current: T, first: T) => boolean): T[]
  duplicates(predicate?: (a: T, b: T) => boolean): T[]
}

interface Extendable {
  readonly availables: string[]
  attach(...extensions: Extension[]): void
  detach(...names: string[]): void
}
