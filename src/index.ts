function activate(...extensions: Extension[]): void {
  extensions.forEach(extension => {
    const descriptor: Descriptor = typeof extension === 'function'
        ? {configurable: true, enumerable: false, value: extension, writable: false}
        : Object.assign({configurable: true, enumerable: false}, extension)
    Object.defineProperty(Array.prototype, extension.name, descriptor)
  })
}

export default activate
export * from './extensions'
