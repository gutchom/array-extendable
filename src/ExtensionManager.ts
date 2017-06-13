class ExtensionManager implements Extendable {
  proto: any
  extensions: Extension[]
  constructor(proto: any) {
    this.proto = proto
  }
  get availables(): string[] {
    return this.extensions.map(extension => extension.name)
  }
  attach(...extensions: Extension[]): void {
    extensions.forEach(extension => {
      Object.defineProperty(this.proto, extension.name, extension())
    })
  }
  detach(...names: string[]): void {
    names.forEach(name => {
      delete this.proto[name]
    })
  }
}

export default ExtensionManager
