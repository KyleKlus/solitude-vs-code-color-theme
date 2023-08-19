const chroma = require("chroma-js");
const getColors = require("./colors/colors");

function getTheme({ theme, name }) {
	const themes = (options) => options[theme];
	const rawColors = getColors(theme);
	const color = changeColorToHexAlphas(rawColors);

	const onlyDark = (color) => {
		return themes({
			redDark: color,
			redDarker: color,
			blueDark: color,
			blueDarker: color,
			greenDark: color,
			greenDarker: color,
		});
	};

	const lightDark = (light, dark) => {
		return themes({
			light: light,
			redDark: dark,
			redDarker: dark,
			blueDark: dark,
			blueDarker: dark,
			greenDark: dark,
			greenDarker: dark,
		});
	};

	const alpha = (color, alpha) => {
		return chroma(color).alpha(alpha).hex();
	};

	const darken = (color, amount) => {
		return chroma(color).darken(amount).hex();
	};

	const lighten = (color, amount) => {
		return chroma(color).lighten(amount).hex();
	};

	return {
		name: name,
		colors: {
			// ActivityBar
			"activityBar.background": color.surface.darker,
			"activityBar.foreground": color.text.normal,
			"activityBar.inactiveForeground": color.text.muted,
			"activityBar.border": color.border.dark,
			"activityBar.dropBorder": color.accent.dark,
			"activityBar.activeBorder": color.accent.base,
			"activityBar.activeFocusBorder": color.accent.base,
			// "activityBar.activeBackground": color.accent.base,
			// ActivityBar Badge
			"activityBarBadge.background": color.accent.dark,
			"activityBarBadge.foreground": color.text.normal,
			// Badge
			"badge.background": color.accent.dark,
			"badge.foreground": color.text.normal,
			// Breadcrumbs
			"breadcrumb.activeSelectionForeground": color.accent.scale[2],
			"breadcrumb.background": color.surface.darker,
			"breadcrumb.focusForeground": color.accent.scale[2],
			"breadcrumb.foreground": color.text.normal,
			"breadcrumbPicker.background": color.surface.darker,
			// Buttons
			"button.background": color.accent.base,
			"button.border": color.border.dark,
			// Checkbox
			"checkbox.border": color.border.dark,
			"checkbox.selectBorder": color.accent.base,
			// Command center
			"commandCenter.border": color.border.dark,
			// Contrast Border
			// contrastActiveBorder: "#be13d5",
			contrastBorder: color.border.dark,
			// Dropdown
			"dropdown.border": color.border.dark,
			"dropdown.background": color.surface.dark,
			"dropdown.border": color.border.dark,
			// Debug
			"debugToolBar.border": color.border.dark,
			"debugToolBar.background": color.surface.base,
			"debugExceptionWidget.border": color.border.dark,
			// Diff editor
			"diffEditor.border": color.border.dark,
			// EditorGroup
			"editorGroupHeader.tabsBorder": color.border.dark,
			"editorGroup.border": color.border.dark,
			"editorGroup.focusedEmptyBorder": color.border.dark,
			"editorGroup.dropIntoPromptBorder": color.border.dark,
			"editorGroupHeader.tabsBackground": color.surface.dark,
			// Editor
			"editor.background": color.surface.darker,
			"editor.findMatchBackground": alpha(color.lightBlue.base, 0.05),
			"editor.findMatchBorder": alpha(color.lightBlue.base, 0.35),
			"editor.findMatchHighlightBackground": alpha(
				color.lightBlue.base,
				0.3
			),
			"editor.findMatchHighlightBorder": color.transparent,
			"editor.foreground": color.text.normal,
			"editor.lineHighlightBackground": darken(
				color.surface.darker,
				0.08
			),
			"editor.selectionBackground": alpha(color.lightBlue.base, 0.1),
			"editor.selectionHighlightBackground": alpha(
				color.lightBlue.base,
				0.25
			),
			"editor.selectionHighlightBorder": color.transparent,
			"editorCursor.foreground": color.accent.base,
			"editorError.foreground": color.red.base,
			"editorHoverWidget.background": color.surface.darker,
			"editorHoverWidget.border": color.border.dark,
			"editorIndentGuide.activeBackground1": color.accent.base,
			"editorIndentGuide.background1": color.border.dark,
			"editorInfo.foreground": color.blue.base,
			"editorLink.activeForeground": color.text.normal,
			"editorLineNumber.foreground": color.text.muted,
			"editorLineNumber.activeForeground": color.text.normal,
			"editorLineNumber.dimmedForeground": color.text.disabled,
			"editorMarkerNavigation.background": color.surface.dark,
			"editorOverviewRuler.border": color.border.dark,
			"editorOverviewRuler.findMatchForeground": color.accent.base,
			"editorOverviewRuler.errorForeground": color.red.base,
			"editorOverviewRuler.warningForeground": color.orange.base,
			"editorOverviewRuler.infoForeground": color.blue.base,
			"editorRuler.foreground": color.surface.dark,
			"editorSuggestWidget.background": color.surface.dark,
			"editorSuggestWidget.border": color.border.dark,
			"editorSuggestWidget.foreground": color.text.normal,
			"editorSuggestWidget.highlightForeground": color.blue.base,
			"editorSuggestWidget.focusHighlightForeground": color.blue.scale[1],
			"editorSuggestWidget.selectedBackground": color.accent.transparent,
			"editorSuggestWidget.selectedForeground": color.text.normal,
			"editorWarning.foreground": color.orange.base,
			"editorWhitespace.foreground": color.grey.base,
			"editorWidget.background": color.surface.dark,
			"editorWidget.border": color.border.dark,
			"editorWidget.resizeBorder": color.border.light,
			// ExtensionButton
			"extensionButton.prominentBackground": color.accent.base,
			"extensionButton.prominentHoverBackground": color.accent.scale[1],
			// Focus border
			focusBorder: color.border.dark,
			// Input
			"input.background": color.surface.lighter,
			"input.border": color.border.dark,
			"input.foreground": color.text.normal,
			"input.placeholderForeground": color.text.muted,
			"inputOption.activeBackground": color.surface.light,
			"inputOption.activeBorder": color.accent.base,
			"input.border": color.border.dark,
			"inputValidation.errorBorder": color.red.base,
			"inputValidation.warningBorder": color.orange.base,
			"inputValidation.infoBorder": color.blue.base,
			"inlineChat.shadow": color.shadow,
			// Keybindings
			"keybindingLabel.border": color.border.dark,
			"keybindingLabel.bottomBorder": darken(color.black.base, 0.8),
			// List
			"list.activeSelectionBackground": color.surface.lighter,
			"list.activeSelectionForeground": color.text.normal,
			"list.focusBackground": color.surface.lighter,
			"list.focusForeground": color.accent.scale[2],
			"list.filterMatchBorder": color.border.dark,
			"list.highlightForeground": color.accent.base,
			"list.hoverBackground": color.surface.darkerTransparent,
			"list.hoverForeground": color.text.normal,
			"list.inactiveSelectionBackground": color.surface.darkTransparent,
			"list.inactiveSelectionForeground": color.text.normal,
			"list.warningForeground": color.orange.base,
			"list.infoForeground": color.blue.base,
			"list.errorForeground": color.red.base,
			"listFilterWidget.background": color.surface.darkTransparent,
			"listFilterWidget.noMatchesOutline": color.surface.darkTransparent,
			"listFilterWidget.outline": color.surface.darkTransparent,
			"listFilterWidget.shadow": color.shadow,
			// Merge
			"merge.border": color.border.dark,
			// Menu
			"menu.background": color.surface.dark,
			"menu.border": color.border.dark,
			"menu.foreground": color.text.normal,
			"menu.selectionBackground": color.surface.darker,
			"menu.selectionBorder": color.border.dark,
			"menu.selectionForeground": color.text.normal,
			"menu.separatorBackground": color.border.dark,
			// Menubar
			"menubar.selectionBackground": color.surface.dark,
			"menubar.selectionBorder": color.border.dark,
			"menubar.selectionForeground": color.text.normal,
			// Minimap
			"minimap.background": color.surface.darker,
			// Notebook
			// "notebook.cellBorderColor": color.border.dark,
			// "notebook.outputContainerBorderColor": "#be13d5",
			// "notebook.selectedCellBorder": color.accent.base,
			// "notebook.inactiveSelectedCellBorder": color.border.dark,
			// Notifications
			"notifications.border": color.border.dark,
			"notificationToast.border": color.border.dark,
			"notificationCenter.border": color.border.dark,
			"notificationLink.foreground": color.accent.base,
			"notifications.background": color.surface.dark,
			"notifications.foreground": color.text.normal,
			// Panel
			"panel.dropBorder": color.border.dark,
			"panelInput.border": color.border.dark,
			"panelSection.border": color.border.dark,
			"panelSectionHeader.border": color.border.dark,
			"panel.background": color.surface.dark,
			"panel.border": color.border.dark,
			"panelTitle.activeBorder": color.accent.base,
			"panelTitle.activeForeground": color.text.normal,
			"panelTitle.inactiveForeground": color.text.normal,
			// Peekview
			"peekView.border": color.border.dark,
			"peekViewEditor.background": color.surface.dark,
			"peekViewEditor.matchHighlightBackground": color.accent.base,
			"peekViewEditorGutter.background": color.surface.darker,
			"peekViewResult.background": color.surface.dark,
			"peekViewResult.matchHighlightBackground": color.accent.base,
			"peekViewResult.selectionBackground": color.accent.base,
			"peekViewTitle.background": color.surface.dark,
			"peekViewTitleDescription.foreground": color.grey.base,
			// Pickergroup
			"pickerGroup.foreground": color.accent.base,
			"pickerGroup.border": color.border.dark,
			// Progressbar
			"progressBar.background": color.accent.base,
			// Profiles
			"profileBadge.background": color.surface.dark,
			"profileBadge.foreground": color.text.muted,
			// Sash
			"sash.hoverBorder": color.accent.base,
			// SCM
			"scm.providerBorder": color.border.dark,
			// Scrollbar
			"scrollbar.shadow": color.shadow,
			"scrollbarSlider.activeBackground": alpha(color.grey.base, 0.3),
			"scrollbarSlider.background": alpha(color.grey.base, 0.3),
			"scrollbarSlider.hoverBackground": alpha(color.grey.base, 0.3),
			// Selection
			"selection.background": color.accent.base,
			// Settings
			"settings.checkboxBackground": color.surface.dark,
			"settings.checkboxForeground": color.text.normal,
			"settings.dropdownBackground": color.surface.dark,
			"settings.dropdownForeground": color.text.normal,
			"settings.headerForeground": color.accent.base,
			"settings.modifiedItemIndicator": color.accent.base,
			"settings.numberInputBackground": color.surface.dark,
			"settings.numberInputForeground": color.text.normal,
			"settings.textInputBackground": color.surface.dark,
			"settings.textInputForeground": color.text.normal,
			"settings.dropdownBorder": color.border.dark,
			"settings.dropdownListBorder": color.border.dark,
			"settings.checkboxBorder": color.border.dark,
			"settings.textInputBorder": color.border.dark,
			"settings.numberInputBorder": color.border.dark,
			"settings.focusedRowBorder": color.border.dark,
			"settings.sashBorder": color.accent.base,
			"settings.headerBorder": color.border.dark,
			// Sidebar
			"sideBar.background": color.surface.dark,
			"sideBar.border": color.border.dark,
			"sideBar.foreground": color.text.normal,
			// "sideBar.dropBackground":color.surface.lighterTransparent,
			"sideBarSectionHeader.background": color.surface.dark,
			"sideBarSectionHeader.border": color.border.dark,
			"sideBarSectionHeader.foreground": color.text.normal,
			"sideBarTitle.foreground": color.text.normal,
			// Sideby side
			"sideBySideEditor.horizontalBorder": color.border.dark,
			"sideBySideEditor.verticalBorder": color.border.dark,
			// Statusbar
			"statusBar.background": color.accent.dark,
			"statusBar.foreground": color.text.normal,
			"statusBar.border": color.border.dark,
			"statusBar.debuggingBackground": color.darkGreen.base,
			"statusBar.debuggingForeground": color.text.normal,
			"statusBar.noFolderForeground": color.text.normal,
			"statusBar.noFolderBorder": color.border.dark,
			"statusBar.noFolderBackground": color.accent.base,
			"statusBarItem.hoverBackground": color.accent.base,
			"statusBarItem.remoteBackground": color.accent.dark,
			"statusBarItem.remoteForeground": color.text.normal,
			"statusBarItem.errorBackground": color.red.base,
			"statusBarItem.errorForeground": color.text.normal,
			"statusBarItem.warningBackground": color.orange.base,
			"statusBarItem.compactHoverBackground": color.accent.scale[1],
			// "statusBarItem.activeBackground": color.accent.dark,
			// "statusBarItem.prominentForeground": color.text.normal,
			// "statusBarItem.prominentBackground": color.text.normal,
			// "statusBarItem.prominentHoverBackground": color.text.normal,
			// "statusBarItem.focusBorder": color.text.normal,
			// "statusBarItem.offlineBackground": color.text.normal,
			// "statusBarItem.offlineForeground": color.text.normal,

			// Textblocks
			"textBlockQuote.border": color.border.dark,
			// Tabs
			// "tab.activeBorder": color.accent.base,
			// "tab.activeBackground":  color.accent.base,
			"tab.activeForeground": color.text.normal,
			"tab.activeModifiedBorder": color.accent.base,
			"tab.border": color.border.dark,
			"tab.inactiveBackground": color.surface.dark,
			"tab.inactiveForeground": color.grey.base,
			"tab.activeBorderTop": color.accent.base,
			"tab.lastPinnedBorder": color.border.dark,
			"tab.hoverBorder": alpha(color.accent.base, 0.3),
			"tab.unfocusedActiveBorder": color.surface.dark,
			"tab.unfocusedActiveBackground": color.transparent,
			"tab.unfocusedActiveForeground": color.text.normal,
			"tab.unfocusedInactiveBackground": color.transparent,
			"tab.unfocusedInactiveForeground": color.grey.base,
			// Terminal
			"terminalCursor.foreground": color.accent.base,
			"terminal.border": color.border.dark,
			// Testing
			"testing.peekBorder": color.border.dark,
			// Text Link
			"textLink.activeForeground": color.text.normal,
			"textLink.foreground": color.accent.base,
			// Titlebar
			"titleBar.activeBackground": color.surface.darker,
			"titleBar.activeForeground": color.text.normal,
			"titleBar.border": color.border.dark,
			"titleBar.inactiveBackground": color.surface.dark,
			"titleBar.inactiveForeground": color.text.muted,
			// Tree
			"tree.indentGuidesStroke": color.accent.base,
			"tree.tableColumnsBorder": color.border.dark,
			// Widget
			"widget.shadow": color.shadow,
			"widget.border": color.border.base,
			// Window
			// "window.activeBorder": "#be13d5",
			// "window.inactiveBorder": "#be13d5",
			// Welcomepage
			"welcomePage.tileBorder": color.border.dark,
		},
		semanticHighlighting: true,
		semanticTokenColors: {
			enumMember: {
				foreground: color.cyan.base,
			},
			"variable.constant": {
				foreground: color.lightRed.base,
			},
			"variable.defaultLibrary": {
				foreground: color.lightYellow.base,
			},
			"variable:dart": {
				foreground: color.lightRed.base,
			},
			"property:dart": {
				foreground: color.lightRed.base,
			},
			"annotation:dart": {
				foreground: color.lightRed.base,
			},
			"parameter.label:dart": {
				foreground: color.lightGrey.base,
			},
			macro: {
				foreground: color.lightRed.base,
			},
		},
		tokenColors: [
			{
				scope: "meta.embedded",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "unison punctuation",
				scope: "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "haskell variable generic-type",
				scope: "variable.other.generic-type.haskell",
				settings: {
					foreground: color.lightOrange.base,
				},
			},
			{
				name: "haskell storage type",
				scope: "storage.type.haskell",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "support.variable.magic.python",
				scope: "support.variable.magic.python",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "punctuation.separator.parameters.python",
				scope: "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "variable.parameter.function.language.special.self.python",
				scope: "variable.parameter.function.language.special.self.python",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "variable.parameter.function.language.special.cls.python",
				scope: "variable.parameter.function.language.special.cls.python",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "storage.modifier.lifetime.rust",
				scope: "storage.modifier.lifetime.rust",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "support.function.std.rust",
				scope: "support.function.std.rust",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "entity.name.lifetime.rust",
				scope: "entity.name.lifetime.rust",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "variable.language.rust",
				scope: "variable.language.rust",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "support.constant.edge",
				scope: "support.constant.edge",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "regexp constant character-class",
				scope: "constant.other.character-class.regexp",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "keyword.operator",
				scope: ["keyword.operator.word"],
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "regexp operator.quantifier",
				scope: "keyword.operator.quantifier.regexp",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Text",
				scope: "variable.parameter.function",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Comment Markup Link",
				scope: "comment markup.link",
				settings: {
					foreground: color.grey.base,
				},
			},
			{
				name: "markup diff",
				scope: "markup.changed.diff",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "diff",
				scope: "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "inserted.diff",
				scope: "markup.inserted.diff",
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "deleted.diff",
				scope: "markup.deleted.diff",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "c++ function",
				scope: "meta.function.c,meta.function.cpp",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "c++ block",
				scope: "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "js/ts punctuation separator key-value",
				scope: "punctuation.separator.key-value",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "js/ts import keyword",
				scope: "keyword.operator.expression.import",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "math js/ts",
				scope: "support.constant.math",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "math property js/ts",
				scope: "support.constant.property.math",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "js/ts variable.other.constant",
				scope: "variable.other.constant",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "java type",
				scope: [
					"storage.type.annotation.java",
					"storage.type.object.array.java",
				],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "java source",
				scope: "source.java",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "java modifier.import",
				scope: "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "java modifier.import",
				scope: "meta.method.java",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "java modifier.import",
				scope: "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "java instanceof",
				scope: "keyword.operator.instanceof.java",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "java variable.name",
				scope: "meta.definition.variable.name.java",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "operator logical",
				scope: "keyword.operator.logical",
				settings: {
					foreground: color.lightBlue.base,
				},
			},
			{
				name: "operator bitwise",
				scope: "keyword.operator.bitwise",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "operator channel",
				scope: "keyword.operator.channel",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "support.constant.property-value.scss",
				scope: "support.constant.property-value.scss,support.constant.property-value.css",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "CSS/SCSS/LESS Operators",
				scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "css color standard name",
				scope: "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "css variables",
				scope: "variable.scss,meta.property-value.scss,meta.property-list.scss,meta.property-list.scss,source.css.scss",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "css comma",
				scope: "punctuation.separator.list.comma.css",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "css attribute-name.id",
				scope: "support.constant.color.w3c-standard-color-name.css",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "css property-name",
				scope: "support.type.property-name.css,meta.property-name.scss,meta.property-list.scss,meta.property-list.scss",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "css attribute / pseudo class",
				scope: "entity.other.attribute-name.pseudo-class.css,entity.other.attribute-name.pseudo-element.css",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "js/ts module",
				scope: "support.module.node,support.type.object.module,support.module.node",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "entity.name.type.module",
				scope: "entity.name.type.module",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "js variable readwrite",
				scope: "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "js/ts json",
				scope: "support.constant.json",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "js/ts Keyword",
				scope: [
					"keyword.operator.expression.instanceof",
					"keyword.operator.new",
					"keyword.operator.ternary",
					"keyword.operator.optional",
					"keyword.operator.expression.keyof",
				],
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "js/ts console",
				scope: "support.type.object.console",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "js/ts support.variable.property.process",
				scope: "support.variable.property.process",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "js console function",
				scope: "entity.name.function,support.function.console",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "keyword.operator.misc.rust",
				scope: "keyword.operator.misc.rust",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "keyword.operator.sigil.rust",
				scope: "keyword.operator.sigil.rust",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "operator",
				scope: "keyword.operator.delete",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "js dom",
				scope: "support.type.object.dom",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "js dom variable",
				scope: "support.variable.dom,support.variable.property.dom",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "keyword.operator",
				scope: "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "C operator assignment",
				scope: "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Punctuation",
				scope: "punctuation.separator.delimiter",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Other punctuation .c",
				scope: "punctuation.separator.c,punctuation.separator.cpp",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "C type posix-reserved",
				scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "keyword.operator.sizeof.c",
				scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "python parameter",
				scope: "variable.parameter.function.language.python",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "python type",
				scope: "support.type.python",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "python logical",
				scope: "keyword.operator.logical.python",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "pyCs",
				scope: "variable.parameter.function.python",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "python block",
				scope: "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "python function-call.generic",
				scope: "meta.function-call.generic.python",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "python placeholder reset to normal string",
				scope: "constant.character.format.placeholder.other.python",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Operators",
				scope: "keyword.operator",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Compound Assignment Operators",
				scope: "keyword.operator.assignment.compound",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Compound Assignment Operators js/ts",
				scope: "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "Keywords",
				scope: "keyword",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Namespaces",
				scope: "entity.name.namespace",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Variables",
				scope: "variable",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Variables",
				scope: "variable.c",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Language variables",
				scope: "variable.language",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Java Variables",
				scope: "token.variable.parameter.java",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Java Imports",
				scope: "import.storage.java",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Packages",
				scope: "token.package.keyword",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Packages",
				scope: "token.package",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Functions",
				scope: [
					"entity.name.function",
					"meta.require",
					"support.function.any-method",
					"variable.function",
				],
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "Classes",
				scope: "entity.name.type.namespace",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Classes",
				scope: "support.class, entity.name.type.class",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Class name",
				scope: "entity.name.class.identifier.namespace.type",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Class name",
				scope: [
					"entity.name.class",
					"variable.other.class.js",
					"variable.other.class.ts",
				],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Class name php",
				scope: "variable.other.class.php",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Type Name",
				scope: "entity.name.type",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Keyword Control",
				scope: "keyword.control",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Control Elements",
				scope: "control.elements, keyword.operator.less",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Methods",
				scope: "keyword.other.special-method",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "Storage",
				scope: "storage",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Storage JS TS",
				scope: "token.storage",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
				scope: "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Java Storage",
				scope: "token.storage.type.java",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Support",
				scope: "support.function",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "Support type",
				scope: "support.type.property-name",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Support type",
				scope: "support.constant.property-value",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Support type",
				scope: "support.constant.font-name",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Meta tag",
				scope: "meta.tag",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Strings",
				scope: "string",
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "Constant other symbol",
				scope: "constant.other.symbol",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "Integers",
				scope: "constant.numeric",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Constants",
				scope: "constant",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Constants",
				scope: "punctuation.definition.constant",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Tags",
				scope: "entity.name.tag",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Attributes",
				scope: "entity.other.attribute-name",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Attribute IDs",
				scope: "entity.other.attribute-name.id",
				settings: {
					fontStyle: "",
					foreground: color.blue.base,
				},
			},
			{
				name: "Attribute class",
				scope: "entity.other.attribute-name.class.css",
				settings: {
					fontStyle: "",
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Selector",
				scope: "meta.selector",
				settings: {
					foreground: color.accent.base,
				},
			},
			{
				name: "Headings",
				scope: "markup.heading",
				settings: {
					foreground: color.blue.base,
					fontStyle: "bold",
				},
			},
			{
				name: "Headings",
				scope: "markup.heading punctuation.definition.heading, entity.name.section",
				settings: {
					foreground: color.blue.base,
					fontStyle: "bold",
				},
			},
			{
				name: "Units",
				scope: "keyword.other.unit",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Bold",
				scope: "markup.bold,todo.bold",
				settings: {
					foreground: color.lightRed.base,
					fontStyle: "bold",
				},
			},
			{
				name: "Bold",
				scope: "punctuation.definition.bold",
				settings: {
					foreground: color.lightYellow.base,
					fontStyle: "bold",
				},
			},
			{
				name: "markup Italic",
				scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
				settings: {
					foreground: color.lightMagenta.base,
					fontStyle: "italic",
				},
			},
			{
				name: "emphasis md",
				scope: "emphasis md",
				settings: {
					foreground: color.lightMagenta.base,
					fontStyle: "italic",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown headings",
				scope: "entity.name.section.markdown",
				settings: {
					foreground: color.blue.base,
					fontStyle: "bold",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
				scope: "punctuation.definition.heading.markdown",
				settings: {
					foreground: color.blue.base,
					fontStyle: "bold",
				},
			},
			{
				name: "punctuation.definition.list.begin.markdown",
				scope: "punctuation.definition.list.begin.markdown",
				settings: {
					foreground: color.blue.base,
					fontStyle: "bold",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown heading setext",
				scope: "markup.heading.setext",
				settings: {
					foreground: color.lightGrey.base,
					fontStyle: "bold",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
				scope: "punctuation.definition.bold.markdown",
				settings: {
					foreground: color.lightRed.base,
					fontStyle: "bold",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Inline Raw",
				scope: "markup.inline.raw.markdown",
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Inline Raw",
				scope: "markup.inline.raw.string.markdown",
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Inline Raw punctuation",
				scope: "punctuation.definition.raw.markdown",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
				scope: "punctuation.definition.list.markdown",
				settings: {
					foreground: color.blue.base,
					fontStyle: "bold",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
				scope: [
					"punctuation.definition.string.begin.markdown",
					"punctuation.definition.string.end.markdown",
					"punctuation.definition.metadata.markdown",
				],
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "beginning.punctuation.definition.list.markdown",
				scope: ["beginning.punctuation.definition.list.markdown"],
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
				scope: "punctuation.definition.metadata.markdown",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
				scope: "markup.underline.link.markdown,markup.underline.link.image.markdown",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
				scope: "string.other.link.title.markdown,string.other.link.description.markdown",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc Inline Raw",
				scope: "markup.raw.monospace.asciidoc",
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",
				scope: "punctuation.definition.asciidoc",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",
				scope: "markup.list.asciidoc",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc underline link",
				scope: "markup.link.asciidoc,markup.other.url.asciidoc",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc link name",
				scope: "string.unquoted.asciidoc,markup.other.url.asciidoc",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "Regular Expressions",
				scope: "string.regexp",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "Embedded",
				scope: "punctuation.section.embedded, variable.interpolation",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Embedded",
				scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "illegal",
				scope: "invalid.illegal",
				settings: {
					foreground: color.white.base,
				},
			},
			{
				name: "illegal",
				scope: "invalid.illegal.bad-ampersand.html",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				scope: "invalid.illegal.unrecognized-tag.html",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Broken",
				scope: "invalid.broken",
				settings: {
					foreground: color.white.base,
				},
			},
			{
				name: "Deprecated",
				scope: "invalid.deprecated",
				settings: {
					foreground: color.white.base,
				},
			},
			{
				name: "html Deprecated",
				scope: "invalid.deprecated.entity.other.attribute-name.html",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "Unimplemented",
				scope: "invalid.unimplemented",
				settings: {
					foreground: color.white.base,
				},
			},
			{
				name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
				scope: "source.json meta.structure.dictionary.json > string.quoted.json",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
				scope: "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
				scope: "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
				scope: "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] JSON Property Name",
				scope: "support.type.property-name.json",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
				scope: "support.type.property-name.json punctuation",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "laravel blade tag",
				scope: "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "laravel blade @",
				scope: "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "use statement for other classes",
				scope: "support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "error suppression",
				scope: "keyword.operator.error-control.php",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "php instanceof",
				scope: "keyword.operator.type.php",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "style double quoted array index normal begin",
				scope: "punctuation.section.array.begin.php",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "style double quoted array index normal end",
				scope: "punctuation.section.array.end.php",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "php illegal.non-null-typehinted",
				scope: "invalid.illegal.non-null-typehinted.php",
				settings: {
					foreground: color.red.base,
				},
			},
			{
				name: "php types",
				scope: "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "php call-function",
				scope: "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "php function-resets",
				scope: "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "support php constants",
				scope: "support.constant.core.rust",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "support php constants",
				scope: "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "php goto",
				scope: "entity.name.goto-label.php,support.other.php",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "php logical/bitwise operator",
				scope: "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "php regexp operator",
				scope: "keyword.operator.regexp.php",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "php comparison",
				scope: "keyword.operator.comparison.php",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "php helightRedoc/nowdoc",
				scope: "keyword.operator.helightRedoc.php,keyword.operator.nowdoc.php",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "python function decorator @",
				scope: "meta.function.decorator.python",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "python function support",
				scope: "support.token.decorator.python,meta.function.decorator.identifier.python",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "parameter function js/ts",
				scope: "function.parameter",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "brace function",
				scope: "function.brace",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "parameter function ruby cs",
				scope: "function.parameter.ruby, function.parameter.cs",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "constant.language.symbol.ruby",
				scope: "constant.language.symbol.ruby",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "rgb-value",
				scope: "rgb-value",
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "rgb value",
				scope: "inline-color-decoration rgb-value",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "rgb value less",
				scope: "less rgb-value",
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "sass selector",
				scope: "selector.sass",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "ts primitive/builtin types",
				scope: "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "block scope",
				scope: "block.scope.end,block.scope.begin",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "cs storage type",
				scope: "storage.type.cs",
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "cs local variable",
				scope: "entity.name.variable.local.cs",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				scope: "token.info-token",
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				scope: "token.warn-token",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				scope: "token.error-token",
				settings: {
					foreground: color.red.base,
				},
			},
			{
				scope: "token.debug-token",
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "String interpolation",
				scope: [
					"punctuation.definition.template-expression.begin",
					"punctuation.definition.template-expression.end",
					"punctuation.section.embedded",
				],
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Reset JavaScript string interpolation expression",
				scope: ["meta.template.expression"],
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Import module JS",
				scope: ["keyword.operator.module"],
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "js Flowtype",
				scope: ["support.type.type.flowtype"],
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "js Flow",
				scope: ["support.type.primitive"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "js class prop",
				scope: ["meta.property.object"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "js func parameter",
				scope: ["variable.parameter.function.js"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "js template literals begin",
				scope: ["keyword.other.template.begin"],
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "js template literals end",
				scope: ["keyword.other.template.end"],
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "js template literals variable braces begin",
				scope: ["keyword.other.substitution.begin"],
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "js template literals variable braces end",
				scope: ["keyword.other.substitution.end"],
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "js operator.assignment",
				scope: ["keyword.operator.assignment"],
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "go operator",
				scope: ["keyword.operator.assignment.go"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "go operator",
				scope: [
					"keyword.operator.arithmetic.go",
					"keyword.operator.address.go",
				],
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "Go package name",
				scope: ["entity.name.package.go"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "elm prelude",
				scope: ["support.type.prelude.elm"],
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "elm constant",
				scope: ["support.constant.elm"],
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "template literal",
				scope: ["punctuation.quasi.element"],
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "html/pug (jade) escaped characters and entities",
				scope: ["constant.character.entity"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
				scope: [
					"entity.other.attribute-name.pseudo-element",
					"entity.other.attribute-name.pseudo-class",
				],
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "Clojure globals",
				scope: ["entity.global.clojure"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Clojure symbols",
				scope: ["meta.symbol.clojure"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Clojure constants",
				scope: ["constant.keyword.clojure"],
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "CoffeeScript Function Argument",
				scope: [
					"meta.arguments.coffee",
					"variable.parameter.function.coffee",
				],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Ini Default Text",
				scope: ["source.ini"],
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "Makefile prerequisities",
				scope: ["meta.scope.prerequisites.makefile"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Makefile text colour",
				scope: ["source.makefile"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Groovy import names",
				scope: ["storage.modifier.import.groovy"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Groovy Methods",
				scope: ["meta.method.groovy"],
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "Groovy Variables",
				scope: ["meta.definition.variable.name.groovy"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Groovy Inheritance",
				scope: ["meta.definition.class.inherited.classes.groovy"],
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "HLSL Semantic",
				scope: ["support.variable.semantic.hlsl"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "HLSL Types",
				scope: [
					"support.type.texture.hlsl",
					"support.type.sampler.hlsl",
					"support.type.object.hlsl",
					"support.type.object.rw.hlsl",
					"support.type.fx.hlsl",
					"support.type.object.hlsl",
				],
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "SQL Variables",
				scope: ["text.variable", "text.bracketed"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "types",
				scope: ["support.type.swift", "support.type.vb.asp"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "heading 1, keyword",
				scope: ["entity.name.function.xi"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "heading 2, callable",
				scope: ["entity.name.class.xi"],
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "heading 3, property",
				scope: ["constant.character.character-class.regexp.xi"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "heading 4, type, class, interface",
				scope: ["constant.regexp.xi"],
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				name: "heading 5, enums, preprocessor, constant, decorator",
				scope: ["keyword.control.xi"],
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				name: "heading 6, number",
				scope: ["invalid.xi"],
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "string",
				scope: ["beginning.punctuation.definition.quote.markdown.xi"],
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "comments",
				scope: ["beginning.punctuation.definition.list.markdown.xi"],
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "link",
				scope: ["constant.character.xi"],
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "accent",
				scope: ["accent.xi"],
				settings: {
					foreground: color.blue.base,
				},
			},
			{
				name: "wikiword",
				scope: ["wikiword.xi"],
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				name: "language operators like '+', '-' etc",
				scope: ["constant.other.color.rgb-value.xi"],
				settings: {
					foreground: color.white.base,
				},
			},
			{
				name: "elements to dim",
				scope: ["punctuation.definition.tag.xi"],
				settings: {
					foreground: color.grey.base,
				},
			},
			{
				name: "C++/C#",
				scope: [
					"entity.name.label.cs",
					"entity.name.scope-resolution.function.call",
					"entity.name.scope-resolution.function.definition",
				],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "Markdown underscore-style headers",
				scope: [
					"entity.name.label.cs",
					"markup.heading.setext.1.markdown",
					"markup.heading.setext.2.markdown",
				],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "meta.brace.square",
				scope: [" meta.brace.square"],
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Comments",
				scope: "comment, punctuation.definition.comment",
				settings: {
					foreground: color.darkGreen.base,
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Quote",
				scope: "markup.quote.markdown",
				settings: {
					foreground: color.grey.base,
				},
			},
			{
				name: "punctuation.definition.block.sequence.item.yaml",
				scope: "punctuation.definition.block.sequence.item.yaml",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				scope: [
					"constant.language.symbol.elixir",
					"constant.language.symbol.double-quoted.elixir",
				],
				settings: {
					foreground: color.cyan.base,
				},
			},
			{
				scope: ["entity.name.variable.parameter.cs"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				scope: ["entity.name.variable.field.cs"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Deleted",
				scope: "markup.deleted",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "Inserted",
				scope: "markup.inserted",
				settings: {
					foreground: color.lightGreen.base,
				},
			},
			{
				name: "Underline",
				scope: "markup.underline",
				settings: {
					fontStyle: "underline",
				},
			},
			{
				name: "punctuation.section.embedded.begin.php",
				scope: [
					"punctuation.section.embedded.begin.php",
					"punctuation.section.embedded.end.php",
				],
				settings: {
					foreground: "#BE5046",
				},
			},
			{
				name: "support.other.namespace.php",
				scope: ["support.other.namespace.php"],
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "variable.other.object",
				scope: ["variable.other.object"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "variable.other.constant.property",
				scope: ["variable.other.constant.property"],
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "entity.other.inherited-class",
				scope: ["entity.other.inherited-class"],
				settings: {
					foreground: color.lightYellow.base,
				},
			},
			{
				name: "c variable readwrite",
				scope: "variable.other.readwrite.c",
				settings: {
					foreground: color.orange.base,
				},
			},
			{
				name: "php scope",
				scope: "entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",
				settings: {
					foreground: color.lightGrey.base,
				},
			},
			{
				name: "Assembly",
				scope: ["constant.numeric.decimal.asm.x86_64"],
				settings: {
					foreground: color.lightMagenta.base,
				},
			},
			{
				scope: ["support.other.parenthesis.regexp"],
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				scope: ["constant.character.escape"],
				settings: {
					foreground: color.lightRed.base,
				},
			},
			{
				scope: ["string.regexp"],
				settings: {
					foreground: color.orange.base,
				},
			},
		],
	};
}

// Convert to hex
// VS Code doesn't support other formats like hsl, rgba etc.

function changeColorToHexAlphas(obj) {
	if (typeof obj === "object") {
		for (var keys in obj) {
			if (typeof obj[keys] === "object") {
				changeColorToHexAlphas(obj[keys]);
			} else {
				let keyValue = obj[keys];
				if (chroma.valid(keyValue)) {
					obj[keys] = chroma(keyValue).hex();
				}
			}
		}
	}
	return obj;
}

module.exports = getTheme;
