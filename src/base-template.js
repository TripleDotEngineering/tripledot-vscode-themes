module.exports = baseTemplate;

function baseTemplate({
  name,
  isDark,
  ...props
}) {
  const foregroundDefault = (isDark) ? "#fff" : "#262626";
  const backgroundDefault = (isDark) ? "#262626" : "#fff";
  const foreground = props.foregroundColor || foregroundDefault;
  const background = props.backgroundColor || backgroundDefault;


  const template = {
    "name": name,
    "colors": {
      "editor.background": background,
      "editor.foreground": foreground,
      "tab.activeBackground": props.tabActiveBackgroundColor || background,
      "tab.activeForeground": props.tabactiveForegroundColor || foreground,
      "tab.inactiveBackground": props.tabInactiveBackgroundColor || background,
      "tab.inactiveForeground": props.tabInactiveForegroundColor || foreground,
      "sideBar.background": props.sideBarBackgroundColor,
      "sideBar.border": props.sideBarBorderColor || props.sideBarBackgroundColor,
      "titleBar.activeBackground": props.titleBarBackgroundColor || background,
      "activityBar.background": props.activityBarColor,
      "statusBar.background": props.statusBarColor,
      "list.activeSelectionIconForeground": "#fff",
      "terminal.background": props.terminalBackgroundColor || background,
      "terminal.foreground": props.terminalForegroundColor || foreground,
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
          "foreground": props.commentsColor || "#AAAAAA"
        }
      },
      {
        "name": "Comments: Preprocessor",
        "scope": "comment.block.preprocessor",
        "settings": {
          "fontStyle": "",
          "foreground": props.commentsColor || "#AAAAAA"
        }
      },
      {
        "name": "Comments: Documentation",
        "scope": [
          "comment.documentation",
          "comment.block.documentation"
        ],
        "settings": {
          "foreground": "#AAAAAA"
        }
      },
      {
        "name": "Invalid - Illegal",
        "scope": "invalid.illegal",
        "settings": {
          "foreground": "#990000"
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
          "foreground": props.keywordsColor
        }
      },
      {
        "name": "Types",
        "scope": [
          "storage.type",
          "support.type"
        ],
        "settings": {
          "foreground": props.typesColor
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
          "foreground": props.constantsColor
        }
      },
      {
        "name": "Variables",
        "scope": [
          "variable",
          "support.variable"
        ],
        "settings": {
          "foreground": props.variablesColor
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
          "foreground": props.functionsColor
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
          "foreground": props.classesColor
        }
      },
      {
        "name": "Exceptions",
        "scope": "entity.name.exception",
        "settings": {
          "foreground": "#990000"
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
          "foreground": props.numbersColor
        }
      },
      {
        "name": "Strings",
        "scope": "string",
        "settings": {
          "foreground": props.stringsColor
        }
      },
      {
        "name": "Strings: Unquoted JS",
        "scope": "string.unquoted.js",
        "settings": {
          "foreground": props.jsonUnquotedStrings ? props.jsonUnquotedStrings : foreground
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
          "foreground": props.stringRegexColor
        }
      },
      {
        "name": "Strings: Symbols",
        "scope": "constant.other.symbol",
        "settings": {
          "foreground": props.stringSymbolsColor
        }
      },
      {
        "name": "Punctuation",
        "scope": "punctuation",
        "settings": {
          "foreground": props.punctuationColor
        }
      },

      /* --------------------( HTML )-------------------- */

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
          "foreground": props.htmlTagColor || foreground
        }
      },
      {
        "name": "HTML: Tag Names",
        "scope": "entity.name.tag",
        "settings": {
          "foreground": props.htmlTagNameColor || foreground
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
          "foreground": props.htmlAttributeColor || foreground
        }
      },
      {
        "name": "HTML: Entities",
        "scope": [
          "constant.character.entity",
          "punctuation.definition.entity"
        ],
        "settings": {
          "foreground": props.htmlEntititesColor || foreground
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
          "foreground": props.cssSelectorsColor || foreground
        }
      },
      {
        "name": "CSS: Property Names",
        "scope": [
          "meta.property-name",
          "support.type.property-name"
        ],
        "settings": {
          "foreground": props.cssPropertyNamesColor || foreground
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
          "foreground": props.cssPropertyValuesColor || foreground
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
          "foreground": "#AA0000"
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
          "foreground": props.markupLinkColor ||  props.functionsColor
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
          "foreground": props.markupHeadingsColor || props.keywordsColor
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
          "foreground": "#990000"
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
          "foreground": foreground
        }
      },
      {
        "name": "Markup Lists",
        "scope": "markup.list",
        "settings": {
          "foreground": props.markupListsColor || foreground
        }
      },
      {
        "name": "Markup Styling",
        "scope": [
          "markup.bold",
          "markup.italic"
        ],
        "settings": {
          "foreground": props.markupStylingColor || props.functionsColor
        }
      },
      {
        "name": "Markup Inline",
        "scope": "markup.inline.raw",
        "settings": {
          "fontStyle": "",
          "foreground": props.markupInlineColor || props.typesColor
        }
      },


      /* --------------------( Python )-------------------- */

      {
        "name": "Python Docstrings",
        "scope": "source.python string.quoted.docstring.multi.python",
        "settings": {
          "foreground": props.pythonDocstringsColor || props.commentsColor || foreground
        }
      },
      {
        "name": "Python Function Calls",
        "scope": "source.python meta.function-call.python meta.function-call.generic.python",
        "settings": {
          "foreground": props.pythonFunctionCallsColor || props.functionsColor || foreground
        }
      },


      /* --------------------( C# )-------------------- */
      {
        "name": "C#: Keywords",
        "scope": [
          "source.cs keyword.other.new.cs",
        ],
        "settings": {
          "foreground": props.cSharpKeywordsColor || props.functionsColor || foreground
        }
      },
      {
        "name": "C#: Types",
        "scope": [
          "source.cs keyword.type.cs",
          "source.cs entity.name.type.cs",
          "source.cs keyword.other.class.cs"
        ],
        "settings": {
          "foreground": props.cSharpTypesColor || props.typesColor || foreground
        }
      },
      {
        "name": "C#: Classnames",
        "scope": [
          "source.cs entity.name.type.class.cs"
        ],
        "settings": {
          "foreground": props.cSharpClassColor || props.functionsColor || foreground
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
      "foreground": props.jsonUnquotedStrings
    }
  });


  // Autogenerate JSON scopes
  for (let i = 0; i < props.jsonKeyColors.length; i++) {
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
          "foreground": props.jsonKeyColors[i],
        }
      }
    );
  }

  return template;
}
