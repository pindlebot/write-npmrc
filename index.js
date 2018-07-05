const { getPackageConfig, setNpmrcToken } = require('./src')

module.exports = async () => {
  let { registry } = await getPackageConfig({})
  await setNpmrcToken(registry)
}
