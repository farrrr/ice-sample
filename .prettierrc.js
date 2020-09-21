// .prettierrc.js
module.exports = {
  // 一行最多 120 字符
  printWidth: 120,
  // 使用 2 個空格縮進
  tabWidth: 2,
  // 不使用縮進符，而使用空格
  useTabs: false,
  // 行尾需要有分號
  semi: true,
  // 使用單引號
  singleQuote: true,
  // 對象的 key 僅在必要時用引號
  quoteProps: 'as-needed',
  // jsx 不使用單引號，而使用雙引號
  jsxSingleQuote: false,
  // 末尾需要有逗號
  trailingComma: 'all',
  // 大括號內的首尾需要空格
  bracketSpacing: true,
  // jsx 標簽的反尖括號需要換行
  jsxBracketSameLine: false,
  // 箭頭函數，隻有一個參數的時候，也需要括號
  arrowParens: 'always',
  // 每個文件格式化的範圍是文件的全部內容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要寫文件開頭的 @prettier
  requirePragma: false,
  // 不需要自動在文件開頭插入 @prettier
  insertPragma: false,
  // 使用預設的摺行標準
  proseWrap: 'preserve',
  // 根據顯示樣式決定 html 要不要摺行
  htmlWhitespaceSensitivity: 'css',
  // vue 文件中的 script 和 style 內不用縮進
  vueIndentScriptAndStyle: false,
  // 換行符使用 lf
  endOfLine: 'lf',
  // 格式化嵌入的內容
  embeddedLanguageFormatting: 'auto',
};
