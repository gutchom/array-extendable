interface Descriptor {
  configurable?: boolean
  enumerable?: boolean
  value?: any
  writable?: boolean
  get?: () => any
  set?: (val: any) => void
}

type Extension = () => Descriptor

declare function head(): Descriptor
declare function last(): Descriptor
declare function nth(): Descriptor
declare function unique(): Descriptor
declare function duplicates(): Descriptor
