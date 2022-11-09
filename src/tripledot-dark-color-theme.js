const colors = require('./colors');
const baseTemplate = require('./base-template');
const myColors = colors['tripledot'];

const template = baseTemplate({
  name: "Triple Dot Dark",
  isDark: true,
  background: "#262626",
  tabActiveBackgroundColor: "#262626",
  tabInactiveBackgroundColor: "#191919",
  tabInactiveForegroundColor: "#777777",
  activityBarColor: myColors.magenta,
  statusBarColor: "#333",
  sideBarBackgroundColor: "#292929",
  sideBarBorderColor: "#515151",
  keywordsColor: myColors.magentaBright,
  typesColor: myColors.greenBright,
  constantsColor: myColors.magentaBright,
  variablesColor: "#fff",
  functionsColor: myColors.cyanBright,
  classesColor: myColors.cyanBright,
  numbersColor: "#fff",
  stringsColor: myColors.lightYellow,
  stringSymbolsColor: "#d8d8d8",
  stringRegexColor: "#d8d8d8",
  punctuationColor: "#fff",
  jsonUnquotedStrings: myColors.cyanBright,
  jsonKeyColors: [
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright],
  markupHeadingsColor: myColors.magentaBright
})

template.tokenColors.push({
  "name": "Python Function Calls",
  "scope": "source.python meta.function-call.python meta.function-call.generic.python",
  "settings": {
    "foreground": myColors.cyanBright
  }
})

module.exports = template;
