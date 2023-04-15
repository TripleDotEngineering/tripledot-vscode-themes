const baseTemplate = require('./base-template');
const colors = require('./colors');
const msColors = colors['microsoft'];

const template = baseTemplate({
  name: "Microsoft-Inspired Style (Dark)",
  isDark: true,
  backgroundColor: "#393939",
  tabActiveBackgroundColor: "#393939",
  tabInactiveBackgroundColor: "#333",
  tabInactiveForegroundColor: "#777",
  titleBarBackgroundColor: "#333",
  activityBarColor: msColors.Blue,
  statusBarColor: msColors.OrangeRed,
  sideBarBackgroundColor: "#333",
  sideBarBorderColor: "#515151",
  keywordsColor: msColors.Blue,
  typesColor: msColors.Green,
  constantsColor: msColors.LavenderPurple,
  variablesColor: "#fff",
  functionsColor: msColors.OrangeRed,
  commentsColor: msColors.Gray,
  classesColor: msColors.Blue,
  numbersColor: "#fff",
  stringsColor:  msColors.Yellow,
  stringSymbolsColor: msColors.LavenderPurple,
  stringRegexColor: msColors.LavenderPurple,
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
