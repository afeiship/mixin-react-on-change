interface NxWebToolkitOptions {
  prefix?: string;
}

interface NxStatic {
  WebToolkits: {
    create: (options: any) => any;
  };
  $global: any;
  $local: import('@jswork/next-local-storage');
  $session: import('@jswork/next-session-storage');
  $event: import('@jswork/event-mitt').EventMitt;
}
