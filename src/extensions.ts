const config = {
  configurable: true,
}

export function head(): Descriptor {
  return Object.assign({}, config, {
    get: function() {return this[0]},
    set: function(val: any) {this[0] = val},
  })
}

export function last(): Descriptor {
  return Object.assign({}, config, {
    get: function() {return this[this.length - 1]},
    set: function(val: any) {this[this.length - 1] = val},
  })
}

export function nth(): Descriptor {
  return Object.assign({}, config, {
    value: function nth(n: number) {return n < 0 ? this[this.length + n] : this[n]},
  })
}

export function unique(): Descriptor {
  return Object.assign({}, config, {
    value: function dedupe<T>(predicate?: (current: T, first: T) => boolean): T[] {
      return this.filter((current: T, index: number, self: T[]) => {
        return index <= self.findIndex(first => {
          return predicate ? predicate(current, first) === true : current === first
        })
      })
    },
  })
}

export function duplicates(): Descriptor {
  return Object.assign({}, config, {
    value: function duplicate<T>(predicate?: (a: T, b: T) => boolean): T[] {
      return this.filter((a: T) => this.filter((b: T) => predicate ? predicate(a, b) === true : a === b).length >= 2, this)
    },
  })
}
