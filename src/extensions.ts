export const last: AccessorDescriptor & Named = {
  name: 'last',
  get: function() {return this[this.length - 1]},
  set: function(val: any) {this[this.length - 1] = val},
}

export const nth: GetterDescriptor & Named = {
  name: 'nth',
  get: function(): any[] {
    return new Proxy(this, {
      get: function(array, index: string) {
        return array[index[0] === '-' ? array.length + parseInt(index, 10) : index]
      },
      set: function(array, index: string, value) {
        array[index[0] === '-' ? array.length + parseInt(index, 10) : index] = value
        return true
      },
    })
  }
}

export function uniques<T>(distinguish?: (former: T, latter: T) => boolean): T[] {
  return this.filter((former: T, index: number, self: T[]) => {
    return self.filter(latter => {
      return distinguish ? distinguish(former, latter) === false : former === latter
    }).length === 1
  })
}

export function dupes<T>(distinguish?: (former: T, latest: T) => boolean): T[] {
  return this.filter((former: T, index: number, self: T[]) => {
    return self.filter(latest => {
      return distinguish ? distinguish(former, latest) === false : former === latest
    }).length > 1
  })
}

export function dedupe<T>(distinguish?: (former: T, latest: T) => boolean): T[] {
  return this.filter((latest: T, index: number, self: T[]) => {
    return index <= self.findIndex(former => {
      return distinguish ? distinguish(former, latest) === false : former === latest
    })
  })
}
