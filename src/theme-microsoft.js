const baseTemplate = require('./base-template');
const colors = require('./colors');
const msColors = colors['microsoft'];



const template = baseTemplate({
  name: "Microsoft-Inspired Style",
  isDark: false,
  tabActiveBackgroundColor: "#ffffff",
  tabInactiveBackgroundColor: "#f2f2f2",
  tabInactiveForegroundColor: "#777777",
  titleBarBackgroundColor: "#e4e4e4",
  activityBarColor: msColors.Blue,
  statusBarColor: msColors.OrangeRed,
  sideBarBackgroundColor: "#f8f8f8",
  sideBarBorderColor: "#e4e4e4",
  keywordsColor: msColors.Blue,
  typesColor: msColors.Green,
  constantsColor: msColors.Purple,
  variablesColor: "#fff",
  functionsColor: msColors.OrangeRed,
  classesColor: msColors.Blue,
  numbersColor: "#fff",
  stringsColor:  msColors.Gray,
  stringSymbolsColor: msColors.Purple,
  stringRegexColor: msColors.Purple,
  punctuationColor: "#fff",
  htmlTagColor: "#333",
  htmlTagNameColor: msColors.Blue,
  htmlAttributeColor: msColors.OrangeRed,
  htmlEntitiesColor: msColors.Green,
  cssSelectorsColor: msColors.Blue,
  cssPropertyNamesColor: msColors.Green,
  cssPropertyValuesColor: msColors.Blue,
  jsonUnquotedStrings: msColors.Blue,
  jsonKeyColors: [
    msColors.Blue, msColors.LavenderPurple, msColors.Green,
    msColors.Yellow, msColors.OrangeRed,
    msColors.AmethystPurple,
    msColors.Blue, msColors.LavenderPurple, msColors.Green,
    msColors.Yellow, msColors.OrangeRed,
    msColors.AmethystPurple,
    msColors.Blue
  ],
  markupHeadingsColor: colors.magenta
});

module.exports = template;
