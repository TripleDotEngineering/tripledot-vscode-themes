const baseTemplate = require('./base-template');

const primary = '#479ef5' // tokens.colorBrandForeground1
const bg1 = '#082338' // tokens.colorBrandBackground2
const bg2 = '#115ea3' // tokens.colorBrandBackground
const green1 = '#54b054' // colorGreenForeground1
const orange = '#e9835e' // tokens.colorPaletteDarkOrangeForeground1
const yellow1 = '#feee66' // tokens.colorPaletteYellowForeground1
const yellow2 = '#fef7b2'
const berry = '#da7ed0' // tokens.colorPaletteBerryForeground1
const lightGreen = '#5ec75a' // tokens.colorPaletteLightGreenForeground1
const gray = '#999999' // tokens.colorNeutralForeground4
const gold = '#f2c661' // tokens.colorPaletteMarigoldForeground1
const lavender = '#a79cf1' // tokens.colorPaletteLavenderBorderActive
const lilac = '#e6bfed' // tokens.colorPaletteLilacForeground2

const purple1 = berry
const purple2 = lilac
const green = lightGreen
const yellow = yellow2

console.log(primary)
const template = baseTemplate({
  name: "Fluent (Dark)",
  isDark: true,
  primary: primary,
  backgroundColor: "#292929",
  tabActiveBackgroundColor: "#292929",
  tabInactiveBackgroundColor: "#1f1f1f",
  //tabInactiveForegroundColor: "#777",
  //titleBarBackgroundColor: bg1,
  // activityBarColor: bg1,
  statusBarColor: bg1,
  sideBarBackgroundColor: "#292929",
  //sideBarBorderColor: "#515151",
  keywordsColor: berry,
  typesColor: green,
  constantsColor: purple1,
  // variablesColor: orange,
  functionsColor: primary,
  commentsColor: gray,
  classesColor: primary,
  numbersColor: purple1,
  stringsColor:  yellow,
  stringSymbolsColor: purple1,
  stringRegexColor: purple1,
  punctuationColor: berry,
  /*htmlTagColor: "#333",*/
  htmlTagNameColor: primary,
  htmlAttributeColor: orange,
  htmlEntitiesColor: primary,
  cssSelectorsColor: primary,
  cssPropertyNamesColor: green,
  cssPropertyValuesColor: primary,
  jsonUnquotedStrings: primary,
  jsonKeyColors: [
    primary, purple1, green,
    yellow1, orange, purple2,
    primary, purple1, green,
    yellow1, orange, purple2,
    primary
  ],
  markupHeadingsColor: purple1
});

module.exports = template;
