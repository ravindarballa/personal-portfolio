import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',

  remotes: ['aboutme', 'profile', 'contactme', 'projects', 'gallery'],
};

export default config;
