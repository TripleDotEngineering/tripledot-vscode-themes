const colors = require('./colors');
const baseTemplate = require('./base-template');
const raz = colors.raz;

const template = baseTemplate({
  name: "raz",
  isDark: true,
  background: raz.bg,
  commentsColor: raz.gr700,
  tabActiveBackgroundColor: raz.bg,
  tabInactiveBackgroundColor: raz.bgDark,
  tabInactiveForegroundColor: raz.gr200,
  activityBarColor: raz.orange1,
  statusBarColor: raz.bgDarker,
  sideBarBackgroundColor: raz.bg2,
  sideBarBorderColor: raz.gr100,
  keywordsColor: raz.orange1,
  keywordsControlColor: raz.orange1,
  typesColor: raz.terminalGreen,
  constantsColor: raz.purple1,
  variablesColor: raz.white,
  functionsColor: raz.white,
  functionsCallColor: raz.cyan,
  classesColor: raz.gr500,
  numbersColor: raz.purple1,
  stringsColor: raz.yellow2,
  stringSymbolsColor: raz.green,
  stringRegexColor: raz.green,
  punctuationColor: raz.lightGray,
  htmlTagColor: raz.pink,
  htmlTagNameColor: raz.raspberry2,
  htmlAttributeColor: raz.paleGreen,
  htmlEntitiesColor: raz.green,
  cssSelectorsColor: raz.green,
  cssPropertyNamesColor: raz.brightBlue,
  cssPropertyValuesColor: raz.brightBlue,
  jsonUnquotedStrings: raz.brightBlue,
  jsonKeyColors: [
    raz.brightBlue, raz.raspberry, raz.purple1, raz.green, raz.raspberry2, raz.orange1,
    raz.brightBlue, raz.raspberry, raz.purple1, raz.green, raz.raspberry2, raz.orange1,
    raz.brightBlue, raz.raspberry, raz.purple1, raz.green, raz.raspberry2, raz.orange1,
    raz.brightBlue, raz.raspberry, raz.purple1, raz.green, raz.raspberry2, raz.orange1,
    raz.brightBlue],
  markupHeadingsColor: raz.orange1,
  rustFnColor: raz.orange1,
  rustSelfColor: raz.pink,
  rustTypesNumericColor: raz.purple1,
  rustStructDeclaration: raz.orange1,
  rustTraitDeclaration: raz.orange1,
  rustAttribute: raz.grBlue2,
  rustAttributeType: raz.grBlue2,
  rustMacroFunction: raz.cyan,
  rustBorrowColor: raz.yellow

});

module.exports = template;
