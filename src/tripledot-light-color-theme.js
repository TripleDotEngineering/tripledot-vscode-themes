const colors = require('./colors');
const baseTemplate = require('./base-template');
const myColors = colors['tripledot'];

const template = baseTemplate({
  name: "Triple Dot Light",
  isDark: false,
  activityBarColor: myColors.magenta,
  statusBarColor: "#333",
  sideBarBackgroundColor: "#f8f8f8",
  commentsColor: "#999",
  keywordsColor: myColors.magenta,
  typesColor: myColors.green,
  constantsColor: myColors.magenta,
  variablesColor: "#000",
  functionsColor: myColors.cyan,
  classesColor: myColors.cyan,
  numbersColor: "#000",
  stringsColor: "#656565",
  stringSymbolsColor: "#656565",
  stringRegexColor: "#656565",
  punctuationColor: "#333",
  jsonKeyColors: [
    myColors.cyan, myColors.magenta, myColors.green,
    myColors.cyan, myColors.magenta, myColors.green, myColors.cyan
  ]
})

module.exports = template;
