import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'aboutme',

  exposes: {
    './Module': './src/remote-entry.ts',
  },

  shared: (libraryName, sharedConfig) => {
    return {
      ...sharedConfig,
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
    };
  },
};

/**
 * Nx requires a default export.
 */
export default config;
