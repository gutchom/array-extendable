declare class ExtensionManager {
  constructor(proto: any)
  readonly availables: string[]
  attach(...extensions: Extension[]): void
  detach(...names: string[]): void
}
