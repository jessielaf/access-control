import { sveltePackage } from '../../defaults.js'

export default {
  name: '@custom/access-control',
  version: '0.0.1',
  ...sveltePackage.settings,
  private: false,
  scripts: {
    ...sveltePackage.scripts,
    dev: 'vite dev --port 5174',
  },
  dependencies: {
    ...sveltePackage.dependencies,
  },
  devDependencies: {
    ...sveltePackage.devDependencies,
  },
}
