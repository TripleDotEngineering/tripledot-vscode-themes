const baseTemplate = require('./base-template');

const colors = {
  black: "#000",
  white: "#fff",
  neutralBg: "#262626",
  neutralBgDark: "#191919",
  neutralFgDark: "#777777",
  magenta: "#fc618d",
  cyan: "#5ad4e6",
  purple: "#948ae3",
  green: "#7bd88f",
  yellow: "#fadc69"
}

const template = baseTemplate({
  name: "Monokai Neue",
  isDark: true,
  background: colors.neutralBg,
  tabActiveBackgroundColor: colors.neutralBg,
  tabInactiveBackgroundColor: colors.neutralBgDark,
  tabInactiveForegroundColor: colors.neutralFgDark,
  activityBarColor: "#333",
  statusBarColor: "#333",
  sideBarBackgroundColor: "#292929",
  sideBarBorderColor: "#515151",
  keywordsColor: colors.magenta,
  typesColor: colors.green,
  constantsColor: colors.purple,
  variablesColor: colors.white,
  functionsColor: colors.cyan,
  classesColor: colors.cyan,
  numbersColor: colors.white,
  stringsColor: colors.yellow,
  stringSymbolsColor: "#d8d8d8",
  stringRegexColor: "#d8d8d8",
  punctuationColor: "#fff",
  htmlTagColor: colors.magenta,
  htmlTagNameColor: colors.cyan,
  htmlAttributeColor: colors.magenta,
  htmlEntitiesColor: colors.green,
  cssSelectorsColor: colors.green,
  cssPropertyNamesColor: colors.cyan,
  cssPropertyValuesColor: colors.cyan,
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
