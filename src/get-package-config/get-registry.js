const getRegistryUrl = require('registry-auth-token/registry-url')

function getRegistry (packageJson) {
  return packageJson.publishConfig && packageJson.publishConfig.registry
    ? packageJson.publishConfig.registry : getRegistryUrl(packageJson.name.split('/')[0])
}

module.exports = getRegistry
