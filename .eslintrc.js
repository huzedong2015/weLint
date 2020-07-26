module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: ["airbnb-base", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module",
	},
	globals: {
		wx: true,
		App: true,
		Page: true,
	},
	rules: {
		"no-console": "off",
		"no-debugger": "off",

		// 空格缩进
		indent: ["error", "tab"],

		// 不使用tab
		"no-tabs": "off",

		// 双引号
		quotes: ["error", "double"],

		// import 排序
		"import/order": "off",

		// 强制使用 Windows 换行符
		"linebreak-style": "off",

		// for in 循环使用if
		"guard-for-in": "off",

		// 不使用new
		"no-new": "off",

		// 引入文件必须再packagejson声明
		"import/no-extraneous-dependencies": "off",

		// 自增 自减
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],

		// 箭头函数使用括号
		"arrow-parens": ["error", "always"],

		// 该规则可以强制或禁止使用命名函数表达式。
		"func-names": "off",
	},
};
