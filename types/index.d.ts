interface Named {
  name: string
}

interface DescriptorBase {
  configurable: boolean
  enumerable: boolean
}

interface DataDescriptor {
  value: any
  writable: boolean
}

interface GetterDescriptor {
  get: () => any
}

interface SetterDescriptor {
  set: (val: any) => void
}

type AccessorDescriptor = GetterDescriptor & SetterDescriptor

type VariousDescriptor = DataDescriptor | GetterDescriptor | SetterDescriptor | AccessorDescriptor

type Descriptor = DescriptorBase & VariousDescriptor

type Extension = Function | VariousDescriptor & Named

declare module 'array-extendable' {
  export function activate(...extensions: Extension[]): void

  export const last: AccessorDescriptor
  export const nth: GetterDescriptor
  export function uniques<T>(distinguish?: (former: T, latter: T) => boolean): T[]
  export function dupes<T>(distinguish?: (former: T, latest: T) => boolean): T[]
  export function dedupe<T>(distinguish?: (former: T, latest: T) => boolean): T[]
}

interface Array<T> {
  last: T
  nth: {[n: number]: T}
  uniques<T>(distinguish?: (former: T, latter: T) => boolean): T[]
  dupes<T>(distinguish?: (former: T, latest: T) => boolean): T[]
  dedupe<T>(distinguish?: (former: T, latest: T) => boolean): T[]
}
