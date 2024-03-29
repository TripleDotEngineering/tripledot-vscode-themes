const colors = require('./colors');
const baseTemplate = require('./base-template');
const myColors = colors['tripledot-nix'];

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
  functionsColor: myColors.blue,
  classesColor: myColors.blue,
  numbersColor: "#000",
  stringsColor: "#656565",
  stringSymbolsColor: "#656565",
  stringRegexColor: "#656565",
  punctuationColor: "#333",
  htmlTagColor: "#333",
  htmlTagNameColor: myColors.blue,
  htmlAttributeColor: myColors.magenta,
  htmlEntitiesColor: myColors.green,
  cssSelectorsColor: myColors.magenta,
  cssPropertyNamesColor: myColors.blue,
  cssPropertyValuesColor: "#333",
  jsonKeyColors: [
    myColors.blue, myColors.magenta, myColors.green,
    myColors.blue, myColors.magenta, myColors.green, myColors.blue
  ]
})

module.exports = template;
