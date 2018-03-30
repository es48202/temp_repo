function buildConfig(env) {
	if(typeof env	== 'undefined')
		env = 'dev';
  return require('./config/' + env + '.js')({ env: env });
}

module.exports = buildConfig;