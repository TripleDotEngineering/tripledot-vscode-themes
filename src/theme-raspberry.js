const colors = require('./colors');
const baseTemplate = require('./base-template');
const raz = colors.raz;

const template = baseTemplate({
  name: "raz - raspberry",
  isDark: true,
  background: raz.bg,
  commentsColor: raz.gr700,
  tabActiveBackgroundColor: raz.bg,
  tabInactiveBackgroundColor: raz.bgDark,
  tabInactiveForegroundColor: raz.gr200,
  activityBarColor: raz.bgDark,
  statusBarColor: raz.bgDarker,
  sideBarBackgroundColor: raz.bgDark,
  sideBarBorderColor: raz.gr100,
  keywordsColor: raz.raspberry,
  keywordsControlColor: raz.raspberry,
  typesColor: raz.terminalGreen,
  constantsColor: raz.purple1,
  variablesColor: raz.white,
  functionsColor: raz.cyan,
  functionsCallColor: raz.terminalGreen,
  classesColor: raz.teal1,
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
  markupHeadingsColor: raz.raspberry,
  rustFnColor: raz.raspberry,
  rustSelfColor: raz.pink,
  rustTypesNumericColor: raz.purple1,
  rustStructDeclaration: raz.raspberry,
  rustTraitDeclaration: raz.raspberry,
  rustAttributeType: raz.grBlue2,
  rustAttribute: raz.lightOrange,
  rustBorrowColor: raz.orange1,
  rustMacroFunction: raz.cyan

});

module.exports = template;
