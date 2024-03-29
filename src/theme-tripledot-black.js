const colors = require('./colors');
const baseTemplate = require('./base-template');
const myColors = colors['tripledot-nix'];

const template = baseTemplate({
  name: "Triple Dot Black",
  isDark: true,
  backgroundColor: "#212121",
  foregroundColor: "#fff",
  activityBarColor: "#161616",
  statusBarColor: "#060606",
  titleBarBackgroundColor: "#000",
  sideBarBackgroundColor: "#191919",
  terminalBackgroundColor: "#161616",
  sideBarBorderColor: "#515151",
  commentsColor: "#888",
  keywordsColor: myColors.magenta,
  typesColor: myColors.green,
  constantsColor: myColors.magenta,
  variablesColor: "#fff",
  functionsColor: myColors.blue,
  classesColor: myColors.blue,
  numbersColor: myColors.purple,
  stringsColor: myColors.yellowLight,
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
  jsonUnquotedStrings: myColors.blue,
  jsonKeyColors: [
    myColors.blue, myColors.magenta, myColors.green,
    myColors.blue, myColors.magenta, myColors.green,
    myColors.blue, myColors.magenta, myColors.green,
    myColors.blue, myColors.magenta, myColors.green,
    myColors.blue],
  markupHeadingsColor: myColors.magenta
})


module.exports = template;
