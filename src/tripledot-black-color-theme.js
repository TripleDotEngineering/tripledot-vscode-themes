const colors = require('./colors');
const baseTemplate = require('./base-template');
const myColors = colors['tripledot'];

const template = baseTemplate({
  name: "Triple Dot Dark",
  isDark: true,
  background: "#262626",
  activityBarColor: "#000",
  statusBarColor: "#000",
  titleBarBackgroundColor: "#000",
  sideBarBackgroundColor: "#191919",
  terminalBackgroundColor: "#191919",
  sideBarBorderColor: "#515151",
  keywordsColor: myColors.magentaBright,
  typesColor: myColors.greenBright,
  constantsColor: myColors.magentaBright,
  variablesColor: "#fff",
  functionsColor: myColors.cyanBright,
  classesColor: myColors.cyanBright,
  numbersColor: "#fff",
  stringsColor: "#d8d8d8",
  stringSymbolsColor: "#d8d8d8",
  stringRegexColor: "#d8d8d8",
  punctuationColor: "#fff",
  jsonUnquotedStrings: myColors.cyanBright,
  jsonKeyColors: [
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright]
})

template.tokenColors.push({
  "name": "Python Function Calls",
  "scope": "source.python meta.function-call.python meta.function-call.generic.python",
  "settings": {
    "foreground": myColors.cyanBright
  }
})

module.exports = template;
