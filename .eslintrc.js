// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	globals: {
		_hmt: true
	},
	extends: 'airbnb-base',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// check if imports actually resolve
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	// add your custom rules here
	'rules': {
		// don"t require .vue extension when importing
		"import/extensions": ["error", "always", {
			"js": "never",
			"vue": "never"
		}],
		// allow optionalDependencies
		"import/no-extraneous-dependencies": ["error", {
			"optionalDependencies": ["test/unit/index.js"]
		}],
		// allow debugger during development
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"no-tabs": "off",
		"quotes": [
			"error",
			"single",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true
			}
		],
		"no-unused-vars": [
			"error",
			{
				"vars": "all",
				"args": "after-used"
			}
		],
		"brace-style": [
			"error",
			"stroustrup"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": 0,
		"prefer-const": 0,
		"prefer-template": 0,
		"no-param-reassign": 0,
		"comma-dangle": [
			1,
			"never"
		],
		"spaced-comment": [
			0,
			"always"
		],
		"func-names": 0,
		"no-underscore-dangle": 0,
		"import/prefer-default-export": 1,
		"class-methods-use-this": 0,
		"no-prototype-builtins": 0,
		"import/no-extraneous-dependencies": 0,
		"radix": 0,
		"eol-last": "off",
		"linebreak-style": "off",
		"max-len": ["error", 180],
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"no-shadow": [2, {
			"allow": ["state"]
		}]
	}
}
