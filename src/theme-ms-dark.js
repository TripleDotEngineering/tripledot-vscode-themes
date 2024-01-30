const baseTemplate = require('./base-template');

const msColors = {
  "OrangeRed": "#F25022",
  "Green": "#7FBA00",
  "Blue": "#00A4EF",
  "Yellow": "#FFB900",
  "Gray": "#737373",
  "Purple": "#9332BF",
  "LightGray": "#C3C3C3",
  "AmethystPurple": "#AE4BD5",
  "LavenderPurple": "#CA64EA"
};

const template = baseTemplate({
  name: "MS (Dark)",
  isDark: true,
  primary: msColors.Blue,
  /*backgroundColor: "#393939",
  tabActiveBackgroundColor: "#393939",
  tabInactiveBackgroundColor: "#333",
  tabInactiveForegroundColor: "#777",
  titleBarBackgroundColor: "#333",*/
  activityBarColor: msColors.Blue,
  statusBarColor: msColors.OrangeRed,
  /*sideBarBackgroundColor: "#333",
  sideBarBorderColor: "#515151",*/
  keywordsColor: msColors.Blue,
  typesColor: msColors.Green,
  constantsColor: msColors.LavenderPurple,
  // variablesColor: "#fff",
  functionsColor: msColors.OrangeRed,
  commentsColor: msColors.Gray,
  classesColor: msColors.Blue,
  // numbersColor: "#fff",
  stringsColor:  msColors.Yellow,
  stringSymbolsColor: msColors.LavenderPurple,
  stringRegexColor: msColors.LavenderPurple,
  /*punctuationColor: "#fff",
  htmlTagColor: "#333",*/
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
  markupHeadingsColor: msColors.AmethystPurple
});

module.exports = template;
