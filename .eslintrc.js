module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
		"no-console": "off",
		"no-debugger": "off",
		"no-continue": ["off"],
		// reject必须返回error
		"prefer-promise-reject-errors": ["off"],
		"vue/multi-word-component-names": 0,
		"import/order": 0,
		"import/prefer-default-export": 0,
		indent: [
			"error",
			"tab"
		],
		"no-tabs": 0,
		"linebreak-style": [
			"error",
			"windows"
		],
		"no-unused-vars": [
			"error",
			// we are only using this rule to check for unused arguments since TS
			// catches unused variables but not args.
			{ varsIgnorePattern: ".*", args: "none" }
		],
		// 可以直接操作函数的参数
		"no-param-reassign": ["off", { props: false }],
		// 允许变量使用下划线
		"no-underscore-dangle": ["off"],
		// 优先使用解构处理数组
		"prefer-destructuring": ["off"],
		// 对象尾部不是用逗号
		"comma-dangle": ["error", "never"],
		// import导入校验
		"import/extensions": [
			"error",
			"always",
			{
				js: "never",
				vue: "never"
			}
		],
		// 强制使用单引号
		quotes: ["error", "double"],
		// 强制不使用分号结尾
		semi: ["error", "never"],
		"sort-imports": ["error", {
			ignoreCase: true, // 保持导入import的顺序
			ignoreDeclarationSort: true,
			ignoreMemberSort: true,
			memberSyntaxSortOrder: ["none", "all", "single", "multiple"]
		}]
	}
};
