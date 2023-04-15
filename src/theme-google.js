const baseTemplate = require('./base-template');
const colors = require('./colors');
const myColors = colors['google'];


const template = baseTemplate({
  name: "Google-Inspired Style",
  isDark: false,
  foregroundColor: "#333",
  backgroundColor: "#ffffff",
  activityBarColor: myColors.gray,
  statusBarColor: myColors.blue,
  titleBarBackgroundColor: myColors.red,
  sideBarBackgroundColor: "#f8f8f8",
  terminalBackgroundColor: "#343434",
  sideBarBorderColor: "#ccc",
  commentsColor: "#888",
  keywordsColor: myColors.red,
  typesColor: myColors.green,
  constantsColor: myColors.red,
  variablesColor: "#fff",
  functionsColor: myColors.blue,
  classesColor: myColors.blue,
  numbersColor: "#fff",
  stringsColor: myColors.yellow,
  stringSymbolsColor: "#d8d8d8",
  stringRegexColor: "#d8d8d8",
  punctuationColor: "#000",
  jsonUnquotedStrings: myColors.blue,
  jsonKeyColors: [
    myColors.blue, myColors.red, myColors.green,
    myColors.blue, myColors.red, myColors.green,
    myColors.blue, myColors.red, myColors.green,
    myColors.blue, myColors.red, myColors.green,
    myColors.blue],
  markupHeadingsColor: myColors.red
})


module.exports = template;
