const colors = require('./colors');
const baseTemplate = require('./base-template');
const myColors = colors['tripledot'];

const template = baseTemplate({
  name: "Triple Dot Dark",
  isDark: true,
  background: "#262626",
  foreground: "#fff",
  primaryColor: myColors.cyanBright,
  tabActiveBackgroundColor: "#262626",
  tabInactiveBackgroundColor: "#191919",
  tabInactiveForegroundColor: "#777777",
  activityBarColor: "#333",
  statusBarColor: "#333",
  sideBarBackgroundColor: "#292929",
  sideBarBorderColor: "#515151",
  keywordsColor: myColors.magentaBright,
  typesColor: myColors.greenBright,
  constantsColor: myColors.magentaBright,
  variablesColor: "#fff",
  functionsColor: myColors.cyanBright,
  classesColor: myColors.cyanBright,
  numbersColor: myColors.purple,
  stringsColor: myColors.lightYellow,
  stringSymbolsColor: "#d8d8d8",
  stringRegexColor: "#d8d8d8",
  punctuationColor: "#fff",
  htmlTagColor: myColors.magenta,
  htmlTagNameColor: myColors.cyan,
  htmlAttributeColor: myColors.magenta,
  htmlEntitiesColor: myColors.green,
  cssSelectorsColor: myColors.greenBright,
  cssPropertyNamesColor: myColors.cyan,
  cssPropertyValuesColor: myColors.cyan,
  jsonUnquotedStrings: myColors.cyanBright,
  jsonKeyColors: [
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright, myColors.magentaBright, myColors.greenBright,
    myColors.cyanBright],
  markupHeadingsColor: myColors.magentaBright
})


module.exports = template;
