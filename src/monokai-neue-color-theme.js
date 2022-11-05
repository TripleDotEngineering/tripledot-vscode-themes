
// Autogenerate JSON scopes
const colors = [
  "#fc618d",
  "#5ad4e6",
  "#948ae3",
  "#7bd88f",
  "#fd9353",
  "#fc618d",
  "#5ad4e6",
  "#948ae3",
  "#7bd88f",
  "#fd9353",
  "#fce566",
  "#fc618d",
  "#5ad4e6",
  "#948ae3",
]
const jsonScopes = [];
for (let i = 0; i < colors.length; i++) {
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
  jsonScopes.push(
    {
      "name": `JSON Key - Level ${i}`,
      "scope": scope.reverse().join(' '),
      "settings": {
				"foreground": colors[i],
		  }
    }
  );
}


const template = {
  "name": "Monokai Neue",
	"colors": {
		"activityBar.background": "#131313",
		"activityBar.border": "#131313",
		"activityBar.foreground": "#bab6c0",
		"activityBar.inactiveForeground": "#525053",
		"activityBarBadge.background": "#fce566",
		"activityBarBadge.foreground": "#222222",
		"badge.background": "#fce566",
		"badge.foreground": "#222222",
		"breadcrumb.activeSelectionForeground": "#f7f1ff",
		"breadcrumb.focusForeground": "#bab6c0",
		"breadcrumb.foreground": "#8b888f",
		"button.background": "#363537",
		"button.foreground": "#8b888f",
		"button.hoverBackground": "#222222",
		"charts.blue": "#5ad4e6",
		"charts.foreground": "#f7f1ff",
		"charts.green": "#7bd88f",
		"charts.lines": "#69676c",
		"charts.orange": "#fd9353",
		"charts.purple": "#948ae3",
		"charts.red": "#fc618d",
		"charts.yellow": "#fce566",
		"debugExceptionWidget.background": "#363537",
		"debugExceptionWidget.border": "#222222",
		"debugIcon.breakpointCurrentStackframeForeground": "#fce566",
		"debugIcon.breakpointDisabledForeground": "#bab6c0",
		"debugIcon.breakpointForeground": "#fc618d",
		"debugIcon.breakpointStackframeForeground": "#f7f1ff",
		"debugIcon.breakpointUnverifiedForeground": "#fd9353",
		"debugIcon.continueForeground": "#f7f1ff",
		"debugIcon.disconnectForeground": "#f7f1ff",
		"debugIcon.pauseForeground": "#f7f1ff",
		"debugIcon.restartForeground": "#7bd88f",
		"debugIcon.startForeground": "#7bd88f",
		"debugIcon.stepBackForeground": "#f7f1ff",
		"debugIcon.stepIntoForeground": "#f7f1ff",
		"debugIcon.stepOutForeground": "#f7f1ff",
		"debugIcon.stepOverForeground": "#f7f1ff",
		"debugIcon.stopForeground": "#fc618d",
		"debugToolBar.background": "#363537",
		"descriptionForeground": "#8b888f",
		"diffEditor.insertedTextBackground": "#7bd88f19",
		"diffEditor.removedTextBackground": "#fc618d19",
		"dropdown.background": "#222222",
		"dropdown.border": "#222222",
		"dropdown.foreground": "#8b888f",
		"dropdown.listBackground": "#363537",
		"editor.background": "#2c2c2c",
		"editor.findMatchBackground": "#f7f1ff26",
		"editor.findMatchBorder": "#fce566",
		"editor.findMatchHighlightBackground": "#f7f1ff26",
		"editor.findMatchHighlightBorder": "#00000000",
		"editor.findRangeHighlightBackground": "#f7f1ff0c",
		"editor.findRangeHighlightBorder": "#00000000",
		"editor.foreground": "#f7f1ff",
		"editor.hoverHighlightBackground": "#f7f1ff0c",
		"editor.inactiveSelectionBackground": "#f7f1ff0c",
		"editor.lineHighlightBackground": "#f7f1ff0c",
		"editor.lineHighlightBorder": "#00000000",
		"editor.rangeHighlightBackground": "#363537",
		"editor.rangeHighlightBorder": "#363537",
		"editor.selectionBackground": "#bab6c026",
		"editor.selectionHighlightBackground": "#f7f1ff26",
		"editor.selectionHighlightBorder": "#00000000",
		"editor.wordHighlightBackground": "#f7f1ff26",
		"editor.wordHighlightBorder": "#00000000",
		"editor.wordHighlightStrongBackground": "#f7f1ff26",
		"editor.wordHighlightStrongBorder": "#00000000",
		"editorBracketMatch.background": "#222222",
		"editorBracketMatch.border": "#69676c",
		"editorCodeLens.foreground": "#69676c",
		"editorCursor.background": "#222222",
		"editorCursor.foreground": "#f7f1ff",
		"editorError.background": "#00000000",
		"editorError.border": "#00000000",
		"editorError.foreground": "#fc618d",
		"editorGroup.border": "#191919",
		"editorGroup.dropBackground": "#191919bf",
		"editorGroup.emptyBackground": "#131313",
		"editorGroup.focusedEmptyBorder": "#191919",
		"editorGroupHeader.noTabsBackground": "#222222",
		"editorGroupHeader.tabsBackground": "#222222",
		"editorGroupHeader.tabsBorder": "#222222",
		"editorGutter.addedBackground": "#7bd88f",
		"editorGutter.background": "#2c2c2c",
		"editorGutter.deletedBackground": "#fc618d",
		"editorGutter.modifiedBackground": "#fd9353",
		"editorHint.border": "#222222",
		"editorHint.foreground": "#948ae3",
		"editorHoverWidget.background": "#363537",
		"editorHoverWidget.border": "#222222",
		"editorIndentGuide.background": "#363537",
		"editorInfo.background": "#00000000",
		"editorInfo.border": "#222222",
		"editorInfo.foreground": "#5ad4e6",
		"editorLightBulb.foreground": "#fce566",
		"editorLightBulbAutoFix.foreground": "#7bd88f",
		"editorLineNumber.activeForeground": "#bab6c0",
		"editorLineNumber.foreground": "#525053",
		"editorLink.activeForeground": "#5ad4e6",
		"editorMarkerNavigation.background": "#363537",
		"editorMarkerNavigationError.background": "#fc618d",
		"editorMarkerNavigationInfo.background": "#5ad4e6",
		"editorMarkerNavigationWarning.background": "#fd9353",
		"editorOverviewRuler.addedForeground": "#7bd88f",
		"editorOverviewRuler.border": "#222222",
		"editorOverviewRuler.currentContentForeground": "#363537",
		"editorOverviewRuler.deletedForeground": "#fc618d",
		"editorOverviewRuler.errorForeground": "#fc618d",
		"editorOverviewRuler.findMatchForeground": "#f7f1ff26",
		"editorOverviewRuler.incomingContentForeground": "#363537",
		"editorOverviewRuler.infoForeground": "#5ad4e6",
		"editorOverviewRuler.modifiedForeground": "#fd9353",
		"editorOverviewRuler.rangeHighlightForeground": "#f7f1ff26",
		"editorOverviewRuler.selectionHighlightForeground": "#f7f1ff26",
		"editorOverviewRuler.warningForeground": "#fd9353",
		"editorOverviewRuler.wordHighlightForeground": "#f7f1ff26",
		"editorOverviewRuler.wordHighlightStrongForeground": "#f7f1ff26",
		"editorPane.background": "#222222",
		"editorRuler.foreground": "#525053",
		"editorSuggestWidget.background": "#363537",
		"editorSuggestWidget.border": "#363537",
		"editorSuggestWidget.foreground": "#bab6c0",
		"editorSuggestWidget.highlightForeground": "#f7f1ff",
		"editorSuggestWidget.selectedBackground": "#69676c",
		"editorWarning.background": "#00000000",
		"editorWarning.border": "#00000000",
		"editorWarning.foreground": "#fd9353",
		"editorWhitespace.foreground": "#525053",
		"editorWidget.background": "#363537",
		"editorWidget.border": "#363537",
		"errorForeground": "#fc618d",
		"extensionButton.prominentBackground": "#363537",
		"extensionButton.prominentForeground": "#f7f1ff",
		"extensionButton.prominentHoverBackground": "#525053",
		"focusBorder": "#69676c",
		"foreground": "#f7f1ff",
		"gitDecoration.addedResourceForeground": "#7bd88f",
		"gitDecoration.conflictingResourceForeground": "#fd9353",
		"gitDecoration.deletedResourceForeground": "#fc618d",
		"gitDecoration.ignoredResourceForeground": "#525053",
		"gitDecoration.modifiedResourceForeground": "#fce566",
		"gitDecoration.stageDeletedResourceForeground": "#fc618d",
		"gitDecoration.stageModifiedResourceForeground": "#fce566",
		"gitDecoration.untrackedResourceForeground": "#fd9353",
		"input.background": "#363537",
		"input.border": "#363537",
		"input.foreground": "#f7f1ff",
		"input.placeholderForeground": "#69676c",
		"inputOption.activeBackground": "#525053",
		"inputOption.activeBorder": "#525053",
		"inputValidation.errorBackground": "#363537",
		"inputValidation.errorBorder": "#fc618d",
		"inputValidation.errorForeground": "#fc618d",
		"inputValidation.infoBackground": "#363537",
		"inputValidation.infoBorder": "#5ad4e6",
		"inputValidation.infoForeground": "#5ad4e6",
		"inputValidation.warningBackground": "#363537",
		"inputValidation.warningBorder": "#fd9353",
		"inputValidation.warningForeground": "#fd9353",
		"list.activeSelectionBackground": "#f7f1ff0c",
		"list.activeSelectionForeground": "#fce566",
		"list.dropBackground": "#191919bf",
		"list.errorForeground": "#fc618d",
		"list.focusBackground": "#222222",
		"list.focusForeground": "#f7f1ff",
		"list.highlightForeground": "#f7f1ff",
		"list.hoverBackground": "#f7f1ff0c",
		"list.hoverForeground": "#f7f1ff",
		"list.inactiveFocusBackground": "#222222",
		"list.inactiveSelectionBackground": "#bab6c00c",
		"list.inactiveSelectionForeground": "#fce566",
		"list.invalidItemForeground": "#fc618d",
		"list.warningForeground": "#fd9353",
		"listFilterWidget.background": "#222222",
		"listFilterWidget.noMatchesOutline": "#fc618d",
		"listFilterWidget.outline": "#222222",
		"merge.border": "#222222",
		"merge.commonContentBackground": "#f7f1ff19",
		"merge.commonHeaderBackground": "#f7f1ff26",
		"merge.currentContentBackground": "#fc618d19",
		"merge.currentHeaderBackground": "#fc618d26",
		"merge.incomingContentBackground": "#7bd88f19",
		"merge.incomingHeaderBackground": "#7bd88f26",
		"minimap.errorHighlight": "#fc618d",
		"minimap.warningHighlight": "#fd9353",
		"minimapGutter.addedBackground": "#7bd88f",
		"minimapGutter.deletedBackground": "#fc618d",
		"minimapGutter.modifiedBackground": "#fce566",
		"notificationCenter.border": "#363537",
		"notificationCenterHeader.background": "#363537",
		"notificationCenterHeader.foreground": "#8b888f",
		"notificationLink.foreground": "#fce566",
		"notificationToast.border": "#363537",
		"notifications.background": "#363537",
		"notifications.border": "#363537",
		"notifications.foreground": "#bab6c0",
		"notificationsErrorIcon.foreground": "#fc618d",
		"notificationsInfoIcon.foreground": "#5ad4e6",
		"notificationsWarningIcon.foreground": "#fd9353",
		"panel.background": "#363537",
		"panel.border": "#222222",
		"panelTitle.activeBorder": "#fce566",
		"panelTitle.activeForeground": "#fce566",
		"panelTitle.inactiveForeground": "#8b888f",
		"peekView.border": "#222222",
		"peekViewEditor.background": "#363537",
		"peekViewEditor.matchHighlightBackground": "#525053",
		"peekViewEditorGutter.background": "#363537",
		"peekViewResult.background": "#363537",
		"peekViewResult.fileForeground": "#8b888f",
		"peekViewResult.lineForeground": "#8b888f",
		"peekViewResult.matchHighlightBackground": "#525053",
		"peekViewResult.selectionBackground": "#363537",
		"peekViewResult.selectionForeground": "#f7f1ff",
		"peekViewTitle.background": "#363537",
		"peekViewTitleDescription.foreground": "#8b888f",
		"peekViewTitleLabel.foreground": "#f7f1ff",
		"pickerGroup.border": "#222222",
		"pickerGroup.foreground": "#525053",
		"problemsErrorIcon.foreground": "#fc618d",
		"problemsInfoIcon.foreground": "#5ad4e6",
		"problemsWarningIcon.foreground": "#fd9353",
		"progressBar.background": "#363537",
		"sash.hoverBorder": "#69676c",
		"scrollbar.shadow": "#222222",
		"scrollbarSlider.activeBackground": "#f7f1ff12",
		"scrollbarSlider.background": "#f7f1ff12",
		"scrollbarSlider.hoverBackground": "#f7f1ff12",
		"selection.background": "#bab6c026",
		"settings.checkboxBackground": "#363537",
		"settings.checkboxBorder": "#363537",
		"settings.checkboxForeground": "#f7f1ff",
		"settings.dropdownBackground": "#363537",
		"settings.dropdownBorder": "#363537",
		"settings.dropdownForeground": "#f7f1ff",
		"settings.dropdownListBorder": "#8b888f",
		"settings.headerForeground": "#fce566",
		"settings.modifiedItemIndicator": "#fce566",
		"settings.numberInputBackground": "#363537",
		"settings.numberInputBorder": "#363537",
		"settings.numberInputForeground": "#f7f1ff",
		"settings.textInputBackground": "#363537",
		"settings.textInputBorder": "#363537",
		"settings.textInputForeground": "#f7f1ff",
		"sideBar.background": "#222222",
		"sideBar.border": "#555",
		"sideBar.dropBackground": "#191919bf",
		"sideBar.foreground": "#8b888f",
		"sideBarSectionHeader.background": "#191919",
		"sideBarSectionHeader.foreground": "#69676c",
		"sideBarTitle.foreground": "#525053",
		"statusBar.background": "#191919",
		"statusBar.border": "#131313",
		"statusBar.debuggingBackground": "#69676c",
		"statusBar.debuggingBorder": "#191919",
		"statusBar.debuggingForeground": "#f7f1ff",
		"statusBar.foreground": "#69676c",
		"statusBar.noFolderBackground": "#191919",
		"statusBar.noFolderBorder": "#131313",
		"statusBar.noFolderForeground": "#69676c",
		"statusBarItem.activeBackground": "#222222",
		"statusBarItem.errorBackground": "#222222",
		"statusBarItem.errorForeground": "#fc618d",
		"statusBarItem.hoverBackground": "#f7f1ff0c",
		"statusBarItem.prominentBackground": "#363537",
		"statusBarItem.prominentHoverBackground": "#363537",
		"statusBarItem.remoteBackground": "#191919",
		"statusBarItem.remoteForeground": "#7bd88f",
		"symbolIcon.arrayForeground": "#fc618d",
		"symbolIcon.booleanForeground": "#fc618d",
		"symbolIcon.classForeground": "#5ad4e6",
		"symbolIcon.colorForeground": "#948ae3",
		"symbolIcon.constantForeground": "#948ae3",
		"symbolIcon.constructorForeground": "#7bd88f",
		"symbolIcon.enumeratorForeground": "#fd9353",
		"symbolIcon.enumeratorMemberForeground": "#fd9353",
		"symbolIcon.eventForeground": "#fd9353",
		"symbolIcon.fieldForeground": "#fd9353",
		"symbolIcon.fileForeground": "#bab6c0",
		"symbolIcon.folderForeground": "#bab6c0",
		"symbolIcon.functionForeground": "#7bd88f",
		"symbolIcon.interfaceForeground": "#5ad4e6",
		"symbolIcon.keyForeground": "#fd9353",
		"symbolIcon.keywordForeground": "#fc618d",
		"symbolIcon.methodForeground": "#7bd88f",
		"symbolIcon.moduleForeground": "#5ad4e6",
		"symbolIcon.namespaceForeground": "#5ad4e6",
		"symbolIcon.nullForeground": "#948ae3",
		"symbolIcon.numberForeground": "#948ae3",
		"symbolIcon.objectForeground": "#5ad4e6",
		"symbolIcon.operatorForeground": "#fc618d",
		"symbolIcon.packageForeground": "#948ae3",
		"symbolIcon.propertyForeground": "#fd9353",
		"symbolIcon.referenceForeground": "#948ae3",
		"symbolIcon.snippetForeground": "#7bd88f",
		"symbolIcon.stringForeground": "#fce566",
		"symbolIcon.structForeground": "#fc618d",
		"symbolIcon.textForeground": "#fce566",
		"symbolIcon.typeParameterForeground": "#fd9353",
		"symbolIcon.unitForeground": "#948ae3",
		"symbolIcon.variableForeground": "#5ad4e6",
		"tab.activeBackground": "#222222",
		"tab.activeBorder": "#fce566",
		"tab.activeForeground": "#fce566",
		"tab.activeModifiedBorder": "#525053",
		"tab.border": "#222222",
		"tab.hoverBackground": "#222222",
		"tab.hoverBorder": "#525053",
		"tab.inactiveBackground": "#222222",
		"tab.inactiveForeground": "#8b888f",
		"tab.inactiveModifiedBorder": "#525053",
		"tab.lastPinnedBorder": "#525053",
		"tab.unfocusedActiveBorder": "#8b888f",
		"tab.unfocusedActiveForeground": "#bab6c0",
		"tab.unfocusedActiveModifiedBorder": "#363537",
		"tab.unfocusedHoverBackground": "#222222",
		"tab.unfocusedHoverBorder": "#222222",
		"tab.unfocusedInactiveForeground": "#8b888f",
		"tab.unfocusedInactiveModifiedBorder": "#363537",
		"terminal.ansiBlack": "#363537",
		"terminal.ansiBlue": "#fd9353",
		"terminal.ansiBrightBlack": "#69676c",
		"terminal.ansiBrightBlue": "#fd9353",
		"terminal.ansiBrightCyan": "#5ad4e6",
		"terminal.ansiBrightGreen": "#7bd88f",
		"terminal.ansiBrightMagenta": "#948ae3",
		"terminal.ansiBrightRed": "#fc618d",
		"terminal.ansiBrightWhite": "#f7f1ff",
		"terminal.ansiBrightYellow": "#fce566",
		"terminal.ansiCyan": "#5ad4e6",
		"terminal.ansiGreen": "#7bd88f",
		"terminal.ansiMagenta": "#948ae3",
		"terminal.ansiRed": "#fc618d",
		"terminal.ansiWhite": "#f7f1ff",
		"terminal.ansiYellow": "#fce566",
		"terminal.background": "#191919",
		"terminal.foreground": "#f7f1ff",
		"terminal.selectionBackground": "#f7f1ff26",
		"terminalCursor.background": "#00000000",
		"terminalCursor.foreground": "#f7f1ff",
		"textBlockQuote.background": "#363537",
		"textBlockQuote.border": "#363537",
		"textCodeBlock.background": "#363537",
		"textLink.activeForeground": "#f7f1ff",
		"textLink.foreground": "#fce566",
		"textPreformat.foreground": "#f7f1ff",
		"textSeparator.foreground": "#69676c",
		"titleBar.activeBackground": "#191919",
		"titleBar.activeForeground": "#8b888f",
		"titleBar.border": "#131313",
		"titleBar.inactiveBackground": "#191919",
		"titleBar.inactiveForeground": "#525053",
		"walkThrough.embeddedEditorBackground": "#191919",
		"welcomePage.buttonBackground": "#363537",
		"welcomePage.buttonHoverBackground": "#525053",
		"widget.shadow": "#131313",
		//"activityBar.activeBorder": "#bab6c0",
		//"activityBar.dropBorder": "#bab6c0",
		//"breadcrumb.background": "#222222",
		//"breadcrumbPicker.background": "#363537",
		//"button.secondaryBackground": "#3a3d41",
		//"button.secondaryForeground": "#ffffff",
		//"button.secondaryHoverBackground": "#45494e",
		//"checkbox.background": "#222222",
		//"checkbox.border": "#222222",
		//"checkbox.foreground": "#8b888f",
		//"debugConsole.errorForeground": "#fc618d",
		//"debugConsole.infoForeground": "#5ad4e6",
		//"debugConsole.sourceForeground": "#f7f1ff",
		//"debugConsole.warningForeground": "#fd9353",
		//"debugConsoleInputIcon.foreground": "#f7f1ff",
		//"debugTokenExpression.boolean": "#4e94ce",
		//"debugTokenExpression.error": "#f48771",
		//"debugTokenExpression.name": "#c586c0",
		//"debugTokenExpression.number": "#b5cea8",
		//"debugTokenExpression.string": "#ce9178",
		//"debugTokenExpression.value": "#cccccc99",
		//"debugView.exceptionLabelBackground": "#6c2022",
		//"debugView.exceptionLabelForeground": "#f7f1ff",
		//"debugView.stateLabelBackground": "#88888844",
		//"debugView.stateLabelForeground": "#f7f1ff",
		//"debugView.valueChangedHighlight": "#569cd6",
		//"diffEditor.diagonalFill": "#cccccc33",
		//"editor.focusedStackFrameHighlightBackground": "#7abd7a4d",
		//"editor.foldBackground": "#bab6c00b",
		//"editor.linkedEditingBackground": "#ff00004d",
		//"editor.snippetFinalTabstopHighlightBorder": "#525252",
		//"editor.snippetTabstopHighlightBackground": "#7c7c7c4d",
		//"editor.stackFrameHighlightBackground": "#ffff0033",
		//"editor.symbolHighlightBackground": "#f7f1ff26",
		//"editorActiveLineNumber.foreground": "#c6c6c6",
		//"editorGutter.commentRangeForeground": "#c5c5c5",
		//"editorGutter.foldingControlForeground": "#c5c5c5",
		//"editorHoverWidget.foreground": "#f7f1ff",
		//"editorHoverWidget.statusBarBackground": "#414042",
		//"editorIndentGuide.activeBackground": "#525053",
		//"editorInlineHint.background": "#f7f1ff",
		//"editorInlineHint.foreground": "#363537",
		//"editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
		//"editorOverviewRuler.commonContentForeground": "#f7f1ff26",
		//"editorUnnecessaryCode.opacity": "#000000aa",
		//"editorWidget.foreground": "#f7f1ff",
		//"extensionBadge.remoteBackground": "#fce566",
		//"extensionBadge.remoteForeground": "#222222",
		//"extensionIcon.starForeground": "#ff8e00",
		//"gitDecoration.renamedResourceForeground": "#73c991",
		//"gitDecoration.submoduleResourceForeground": "#8db9e2",
		//"icon.foreground": "#c5c5c5",
		//"imagePreview.border": "#80808059",
		//"inputOption.activeForeground": "#ffffff",
		//"keybindingLabel.background": "#8080802b",
		//"keybindingLabel.border": "#33333399",
		//"keybindingLabel.bottomBorder": "#44444499",
		//"keybindingLabel.foreground": "#cccccc",
		//"list.deemphasizedForeground": "#8c8c8c",
		//"list.filterMatchBackground": "#f7f1ff26",
		//"list.filterMatchBorder": "#00000000",
		//"list.focusOutline": "#69676c",
		//"menu.background": "#222222",
		//"menu.foreground": "#8b888f",
		//"menu.selectionBackground": "#f7f1ff0c",
		//"menu.selectionForeground": "#fce566",
		//"menu.separatorBackground": "#bbbbbb",
		//"menubar.selectionBackground": "#ffffff1a",
		//"menubar.selectionForeground": "#8b888f",
		//"minimap.findMatchHighlight": "#d18616",
		//"minimap.selectionHighlight": "#264f78",
		//"minimapSlider.activeBackground": "#f7f1ff09",
		//"minimapSlider.background": "#f7f1ff09",
		//"minimapSlider.hoverBackground": "#f7f1ff09",
		//"notebook.cellBorderColor": "#bab6c00c",
		//"notebook.cellInsertionIndicator": "#69676c",
		//"notebook.cellStatusBarItemHoverBackground": "#ffffff26",
		//"notebook.cellToolbarSeparator": "#80808059",
		//"notebook.focusedCellBorder": "#69676c",
		//"notebook.focusedEditorBorder": "#69676c",
		//"notebook.focusedRowBorder": "#ffffff1f",
		//"notebook.inactiveFocusedCellBorder": "#bab6c00c",
		//"notebook.outputContainerBackgroundColor": "#bab6c00c",
		//"notebook.rowHoverBackground": "#80808012",
		//"notebook.selectedCellBackground": "#bab6c00c",
		//"notebook.selectedCellBorder": "#bab6c00c",
		//"notebook.symbolHighlightBackground": "#ffffff0b",
		//"notebookScrollbarSlider.activeBackground": "#f7f1ff12",
		//"notebookScrollbarSlider.background": "#f7f1ff12",
		//"notebookScrollbarSlider.hoverBackground": "#f7f1ff12",
		//"notebookStatusErrorIcon.foreground": "#fc618d",
		//"notebookStatusRunningIcon.foreground": "#f7f1ff",
		//"notebookStatusSuccessIcon.foreground": "#7bd88f",
		//"panel.dropBorder": "#fce566",
		//"panelSection.border": "#222222",
		//"panelSection.dropBackground": "#191919bf",
		//"panelSectionHeader.background": "#80808033",
		//"ports.iconRunningProcessForeground": "#191919",
		//"quickInput.background": "#363537",
		//"quickInput.foreground": "#f7f1ff",
		//"quickInputList.focusBackground": "#222222",
		//"quickInputTitle.background": "#ffffff1b",
		//"scm.providerBorder": "#454545",
		//"searchEditor.findMatchBackground": "#f7f1ff19",
		//"searchEditor.findMatchBorder": "#00000000",
		//"searchEditor.textInputBorder": "#363537",
		//"settings.focusedRowBackground": "#80808024",
		//"statusBarItem.prominentForeground": "#69676c",
		//"tab.unfocusedActiveBackground": "#222222",
		//"tab.unfocusedInactiveBackground": "#222222",
		//"terminal.border": "#222222",
		//"testing.iconErrored": "#f14c4c",
		//"testing.iconFailed": "#f14c4c",
		//"testing.iconPassed": "#73c991",
		//"testing.iconQueued": "#cca700",
		//"testing.iconSkipped": "#848484",
		//"testing.iconUnset": "#848484",
		//"testing.message.error.decorationForeground": "#fc618d",
		//"testing.message.error.lineBackground": "#ff000033",
		//"testing.message.hint.decorationForeground": "#948ae3",
		//"testing.message.info.decorationForeground": "#5ad4e6",
		//"testing.message.info.lineBackground": "#007fff33",
		//"testing.message.warning.decorationForeground": "#fd9353",
		//"testing.message.warning.lineBackground": "#ffd00033",
		//"testing.peekBorder": "#fc618d",
		//"testing.runAction": "#73c991",
		//"toolbar.activeBackground": "#63666750",
		//"toolbar.hoverBackground": "#5a5d5e50",
		//"tree.indentGuidesStroke": "#585858",
		//"tree.tableColumnsBorder": "#cccccc20",
		//"welcomePage.progress.background": "#363537",
		//"welcomePage.progress.foreground": "#fce566",
		//"welcomePage.tileBackground": "#363537",
		//"welcomePage.tileHoverBackground": "#414042",
		//"welcomePage.tileShadow.": "#131313",
		//"workspaceTrust.tileBackground": "#363537",
		//"workspaceTrust.trustedForegound": "#7bd88f",
		//"workspaceTrust.untrustedForeground": "#fc618d",
		//"activityBar.activeBackground": null,
		//"activityBar.activeFocusBorder": null,
		//"button.border": null,
		//"contrastActiveBorder": null,
		//"contrastBorder": null,
		//"debugToolBar.border": null,
		//"diffEditor.border": null,
		//"diffEditor.insertedTextBorder": null,
		//"diffEditor.removedTextBorder": null,
		//"editor.selectionForeground": null,
		//"editor.snippetFinalTabstopHighlightBackground": null,
		//"editor.snippetTabstopHighlightBorder": null,
		//"editor.symbolHighlightBorder": null,
		//"editorGroup.background": null,
		//"editorGroupHeader.border": null,
		//"editorOverviewRuler.background": null,
		//"editorUnnecessaryCode.border": null,
		//"editorWidget.resizeBorder": null,
		//"list.inactiveFocusOutline": null,
		//"menu.border": null,
		//"menu.selectionBorder": null,
		//"menubar.selectionBorder": null,
		//"minimap.background": null,
		//"notebook.cellHoverBackground": null,
		//"notebook.focusedCellBackground": null,
		//"notebook.inactiveSelectedCellBorder": null,
		//"panelInput.border": null,
		//"panelSectionHeader.border": null,
		//"panelSectionHeader.foreground": null,
		//"peekViewEditor.matchHighlightBorder": null,
		//"quickInput.list.focusBackground": null,
		//"sideBarSectionHeader.border": null,
		//"tab.activeBorderTop": null,
		//"tab.hoverForeground": null,
		//"tab.unfocusedActiveBorderTop": null,
		//"tab.unfocusedHoverForeground": null,
		//"testing.message.hint.lineBackground": null,
		//"toolbar.hoverOutline": null,
		//"welcomePage.background": null,
		//"window.activeBorder": null,
		//"window.inactiveBorder": null
	},
	"tokenColors": [
		{
			"scope": [
				"comment",
				"comment keyword",
				"comment markup.underline.link",
				"comment string",
				"comment punctuation.definition",
				"comment punctuation",
				"comment text"
			],
			"settings": {
				"foreground": "#69676C",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": "comment storage.type",
			"settings": {
				"foreground": "#69676C"
			}
		},
		{
			"scope": "comment entity.name.type",
			"settings": {
				"foreground": "#BAB6C0"
			}
		},
		{
			"scope": [
				"comment variable",
				"comment variable.other"
			],
			"settings": {
				"foreground": "#BAB6C0"
			}
		},
		{
			"scope": "comment keyword.codetag.notation",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "comment.git-status.header.remote",
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "comment.git-status.header.local",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "comment.other.git-status.head",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "constant",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.other",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "constant.other.php",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.other.property",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.other.citation.latex",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.other.color",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.other.character-class.escape",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.other.key",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.other.symbol",
			"settings": {
				"foreground": "#FD9353"
			}
		},
		{
			"scope": "constant.other.elm",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "constant.numeric",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.language",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.character.escape",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "constant.numeric.line-number.find-in-files",
			"settings": {
				"foreground": "#525053"
			}
		},
		{
			"scope": "constant.numeric.line-number.match.find-in-files",
			"settings": {
				"foreground": "#FCE566"
			}
		},
		{
			"scope": "entity.name.section",
			"settings": {
				"foreground": "#FCE566"
			}
		},
		{
			"scope": [
				"entity.name.function",
				"entity.name.function.templated"
			],
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": "entity.name.function.member.static",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": [
				"entity.name.type.class.templated",
				"entity.name.type.class.generic",
				"entity.name.type.namespace"
			],
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "entity.name.label",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "entity.name.function.preprocessor",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "entity.name",
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": "entity.name.class",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "entity.name.constant",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "entity.name.namespace",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "entity.other.inherited-class",
			"settings": {
				"foreground": "#5AD4E6",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": "entity.name.function",
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": [
				"entity.name.tag",
				"entity.name.tag.js.jsx support.class.component.js.jsx",
				"entity.name.tag support.class.component",
				"source.vue support.class.component"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "entity.name.function.operator",
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": [
				"entity.name.type",
				"entity.name.type.class.reference",
				"entity.name.type.class.value"
			],
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "entity.other.attribute-name",
			"settings": {
				"foreground": "#5AD4E6",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": [
				"entity.other.attribute-name.class.css",
				"entity.other.attribute-name.parent-selector-suffix.css",
				"entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
				"entity.other.attribute-name.css",
				"entity.other.animation-name.css"
			],
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": "entity.other.attribute-name.id.css",
			"settings": {
				"foreground": "#FD9353"
			}
		},
		{
			"scope": [
				"entity.other.attribute-name.pseudo-class.css",
				"entity.other.pseudo-class.css",
				"entity.other.pseudo-element.css"
			],
			"settings": {
				"foreground": "#5AD4E6",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": [
				"entity.name.function",
				"support.function"
			],
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": "entity.other.git-status.hex",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "entity.other.jinja2.delimiter",
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": "entity.name.operator.custom-literal",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "entity.name.operator.custom-literal.string",
			"settings": {
				"foreground": "#FCE566"
			}
		},
		{
			"scope": "entity.name.operator.custom-literal.number",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "entity.name.type.rust",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "entity.name.lifetime.rust",
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "invalid",
			"settings": {
				//"fontStyle": "italic"
			}
		},
		{
			"scope": "keyword",
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "keyword.control",
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "keyword.control.directive",
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": [
				"keyword.operator",
				"keyword.operator.member",
				"keyword.operator.new"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "keyword.other.substitution",
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": [
				"keyword.other.template.begin",
				"keyword.other.template.end"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": [
				"keyword.operator.heading.restructuredtext",
				"keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext"
			],
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": "keyword.other.parenthesis.elm",
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": [
				"keyword.other.fn.rust",
				"keyword.other.rust",
				"keyword.other.unsafe.rust",
				"keyword.other.where.rust"
			],
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": [
				"keyword.control.rust",
				"keyword.operator.misc.rust"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": [
				"keyword.declaration.class.ruby",
				"keyword.declaration.function.ruby"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "markup.italic",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": "markup.bold",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"scope": "markup.heading",
			"settings": {
				"foreground": "#FCE566"
			}
		},
		{
			"scope": "markup.raw",
			"settings": {
				"foreground": "#FD9353"
			}
		},
		{
			"scope": "markup.underline",
			"settings": {
				"fontStyle": "underline"
			}
		},
		{
			"scope": "markup.underline.link",
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": [
				"markup.inserted",
				"markup.inserted punctuation.definition.inserted"
			],
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": [
				"markup.deleted",
				"markup.deleted punctuation.definition.deleted"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": [
				"markup.changed",
				"markup.changed punctuation.definition.changed"
			],
			"settings": {
				"foreground": "#FCE566"
			}
		},
		{
			"scope": [
				"markup.ignored",
				"markup.ignored punctuation.definition.ignored"
			],
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": "markup.untracked",
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": "markup.quote",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": [
				"meta.brace.round",
				"meta.brace.square",
				"meta.brace.curly",
				"meta.delimiter.comma.js",
				"meta.function-call.without-arguments.js",
				"meta.function-call.method.without-arguments.js"
			],
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": [
				"meta.function-call.generic.python",
				"support.function.builtin.python"
			],
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": "meta.function-call.python meta.function-call.arguments.python",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "meta.instance.constructor",
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": [
				"meta.attribute-with-value.class string",
				"meta.attribute.class.html string"
			],
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": [
				"meta.attribute-with-value.id string",
				"meta.attribute.id.html string"
			],
			"settings": {
				"foreground": "#FD9353"
			}
		},
		{
			"scope": [
				"source.json meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string"
			],
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": [
				"source.json meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string"
			],
			"settings": {
				"foreground": "#FCE566"
			}
		},
		{
			"scope": "meta.object.member",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "meta.property-list.css variable.other",
			"settings": {
				"foreground": "#FD9353"
			}
		},
		{
			"scope": [
				"entity.name.constant.preprocessor",
				"meta.preprocessor"
			],
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "meta.diff.git-diff.header",
			"settings": {
				"foreground": "#FCE566"
			}
		},
		{
			"scope": "meta.type_params.rust",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": [
				"meta.attribute.rust",
				"meta.annotation.rust",
				"variable.language.rust",
				"variable.annotation.rust",
				"meta.annotation.rust string",
				"meta.annotation.rust keyword",
				"meta.annotation.rust keyword.operator",
				"meta.attribute.rust string"
			],
			"settings": {
				"foreground": "#BAB6C0"
			}
		},
		{
			"scope": "punctuation",
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": [
				"punctuation.definition.tag",
				"punctuation.definition.tag source",
				"punctuation.definition.group.begin.ruby",
				"punctuation.definition.group.end.ruby",
				"punctuation.definition.group.begin.css",
				"punctuation.definition.group.end.css",
				"punctuation.definition.string.end.html source.css"
			],
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": "punctuation.definition.group",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "punctuation.definition.comment",
			"settings": {
				"foreground": "#69676C"
			}
		},
		{
			"scope": [
				"punctuation.definition.variable",
				"punctuation.definition.keyword.scss",
				"punctuation.definition.entity.css"
			],
			"settings": {
				"foreground": "#BAB6C0"
			}
		},
		{
			"scope": [
				"punctuation.section.embedded",
				"punctuation.section.embedded entity.name.tag",
				"punctuation.section.embedded constant.other",
				"punctuation.section.embedded source",
				"punctuation.section.embedded.begin"
			],
			"settings": {
				"foreground": "#FD9353"
			}
		},
		{
			"scope": [
				"punctuation.template-string.element.begin",
				"punctuation.template-string.element.end",
				"punctuation.definition.string.template.begin",
				"punctuation.definition.string.template.end",
				"string.quoted.template punctuation.definition.string.begin",
				"string.quoted.template punctuation.definition.string.end",
				"punctuation.definition.template-expression.begin",
				"punctuation.definition.template-expression.end"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": [
				"meta.paragraph.markdown meta.dummy.line-break",
				"meta.paragraph.markdown meta.hard-line-break.markdown"
			],
			"settings": {
				"background": "#948AE3"
			}
		},
		{
			"scope": "region.redish",
			"settings": {
				"foreground": "#FC618D",
				"background": "#FC618D59"
			}
		},
		{
			"scope": "region.orangish",
			"settings": {
				"foreground": "#FD9353",
				"background": "#FD935359"
			}
		},
		{
			"scope": "region.yellowish",
			"settings": {
				"foreground": "#FCE566",
				"background": "#FCE56659"
			}
		},
		{
			"scope": "region.greenish",
			"settings": {
				"foreground": "#7BD88F",
				"background": "#7BD88F59"
			}
		},
		{
			"scope": "region.bluish",
			"settings": {
				"foreground": "#5AD4E6",
				"background": "#5AD4E659"
			}
		},
		{
			"scope": "region.purplish",
			"settings": {
				"foreground": "#948AE3",
				"background": "#948AE359"
			}
		},
		{
			"scope": "region.pinkish",
			"settings": {
				"foreground": "#FC618D",
				"background": "#FC618D59"
			}
		},
		{
			"scope": "region.whitish",
			"settings": {
				"foreground": "#FFFFFF"
			}
		},
		{
			"scope": "source",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": [
				"source.scss",
				"source.sass"
			],
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": [
				"source.sass variable.other",
				"source.sass variable.sass",
				"source.scss variable.other",
				"source.scss variable.scss",
				"source.scss variable.sass",
				"source.css variable.other",
				"source.css variable.scss",
				"source.less variable.other",
				"source.less variable.other.less",
				"source.less variable.declaration.less"
			],
			"settings": {
				"foreground": "#FD9353",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": "source.git-show.commit.sha",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": [
				"source.git-show.author",
				"source.git-show.date",
				"source.git-diff.command",
				"source.git-diff.command meta.diff.git-diff.header.from-file",
				"source.git-diff.command meta.diff.git-diff.header.to-file"
			],
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": [
				"source.git-show meta.diff.git-diff.header.extended.index.from-sha",
				"source.git-show meta.diff.git-diff.header.extended.index.to-sha"
			],
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "source.git-show meta.diff.range.unified",
			"settings": {
				"foreground": "#FD9353"
			}
		},
		{
			"scope": [
				"source.git-show meta.diff.header.from-file",
				"source.git-show meta.diff.header.to-file"
			],
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": "storage",
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "storage.type",
			"settings": {
				"foreground": "#5AD4E6",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": "storage.type.extends",
			"settings": {
				"foreground": "#FC618D",
				"fontStyle": "normal"
			}
		},
		{
			"scope": "storage.type.function.arrow",
			"settings": {
				"foreground": "#FC618D",
				"fontStyle": "normal"
			}
		},
		{
			"scope": [
				"storage.modifier",
				"storage.type.modifier"
			],
			"settings": {
				"foreground": "#FC618D",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": "storage.class.restructuredtext.ref",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": [
				"storage.modifier.visibility.rust",
				"storage.modifier.lifetime.rust"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": [
				"storage.modifier.const.rust",
				"storage.modifier.dyn.rust",
				"storage.modifier.mut.rust",
				"storage.modifier.static.rust",
				"storage.type.rust",
				"storage.type.core.rust",
				"storage.class.std.rust"
			],
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": [
				"storage.type.rust",
				"storage.modifier.const.rust",
				"storage.modifier.dyn.rust",
				"storage.modifier.mut.rust",
				"storage.modifier.static.rust",
				"keyword.other.rust",
				"keyword.other.where.rust"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "string",
			"settings": {
				"foreground": "#FCE566"
			}
		},
		{
			"scope": "string.unquoted.label",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "string source",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": [
				"string source punctuation.section.embedded",
				"string punctuation.definition.string source"
			],
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": [
				"string.other.link.title",
				"string.other.link.description"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "string.other.link.description.title",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": [
				"string.regexp punctuation.definition.string.begin",
				"string.regexp punctuation.definition.string.end"
			],
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": [
				"string.other.ref",
				"string.other.restructuredtext.ref"
			],
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": "string.other.git-status.help.key",
			"settings": {
				"foreground": "#BAB6C0"
			}
		},
		{
			"scope": "string.other.git-status.remote",
			"settings": {
				"foreground": "#FC618D"
			}
		},
		{
			"scope": "support.constant",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "support.constant.handlebars",
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": "support.type.vendor-prefix.css",
			"settings": {
				"foreground": "#BAB6C0"
			}
		},
		{
			"scope": "support.function",
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": "support.function.delimiter.elm",
			"settings": {
				"foreground": "#8B888F"
			}
		},
		{
			"scope": [
				"support.type",
				"entity.name.type.object.console"
			],
			"settings": {
				"foreground": "#5AD4E6",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": "support.variable",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "support.type.property-name",
			"settings": {
				"foreground": "#F7F1FF",
				"fontStyle": "normal"
			}
		},
		{
			"scope": "support.class",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "support.constant.core.rust",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "text",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "text.find-in-files",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": [
				"variable",
				"variable.other"
			],
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": [
				"variable.parameter",
				"parameters variable.function"
			],
			"settings": {
				"foreground": "#FD9353",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": [
				"variable.language",
				"variable.parameter.function.language.special.self.python",
				"variable.parameter.function.language.special.cls.python"
			],
			"settings": {
				"foreground": "#BAB6C0",
				//"fontStyle": "italic"
			}
		},
		{
			"scope": "variable.language.arguments",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "variable.other.class",
			"settings": {
				"foreground": "#5AD4E6"
			}
		},
		{
			"scope": "variable.other.constant",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "variable.other.readwrite",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "variable.other.member",
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "variable.other.enummember",
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": [
				"variable.other.property",
				"variable.other.property.static",
				"variable.other.event"
			],
			"settings": {
				"foreground": "#F7F1FF"
			}
		},
		{
			"scope": "variable.function",
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": "variable.other.substitution",
			"settings": {
				"foreground": "#FD9353"
			}
		},
		{
			"scope": [
				"source.ruby variable.other.readwrite.instance.ruby",
				"source.ruby variable.other.readwrite.class.ruby"
			],
			"settings": {
				"foreground": "#948AE3"
			}
		},
		{
			"scope": "source.jinja2 variable.other.jinja2.block",
			"settings": {
				"foreground": "#7BD88F"
			}
		},
		{
			"scope": "source.jinja2 variable.other.jinja2",
			"settings": {
				"foreground": "#FD9353"
			}
		},
		{
			"scope": "token.info-token",
			"settings": {
				"foreground": "#6796E6"
			}
		},
		{
			"scope": "token.warn-token",
			"settings": {
				"foreground": "#CD9731"
			}
		},
		{
			"scope": "token.error-token",
			"settings": {
				"foreground": "#F44747"
			}
		},
		{
			"scope": "token.debug-token",
			"settings": {
				"foreground": "#B267E6"
			}
		}
	]
};

jsonScopes.forEach(scope => {
  template['tokenColors'].push(scope);
})


module.exports = template;
