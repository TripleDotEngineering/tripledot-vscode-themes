module.exports = baseTemplate;

function baseTemplate({
  name,
  isDark,
  foregroundColor,
  backgroundColor,
  activityBarColor,
  statusBarColor,
  sideBarBackgroundColor,
  sideBarBorderColor,
  titleBarBackgroundColor,
  terminalBackgroundColor,
  terminalForegroundColor,
  commentsColor,
  keywordsColor,
  typesColor,
  constantsColor,
  variablesColor,
  functionsColor,
  classesColor,
  numbersColor,
  stringsColor,
  stringSymbolsColor,
  stringRegexColor,
  punctuationColor,
  jsonUnquotedStrings,
  jsonKeyColors
}) {
  const foregroundDefault = (isDark) ? "#fff" : "#262626";
  const backgroundDefault = (isDark) ? "#262626" : "#fff";
  const foreground = foregroundColor || foregroundDefault;
  const background = backgroundColor || backgroundDefault;


  const template = {
    "name": name,
    "colors": {
      "editor.background": background,
      "editor.foreground": foreground,
      "sideBar.background": sideBarBackgroundColor,
      "sideBar.border": sideBarBorderColor || sideBarBackgroundColor,
      "titleBar.activeBackground": titleBarBackgroundColor || background,
      "activityBar.background": activityBarColor,
      "statusBar.background": statusBarColor,
      "list.activeSelectionIconForeground": "#fff",
      "terminal.background": terminalBackgroundColor || background,
      "terminal.foreground": terminalForegroundColor || foreground,
    },
    "tokenColors": [
      {
        "name": "Comments",
        "scope": [
          "comment",
          "punctuation.definition.comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": commentsColor || "#AAAAAA"
        }
      },
      {
        "name": "Comments: Preprocessor",
        "scope": "comment.block.preprocessor",
        "settings": {
          "fontStyle": "",
          "foreground": commentsColor || "#AAAAAA"
        }
      },
      {
        "name": "Comments: Documentation",
        "scope": [
          "comment.documentation",
          "comment.block.documentation"
        ],
        "settings": {
          "foreground": "#448C27"
        }
      },
      {
        "name": "Invalid - Illegal",
        "scope": "invalid.illegal",
        "settings": {
          "foreground": "#660000"
        }
      },
      {
        "name": "Operators",
        "scope": "keyword.operator",
        "settings": {
          "foreground": "#777777"
        }
      },
      {
        "name": "Keywords",
        "scope": [
          "keyword",
          "storage"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": keywordsColor
        }
      },
      {
        "name": "Types",
        "scope": [
          "storage.type",
          "support.type"
        ],
        "settings": {
          "foreground": typesColor
        }
      },
      {
        "name": "Language Constants",
        "scope": [
          "constant.language",
          "support.constant",
          "variable.language"
        ],
        "settings": {
          "foreground": constantsColor
        }
      },
      {
        "name": "Variables",
        "scope": [
          "variable",
          "support.variable"
        ],
        "settings": {
          "foreground": variablesColor
        }
      },
      {
        "name": "Functions",
        "scope": [
          "entity.name.function",
          "support.function"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": functionsColor
        }
      },
      {
        "name": "Classes",
        "scope": [
          "entity.name.type",
          "entity.other.inherited-class",
          "support.class"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": classesColor
        }
      },
      {
        "name": "Exceptions",
        "scope": "entity.name.exception",
        "settings": {
          "foreground": "#660000"
        }
      },
      {
        "name": "Sections",
        "scope": "entity.name.section",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "Numbers, Characters",
        "scope": [
          "constant.numeric",
          "constant.character",
          "constant"
        ],
        "settings": {
          "foreground": numbersColor
        }
      },
      {
        "name": "Strings",
        "scope": "string",
        "settings": {
          "foreground": stringsColor
        }
      },
      {
        "name": "Strings: Unquoted JS",
        "scope": "string.unquoted.js",
        "settings": {
          "foreground": jsonUnquotedStrings ? jsonUnquotedStrings : foreground
        }

      },
      {
        "name": "Strings: Escape Sequences",
        "scope": "constant.character.escape",
        "settings": {
          "foreground": "#777777"
        }
      },
      {
        "name": "Strings: Regular Expressions",
        "scope": "string.regexp",
        "settings": {
          "foreground": stringRegexColor
        }
      },
      {
        "name": "Strings: Symbols",
        "scope": "constant.other.symbol",
        "settings": {
          "foreground": stringSymbolsColor
        }
      },
      {
        "name": "Punctuation",
        "scope": "punctuation",
        "settings": {
          "foreground": punctuationColor
        }
      },
      {
        "name": "HTML: Doctype Declaration",
        "scope": [
          "meta.tag.sgml.doctype",
          "meta.tag.sgml.doctype string",
          "meta.tag.sgml.doctype entity.name.tag",
          "meta.tag.sgml punctuation.definition.tag.html"
        ],
        "settings": {
          "foreground": "#AAAAAA"
        }
      },
      {
        "name": "HTML: Tags",
        "scope": [
          "meta.tag",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html"
        ],
        "settings": {
          "foreground": "#91B3E0"
        }
      },
      {
        "name": "HTML: Tag Names",
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#4B83CD"
        }
      },
      {
        "name": "HTML: Attribute Names",
        "scope": [
          "meta.tag entity.other.attribute-name",
          "entity.other.attribute-name.html"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#91B3E0"
        }
      },
      {
        "name": "HTML: Entities",
        "scope": [
          "constant.character.entity",
          "punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#AB6526"
        }
      },
      {
        "name": "CSS: Selectors",
        "scope": [
          "meta.selector",
          "meta.selector entity",
          "meta.selector entity punctuation",
          "entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#7A3E9D"
        }
      },
      {
        "name": "CSS: Property Names",
        "scope": [
          "meta.property-name",
          "support.type.property-name"
        ],
        "settings": {
          "foreground": "#AB6526"
        }
      },
      {
        "name": "CSS: Property Values",
        "scope": [
          "meta.property-value",
          "meta.property-value constant.other",
          "support.constant.property-value"
        ],
        "settings": {
          "foreground": "#448C27"
        }
      },
      {
        "name": "CSS: Important Keyword",
        "scope": "keyword.other.important",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markup: Changed",
        "scope": "markup.changed",
        "settings": {
          "foreground": "#000000"
        }
      },
      {
        "name": "Markup: Deletion",
        "scope": "markup.deleted",
        "settings": {
          "foreground": "#000000"
        }
      },
      {
        "name": "Markup: Emphasis",
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markup: Error",
        "scope": "markup.error",
        "settings": {
          "foreground": "#660000"
        }
      },
      {
        "name": "Markup: Insertion",
        "scope": "markup.inserted",
        "settings": {
          "foreground": "#000000"
        }
      },
      {
        "name": "Markup: Link",
        "scope": "meta.link",
        "settings": {
          "foreground": "#4B83CD"
        }
      },
      {
        "name": "Markup: Output",
        "scope": [
          "markup.output",
          "markup.raw"
        ],
        "settings": {
          "foreground": "#777777"
        }
      },
      {
        "name": "Markup: Prompt",
        "scope": "markup.prompt",
        "settings": {
          "foreground": "#777777"
        }
      },
      {
        "name": "Markup: Heading",
        "scope": "markup.heading",
        "settings": {
          "foreground": "#AA3731"
        }
      },
      {
        "name": "Markup: Strong",
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markup: Traceback",
        "scope": "markup.traceback",
        "settings": {
          "foreground": "#660000"
        }
      },
      {
        "name": "Markup: Underline",
        "scope": "markup.underline",
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "name": "Markup Quote",
        "scope": "markup.quote",
        "settings": {
          "foreground": "#7A3E9D"
        }
      },
      {
        "name": "Markup Lists",
        "scope": "markup.list",
        "settings": {
          "foreground": "#4B83CD"
        }
      },
      {
        "name": "Markup Styling",
        "scope": [
          "markup.bold",
          "markup.italic"
        ],
        "settings": {
          "foreground": "#448C27"
        }
      },
      {
        "name": "Markup Inline",
        "scope": "markup.inline.raw",
        "settings": {
          "fontStyle": "",
          "foreground": "#AB6526"
        }
      },
      {
        "name": "Extra: Diff Range",
        "scope": [
          "meta.diff.range",
          "meta.diff.index",
          "meta.separator"
        ],
        "settings": {
          "foreground": "#434343"
        }
      },
      {
        "name": "Extra: Diff From",
        "scope": "meta.diff.header.from-file",
        "settings": {
          "foreground": "#434343"
        }
      },
      {
        "name": "Extra: Diff To",
        "scope": "meta.diff.header.to-file",
        "settings": {
          "foreground": "#434343"
        }
      }
    ]
  }


  template.tokenColors.push({
    "name": "JS Object Quoted Keys",
    "scope": [
      'source.js meta.function.js constant.other.object.key.js string.quoted.double.js',
      'source.js meta.function.arrow.js constant.other.object.key.js string.quoted.double.js',
      'source.js constant.other.object.key.js string.quoted.double.js'
    ],
    "settings": {
      "foreground": jsonUnquotedStrings
    }
  });


  // Autogenerate JSON scopes
  for (let i = 0; i < jsonKeyColors.length; i++) {
    let scope = [
      'support.type.property-name.json',
      'string.json',
      'meta.structure.dictionary.json'
    ]
    for (let j = 0; j < i; j++) {
      scope.push('meta.structure.dictionary.value.json');
      scope.push('meta.structure.dictionary.json');
    }
    scope.push('source.json');
    template.tokenColors.push(
      {
        "name": `JSON Key - Level ${i}`,
        "scope": scope.reverse().join(' '),
        "settings": {
          "foreground": jsonKeyColors[i],
        }
      }
    );
  }

  return template;
}
