interface NxWebToolkitOptions {
  prefix?: string;
}
interface NxStatic {
  WebToolkits: {
    create: (options: any) => any;
  }
}
