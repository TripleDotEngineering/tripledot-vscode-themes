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
  name: "MS",
  primary: msColors.Blue,
  isDark: false,
  /*tabActiveBackgroundColor: "#ffffff",
  tabInactiveBackgroundColor: "#f2f2f2",
  tabInactiveForegroundColor: "#777777",
  titleBarBackgroundColor: "#e4e4e4",*/
  activityBarColor: msColors.Blue,
  statusBarColor: msColors.OrangeRed,
  /*sideBarBackgroundColor: "#f8f8f8",
  sideBarBorderColor: "#e4e4e4",*/
  keywordsColor: msColors.Blue,
  typesColor: msColors.Green,
  constantsColor: msColors.Purple,
  functionsColor: msColors.OrangeRed,
  classesColor: msColors.Blue,
  stringsColor:  msColors.Gray,
  stringSymbolsColor: msColors.Purple,
  stringRegexColor: msColors.Purple,
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
  markupHeadingsColor: msColors.OrangeRed
});

module.exports = template;
