const baseTemplate = require('./base-template');

const colors = {
  magenta: "#fc618d",
  cyan: "#5ad4e6",
  purple: "#948ae3",
  green: "#7bd88f",
  yellow: "#fadc69"
}

const template = baseTemplate({
  name: "Monokai Neue",
  isDark: true,
  background: "#262626",
  tabActiveBackgroundColor: "#262626",
  tabInactiveBackgroundColor: "#191919",
  tabInactiveForegroundColor: "#777777",
  activityBarColor: "#333",
  statusBarColor: "#333",
  sideBarBackgroundColor: "#292929",
  sideBarBorderColor: "#515151",
  keywordsColor: colors.magenta,
  typesColor: colors.green,
  constantsColor: colors.purple,
  variablesColor: "#fff",
  functionsColor: colors.cyan,
  classesColor: colors.cyan,
  numbersColor: "#fff",
  stringsColor: colors.yellow,
  stringSymbolsColor: "#d8d8d8",
  stringRegexColor: "#d8d8d8",
  punctuationColor: "#fff",
  htmlTagColor: "#333",
  htmlTagNameColor: colors.cyan,
  htmlAttributeColor: colors.magenta,
  htmlEntitiesColor: colors.green,
  cssSelectorsColor: colors.green,
  cssPropertyNamesColor: colors.cyan,
  cssPropertyValuesColor: "#333",
  jsonUnquotedStrings: colors.cyan,
  jsonKeyColors: [
    colors.cyan, colors.magenta, colors.purple, colors.green, colors.yellow,
    colors.cyan, colors.magenta, colors.purple, colors.green, colors.yellow,
    colors.cyan, colors.magenta, colors.purple, colors.green, colors.yellow,
    colors.cyan, colors.magenta, colors.purple, colors.green, colors.yellow,
    colors.cyan],
  markupHeadingsColor: colors.magenta
});

module.exports = template;
