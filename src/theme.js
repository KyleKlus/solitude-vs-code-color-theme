const chroma = require("chroma-js");

const darkBaseColors = {
	accent: "#d15252",
	fg: "#cdd1d6",
	bg: "hsl(207, 13%, 12%)",
	black: "hsl(207, 13%, 8%)",
    blackBright: "#57606a",
    white: "#6e7781",
    whiteBright: "#8c959f",
    grey: "#6e7781",
    red: "#cf222e",
    redBright: "#a40e26",
    green: "#116329",
    greenBright: "#1a7f37",
    yellow: "#4d2d00",
    yellowBright: "#633c01",
    blue: "#0969da",
    blueBright: "#218bff",
    magenta: "#8250df",
    magentaBright: "#a475f9",
    cyan: "#1b7c83",
    cyanBright: "bg.scale[0]gre#3192aa"
};

const darkColors = {
	accent: {
		base: darkBaseColors.accent,
		scale: [
			chroma(darkBaseColors.accent).brighten(0.1).hex(),
			chroma(darkBaseColors.accent).brighten(0.2).hex(),
			chroma(darkBaseColors.accent).brighten(0.3).hex(),
			chroma(darkBaseColors.accent).brighten(0.4).hex(),
		],
	},
	fg: {
		base: darkBaseColors.fg,
		scale: [
			chroma(darkBaseColors.fg).brighten(0.05).hex(),
			chroma(darkBaseColors.fg).brighten(0.1).hex(),
			chroma(darkBaseColors.fg).brighten(0.15).hex(),
			chroma(darkBaseColors.fg).brighten(0.2).hex(),
		],
	},
	bg: {
		base: darkBaseColors.bg,
		scale: [
			chroma(darkBaseColors.bg).brighten(0.1).hex(),
			chroma(darkBaseColors.bg).brighten(0.2).hex(),
			chroma(darkBaseColors.bg).brighten(0.3).hex(),
			chroma(darkBaseColors.bg).brighten(0.4).hex(),
		],
	},
	black:{
		base: darkBaseColors.black,
		scale: [
			chroma(darkBaseColors.black).brighten(0.1).hex(),
			chroma(darkBaseColors.black).brighten(0.2).hex(),
			chroma(darkBaseColors.black).brighten(0.3).hex(),
			chroma(darkBaseColors.black).brighten(0.4).hex(),
		],
	},
	grey:{
		base: darkBaseColors.grey,
		scale: [
			chroma(darkBaseColors.grey).brighten(0.1).hex(),
			chroma(darkBaseColors.grey).brighten(0.2).hex(),
			chroma(darkBaseColors.grey).brighten(0.3).hex(),
			chroma(darkBaseColors.grey).brighten(0.4).hex(),
		],
	}
};

function getColors(theme) {
	switch (theme) {
		case "light":
			return darkColors;
		case "dark":
			return darkColors;
		default:
			throw new Error(`Colors are missing for value: ${theme}`);
	}
}

function getTheme({ theme, name }) {
	const themes = (options) => options[theme]; // Usage: themes({ light: "lightblue", light_high_contrast: "lightblue", light_colorblind: "lightblue", dark: "darkblue", dark_high_contrast: "darkblue", dark_colorblind: "darkblue", dark_dimmed: "royalblue" })
	const rawColors = getColors(theme);
	const color = changeColorToHexAlphas(rawColors);

	const onlyDark = (color) => {
		return themes({
			dark: color,
		});
	};

	const lightDark = (light, dark) => {
		return themes({
			light: light,
			dark: dark,
		});
	};

	const alpha = (color, alpha) => {
		return chroma(color).alpha(alpha).hex();
	};

	return {
		name: name,
		colors: {
			"activityBar.background": color.bg.base,
			"activityBar.border": color.bg.base,
			"activityBar.foreground": color.fg.base,
			"activityBarBadge.background": color.accent.scale[2],
			"activityBarBadge.foreground": color.bg.base,
			"badge.background": color.bg.base,
			"badge.foreground": color.accent.scale[2],
			"breadcrumb.activeSelectionForeground": color.accent.scale[2],
			"breadcrumb.background": color.bg.base,
			"breadcrumb.focusForeground": color.accent.scale[2],
			"breadcrumb.foreground": color.fg.base,
			"breadcrumbPicker.background": color.bg.base,
			"button.background": "#a32929b9",
			contrastBorder: "#1d262d",
			"debugToolBar.background": "#343A41",
			"dropdown.background": color.bg.scale[1],
			"dropdown.border": color.black.base,
			"editor.background": color.bg.scale[2],
			"editor.findMatchBackground": color.bg.base,
			"editor.findMatchBorder": color.bg.scale[1],
			"editor.findMatchHighlightBackground": "#a3292993",
			"editor.findMatchHighlightBorder": "#e9e9e930",
			"editor.foreground": color.fg.base,
			"editor.lineHighlightBackground": color.bg.base,
			"editor.selectionBackground": "#3b8ece30",
			"editor.selectionHighlightBackground": "#2e63a36a",
			"editor.selectionHighlightBorder": "#2e63a3f0",
			"editorCursor.foreground": "#cf0c0c",
			"editorError.foreground": "#d51313",
			"editorGroup.border": color.bg.scale[1],
			"editorGroupHeader.tabsBackground": color.bg.scale[1],
			"editorHoverWidget.background": color.bg.base,
			"editorHoverWidget.border": color.black.base,
			"editorIndentGuide.activeBackground1": "#CE3B3Bf0",
			"editorIndentGuide.background1": "#1B1E2270",
			"editorInfo.foreground": "#318f27",
			"editorLink.activeForeground": color.fg.base,
			"editorMarkerNavigation.background": "#C7C7C705",
			"editorOverviewRuler.border": color.bg.base,
			"editorOverviewRuler.errorForeground": "#d5131370",
			"editorOverviewRuler.findMatchForeground": color.accent.base,
			"editorOverviewRuler.infoForeground": "#318f2770",
			"editorOverviewRuler.warningForeground": "#e4b12670",
			"editorRuler.foreground": color.bg.scale[1],
			"editorSuggestWidget.background": color.bg.scale[1],
			"editorSuggestWidget.border": color.black.base,
			"editorSuggestWidget.foreground": color.fg.base,
			"editorSuggestWidget.highlightForeground": "#0782e7",
			"editorSuggestWidget.focusHighlightForeground": "#0990ff",
			"editorSuggestWidget.selectedBackground": "#A3292982",
			"editorSuggestWidget.selectedForeground": "#dadada",
			"editorWarning.foreground": "#e4b126",
			"editorWhitespace.foreground": "#C7C7C740",
			"editorWidget.background": color.bg.scale[1],
			"editorWidget.border": "#000000",
			"editorWidget.resizeBorder": color.bg.scale[1],
			"extensionButton.prominentBackground": "#A3292982",
			"extensionButton.prominentHoverBackground": "#ce3b3bba",
			focusBorder: "#dfe5ea00",
			"input.background": color.bg.scale[3],
			"input.border": color.black.base,
			"input.foreground": color.fg.base,
			"input.placeholderForeground": "#C7C7C760",
			"inputOption.activeBackground": "#C7C7C730",
			"inputOption.activeBorder": "#C7C7C730",
			"inputValidation.errorBorder": "#e5090950",
			"inputValidation.infoBorder": "#318f2750",
			"inputValidation.warningBorder": "#e4b12650",
			"list.activeSelectionBackground": color.bg.scale[3],
			"list.activeSelectionForeground": color.fg.base,
			"list.focusBackground": color.bg.scale[3],
			"list.focusForeground": color.accent.scale[2],
			"list.highlightForeground": color.accent.base,
			"list.hoverBackground": "#0a0d1062",
			"list.hoverForeground": color.fg.base,
			"list.inactiveSelectionBackground": "#1016199b",
			"list.inactiveSelectionForeground": color.fg.base,
			"list.warningForeground": "#e4b126",
			"listFilterWidget.background": "#10171830",
			"listFilterWidget.noMatchesOutline": "#10171830",
			"listFilterWidget.outline": "#10171830",
			"menu.background": color.bg.scale[1],
			"menu.border": "#1d262d",
			"menu.foreground": color.fg.base,
			"menu.selectionBackground": color.bg.base,
			"menu.selectionBorder": "#10171830",
			"menu.selectionForeground": color.fg.base,
			"menu.separatorBackground": color.fg.base,
			"menubar.selectionBackground": color.bg.scale[1],
			"menubar.selectionBorder": "#a3292900",
			"menubar.selectionForeground": color.fg.base,
			"minimap.background": color.bg.base,
			"notificationLink.foreground": color.accent.base,
			"notifications.background": color.bg.scale[1],
			"notifications.foreground": color.fg.base,
			"panel.background": color.bg.scale[0],
			"panel.border": "#1d262d",
			"panelTitle.activeBorder": color.accent.base,
			"panelTitle.activeForeground": color.fg.scale[0],
			"panelTitle.inactiveForeground": color.fg.base,
			"peekView.border": color.bg.scale[1],
			"peekViewEditor.background": "#C7C7C705",
			"peekViewEditor.matchHighlightBackground": "#A3292950",
			"peekViewEditorGutter.background": "#C7C7C705",
			"peekViewResult.background": "#C7C7C705",
			"peekViewResult.matchHighlightBackground": "#A3292950",
			"peekViewResult.selectionBackground": "#A3292970",
			"peekViewTitle.background": "#C7C7C705",
			"peekViewTitleDescription.foreground": "#C7C7C760",
			"pickerGroup.foreground": color.accent.base,
			"progressBar.background": color.accent.base,
			"scrollbar.shadow": "#1C242B00",
			"scrollbarSlider.activeBackground": "#521414cc",
			"scrollbarSlider.background": "#521414bb",
			"scrollbarSlider.hoverBackground": "#521414ee",
			"selection.background": color.accent.base,
			"settings.checkboxBackground": color.bg.scale[1],
			"settings.checkboxForeground": color.fg.base,
			"settings.dropdownBackground": color.bg.scale[1],
			"settings.dropdownForeground": color.fg.base,
			"settings.headerForeground": color.accent.base,
			"settings.modifiedItemIndicator": color.accent.base,
			"settings.numberInputBackground": color.bg.scale[1],
			"settings.numberInputForeground": color.fg.base,
			"settings.textInputBackground": color.bg.scale[1],
			"settings.textInputForeground": color.fg.base,
			"sideBar.background": color.bg.scale[1],
			"sideBar.border": color.bg.scale[1],
			"sideBar.foreground": color.fg.base,
			"sideBarSectionHeader.background": color.bg.scale[1],
			"sideBarSectionHeader.border": color.bg.scale[1],
			"sideBarSectionHeader.foreground": color.fg.base,
			"sideBarTitle.foreground": color.fg.base,
			"statusBar.background": "#521414",
			"statusBar.border": "#1B1E22",
			"statusBar.debuggingBackground": "#3b7730",
			"statusBar.debuggingForeground": color.fg.scale[0],
			"statusBar.foreground": color.fg.scale[0],
			"statusBar.noFolderBackground": "#521414",
			"statusBarItem.hoverBackground": "#52141420",
			"statusBarItem.remoteBackground": "#521414",
			"statusBarItem.remoteForeground": color.fg.scale[0],
			"tab.activeBackground": "#A3292950",
			"tab.activeBorder": color.accent.base,
			"tab.activeForeground": color.fg.scale[0],
			"tab.activeModifiedBorder": color.accent.base,
			"tab.border": color.bg.scale[1],
			"tab.inactiveBackground": "#52141430",
			"tab.inactiveForeground": "#C7C7C7af",
			"tab.unfocusedActiveBorder": color.bg.scale[1],
			"tab.unfocusedActiveBackground": "#A3292940",
			"tab.unfocusedActiveForeground": color.fg.base,
			"tab.unfocusedInactiveBackground": "#52141410",
			"tab.unfocusedInactiveForeground": "#C7C7C77f",
			"terminalCursor.foreground": color.accent.base,
			"textLink.activeForeground": color.fg.base,
			"textLink.foreground": color.accent.base,
			"titleBar.activeBackground": color.bg.base,
			"titleBar.activeForeground": color.fg.base,
			"titleBar.border": color.bg.base,
			"titleBar.inactiveBackground": color.bg.scale[0],
			"titleBar.inactiveForeground": color.grey.scale[3],
			"tree.indentGuidesStroke": color.accent.base,
			"widget.shadow": "#10171830",
		},
		semanticHighlighting: true,
		semanticTokenColors: {
			enumMember: {
				foreground: "#37beac",
			},
			"variable.constant": {
				foreground: "#e15965",
			},
			"variable.defaultLibrary": {
				foreground: "#e9dd54",
			},
			"variable:dart": {
				foreground: "#e15965",
			},
			"property:dart": {
				foreground: "#e15965",
			},
			"annotation:dart": {
				foreground: "#e15965",
			},
			"parameter.label:dart": {
				foreground: "#abb2bf",
			},
			macro: {
				foreground: "#e15965",
			},
		},
		tokenColors: [
			{
				scope: "meta.embedded",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "unison punctuation",
				scope: "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "haskell variable generic-type",
				scope: "variable.other.generic-type.haskell",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "haskell storage type",
				scope: "storage.type.haskell",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "support.variable.magic.python",
				scope: "support.variable.magic.python",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "punctuation.separator.parameters.python",
				scope: "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "variable.parameter.function.language.special.self.python",
				scope: "variable.parameter.function.language.special.self.python",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "variable.parameter.function.language.special.cls.python",
				scope: "variable.parameter.function.language.special.cls.python",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "storage.modifier.lifetime.rust",
				scope: "storage.modifier.lifetime.rust",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "support.function.std.rust",
				scope: "support.function.std.rust",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "entity.name.lifetime.rust",
				scope: "entity.name.lifetime.rust",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "variable.language.rust",
				scope: "variable.language.rust",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "support.constant.edge",
				scope: "support.constant.edge",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "regexp constant character-class",
				scope: "constant.other.character-class.regexp",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "keyword.operator",
				scope: ["keyword.operator.word"],
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "regexp operator.quantifier",
				scope: "keyword.operator.quantifier.regexp",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Text",
				scope: "variable.parameter.function",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Comment Markup Link",
				scope: "comment markup.link",
				settings: {
					foreground: "#5c6370",
				},
			},
			{
				name: "markup diff",
				scope: "markup.changed.diff",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "diff",
				scope: "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "inserted.diff",
				scope: "markup.inserted.diff",
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "deleted.diff",
				scope: "markup.deleted.diff",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "c++ function",
				scope: "meta.function.c,meta.function.cpp",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "c++ block",
				scope: "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "js/ts punctuation separator key-value",
				scope: "punctuation.separator.key-value",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "js/ts import keyword",
				scope: "keyword.operator.expression.import",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "math js/ts",
				scope: "support.constant.math",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "math property js/ts",
				scope: "support.constant.property.math",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "js/ts variable.other.constant",
				scope: "variable.other.constant",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "java type",
				scope: [
					"storage.type.annotation.java",
					"storage.type.object.array.java",
				],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "java source",
				scope: "source.java",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "java modifier.import",
				scope: "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "java modifier.import",
				scope: "meta.method.java",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "java modifier.import",
				scope: "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "java instanceof",
				scope: "keyword.operator.instanceof.java",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "java variable.name",
				scope: "meta.definition.variable.name.java",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "operator logical",
				scope: "keyword.operator.logical",
				settings: {
					foreground: "#5ed1e0",
				},
			},
			{
				name: "operator bitwise",
				scope: "keyword.operator.bitwise",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "operator channel",
				scope: "keyword.operator.channel",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "support.constant.property-value.scss",
				scope: "support.constant.property-value.scss,support.constant.property-value.css",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "CSS/SCSS/LESS Operators",
				scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "css color standard name",
				scope: "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "css variables",
				scope: "variable.scss,meta.property-value.scss,meta.property-list.scss,meta.property-list.scss,source.css.scss",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "css comma",
				scope: "punctuation.separator.list.comma.css",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "css attribute-name.id",
				scope: "support.constant.color.w3c-standard-color-name.css",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "css property-name",
				scope: "support.type.property-name.css,meta.property-name.scss,meta.property-list.scss,meta.property-list.scss",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "css attribute / pseudo class",
				scope: "entity.other.attribute-name.pseudo-class.css,entity.other.attribute-name.pseudo-element.css",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "js/ts module",
				scope: "support.module.node,support.type.object.module,support.module.node",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "entity.name.type.module",
				scope: "entity.name.type.module",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "js variable readwrite",
				scope: "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "js/ts json",
				scope: "support.constant.json",
				settings: {
					foreground: "#e15965",
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
					foreground: "#CF82E8",
				},
			},
			{
				name: "js/ts console",
				scope: "support.type.object.console",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "js/ts support.variable.property.process",
				scope: "support.variable.property.process",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "js console function",
				scope: "entity.name.function,support.function.console",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "keyword.operator.misc.rust",
				scope: "keyword.operator.misc.rust",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "keyword.operator.sigil.rust",
				scope: "keyword.operator.sigil.rust",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "operator",
				scope: "keyword.operator.delete",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "js dom",
				scope: "support.type.object.dom",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "js dom variable",
				scope: "support.variable.dom,support.variable.property.dom",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "keyword.operator",
				scope: "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "C operator assignment",
				scope: "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Punctuation",
				scope: "punctuation.separator.delimiter",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Other punctuation .c",
				scope: "punctuation.separator.c,punctuation.separator.cpp",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "C type posix-reserved",
				scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "keyword.operator.sizeof.c",
				scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "python parameter",
				scope: "variable.parameter.function.language.python",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "python type",
				scope: "support.type.python",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "python logical",
				scope: "keyword.operator.logical.python",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "pyCs",
				scope: "variable.parameter.function.python",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "python block",
				scope: "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "python function-call.generic",
				scope: "meta.function-call.generic.python",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "python placeholder reset to normal string",
				scope: "constant.character.format.placeholder.other.python",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Operators",
				scope: "keyword.operator",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Compound Assignment Operators",
				scope: "keyword.operator.assignment.compound",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Compound Assignment Operators js/ts",
				scope: "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "Keywords",
				scope: "keyword",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Namespaces",
				scope: "entity.name.namespace",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Variables",
				scope: "variable",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Variables",
				scope: "variable.c",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Language variables",
				scope: "variable.language",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Java Variables",
				scope: "token.variable.parameter.java",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Java Imports",
				scope: "import.storage.java",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Packages",
				scope: "token.package.keyword",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Packages",
				scope: "token.package",
				settings: {
					foreground: "#abb2bf",
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
					foreground: "#43A4F4",
				},
			},
			{
				name: "Classes",
				scope: "entity.name.type.namespace",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Classes",
				scope: "support.class, entity.name.type.class",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Class name",
				scope: "entity.name.class.identifier.namespace.type",
				settings: {
					foreground: "#e9dd54",
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
					foreground: "#e9dd54",
				},
			},
			{
				name: "Class name php",
				scope: "variable.other.class.php",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Type Name",
				scope: "entity.name.type",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Keyword Control",
				scope: "keyword.control",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Control Elements",
				scope: "control.elements, keyword.operator.less",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Methods",
				scope: "keyword.other.special-method",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "Storage",
				scope: "storage",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Storage JS TS",
				scope: "token.storage",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
				scope: "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Java Storage",
				scope: "token.storage.type.java",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Support",
				scope: "support.function",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "Support type",
				scope: "support.type.property-name",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Support type",
				scope: "support.constant.property-value",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Support type",
				scope: "support.constant.font-name",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Meta tag",
				scope: "meta.tag",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Strings",
				scope: "string",
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "Constant other symbol",
				scope: "constant.other.symbol",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "Integers",
				scope: "constant.numeric",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Constants",
				scope: "constant",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Constants",
				scope: "punctuation.definition.constant",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Tags",
				scope: "entity.name.tag",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Attributes",
				scope: "entity.other.attribute-name",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Attribute IDs",
				scope: "entity.other.attribute-name.id",
				settings: {
					fontStyle: "",
					foreground: "#43A4F4",
				},
			},
			{
				name: "Attribute class",
				scope: "entity.other.attribute-name.class.css",
				settings: {
					fontStyle: "",
					foreground: "#e15965",
				},
			},
			{
				name: "Selector",
				scope: "meta.selector",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Headings",
				scope: "markup.heading",
				settings: {
					foreground: "#43A4F4",
					fontStyle: "bold",
				},
			},
			{
				name: "Headings",
				scope: "markup.heading punctuation.definition.heading, entity.name.section",
				settings: {
					foreground: "#43A4F4",
					fontStyle: "bold",
				},
			},
			{
				name: "Units",
				scope: "keyword.other.unit",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Bold",
				scope: "markup.bold,todo.bold",
				settings: {
					foreground: "#e15965",
					fontStyle: "bold",
				},
			},
			{
				name: "Bold",
				scope: "punctuation.definition.bold",
				settings: {
					foreground: "#e9dd54",
					fontStyle: "bold",
				},
			},
			{
				name: "markup Italic",
				scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
				settings: {
					foreground: "#CF82E8",
					fontStyle: "italic",
				},
			},
			{
				name: "emphasis md",
				scope: "emphasis md",
				settings: {
					foreground: "#CF82E8",
					fontStyle: "italic",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown headings",
				scope: "entity.name.section.markdown",
				settings: {
					foreground: "#43A4F4",
					fontStyle: "bold",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
				scope: "punctuation.definition.heading.markdown",
				settings: {
					foreground: "#43A4F4",
					fontStyle: "bold",
				},
			},
			{
				name: "punctuation.definition.list.begin.markdown",
				scope: "punctuation.definition.list.begin.markdown",
				settings: {
					foreground: "#43A4F4",
					fontStyle: "bold",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown heading setext",
				scope: "markup.heading.setext",
				settings: {
					foreground: "#abb2bf",
					fontStyle: "bold",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
				scope: "punctuation.definition.bold.markdown",
				settings: {
					foreground: "#e15965",
					fontStyle: "bold",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Inline Raw",
				scope: "markup.inline.raw.markdown",
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Inline Raw",
				scope: "markup.inline.raw.string.markdown",
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Inline Raw punctuation",
				scope: "punctuation.definition.raw.markdown",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
				scope: "punctuation.definition.list.markdown",
				settings: {
					foreground: "#43A4F4",
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
					foreground: "#43A4F4",
				},
			},
			{
				name: "beginning.punctuation.definition.list.markdown",
				scope: ["beginning.punctuation.definition.list.markdown"],
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
				scope: "punctuation.definition.metadata.markdown",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
				scope: "markup.underline.link.markdown,markup.underline.link.image.markdown",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
				scope: "string.other.link.title.markdown,string.other.link.description.markdown",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc Inline Raw",
				scope: "markup.raw.monospace.asciidoc",
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",
				scope: "punctuation.definition.asciidoc",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",
				scope: "markup.list.asciidoc",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc underline link",
				scope: "markup.link.asciidoc,markup.other.url.asciidoc",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Asciidoc link name",
				scope: "string.unquoted.asciidoc,markup.other.url.asciidoc",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "Regular Expressions",
				scope: "string.regexp",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "Embedded",
				scope: "punctuation.section.embedded, variable.interpolation",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Embedded",
				scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "illegal",
				scope: "invalid.illegal",
				settings: {
					foreground: "#ffffff",
				},
			},
			{
				name: "illegal",
				scope: "invalid.illegal.bad-ampersand.html",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				scope: "invalid.illegal.unrecognized-tag.html",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Broken",
				scope: "invalid.broken",
				settings: {
					foreground: "#ffffff",
				},
			},
			{
				name: "Deprecated",
				scope: "invalid.deprecated",
				settings: {
					foreground: "#ffffff",
				},
			},
			{
				name: "html Deprecated",
				scope: "invalid.deprecated.entity.other.attribute-name.html",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "Unimplemented",
				scope: "invalid.unimplemented",
				settings: {
					foreground: "#ffffff",
				},
			},
			{
				name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
				scope: "source.json meta.structure.dictionary.json > string.quoted.json",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
				scope: "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
				scope: "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
				scope: "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "[VSCODE-CUSTOM] JSON Property Name",
				scope: "support.type.property-name.json",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
				scope: "support.type.property-name.json punctuation",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "laravel blade tag",
				scope: "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "laravel blade @",
				scope: "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "use statement for other classes",
				scope: "support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "error suppression",
				scope: "keyword.operator.error-control.php",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "php instanceof",
				scope: "keyword.operator.type.php",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "style double quoted array index normal begin",
				scope: "punctuation.section.array.begin.php",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "style double quoted array index normal end",
				scope: "punctuation.section.array.end.php",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "php illegal.non-null-typehinted",
				scope: "invalid.illegal.non-null-typehinted.php",
				settings: {
					foreground: "#f44747",
				},
			},
			{
				name: "php types",
				scope: "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "php call-function",
				scope: "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "php function-resets",
				scope: "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "support php constants",
				scope: "support.constant.core.rust",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "support php constants",
				scope: "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "php goto",
				scope: "entity.name.goto-label.php,support.other.php",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "php logical/bitwise operator",
				scope: "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "php regexp operator",
				scope: "keyword.operator.regexp.php",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "php comparison",
				scope: "keyword.operator.comparison.php",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "php heredoc/nowdoc",
				scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "python function decorator @",
				scope: "meta.function.decorator.python",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "python function support",
				scope: "support.token.decorator.python,meta.function.decorator.identifier.python",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "parameter function js/ts",
				scope: "function.parameter",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "brace function",
				scope: "function.brace",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "parameter function ruby cs",
				scope: "function.parameter.ruby, function.parameter.cs",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "constant.language.symbol.ruby",
				scope: "constant.language.symbol.ruby",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "rgb-value",
				scope: "rgb-value",
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "rgb value",
				scope: "inline-color-decoration rgb-value",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "rgb value less",
				scope: "less rgb-value",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "sass selector",
				scope: "selector.sass",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "ts primitive/builtin types",
				scope: "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "block scope",
				scope: "block.scope.end,block.scope.begin",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "cs storage type",
				scope: "storage.type.cs",
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "cs local variable",
				scope: "entity.name.variable.local.cs",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				scope: "token.info-token",
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				scope: "token.warn-token",
				settings: {
					foreground: "#e15965",
				},
			},
			{
				scope: "token.error-token",
				settings: {
					foreground: "#f44747",
				},
			},
			{
				scope: "token.debug-token",
				settings: {
					foreground: "#CF82E8",
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
					foreground: "#CF82E8",
				},
			},
			{
				name: "Reset JavaScript string interpolation expression",
				scope: ["meta.template.expression"],
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Import module JS",
				scope: ["keyword.operator.module"],
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "js Flowtype",
				scope: ["support.type.type.flowtype"],
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "js Flow",
				scope: ["support.type.primitive"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "js class prop",
				scope: ["meta.property.object"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "js func parameter",
				scope: ["variable.parameter.function.js"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "js template literals begin",
				scope: ["keyword.other.template.begin"],
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "js template literals end",
				scope: ["keyword.other.template.end"],
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "js template literals variable braces begin",
				scope: ["keyword.other.substitution.begin"],
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "js template literals variable braces end",
				scope: ["keyword.other.substitution.end"],
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "js operator.assignment",
				scope: ["keyword.operator.assignment"],
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "go operator",
				scope: ["keyword.operator.assignment.go"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "go operator",
				scope: [
					"keyword.operator.arithmetic.go",
					"keyword.operator.address.go",
				],
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "Go package name",
				scope: ["entity.name.package.go"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "elm prelude",
				scope: ["support.type.prelude.elm"],
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "elm constant",
				scope: ["support.constant.elm"],
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "template literal",
				scope: ["punctuation.quasi.element"],
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "html/pug (jade) escaped characters and entities",
				scope: ["constant.character.entity"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
				scope: [
					"entity.other.attribute-name.pseudo-element",
					"entity.other.attribute-name.pseudo-class",
				],
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "Clojure globals",
				scope: ["entity.global.clojure"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Clojure symbols",
				scope: ["meta.symbol.clojure"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Clojure constants",
				scope: ["constant.keyword.clojure"],
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "CoffeeScript Function Argument",
				scope: [
					"meta.arguments.coffee",
					"variable.parameter.function.coffee",
				],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Ini Default Text",
				scope: ["source.ini"],
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "Makefile prerequisities",
				scope: ["meta.scope.prerequisites.makefile"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Makefile text colour",
				scope: ["source.makefile"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Groovy import names",
				scope: ["storage.modifier.import.groovy"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "Groovy Methods",
				scope: ["meta.method.groovy"],
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "Groovy Variables",
				scope: ["meta.definition.variable.name.groovy"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Groovy Inheritance",
				scope: ["meta.definition.class.inherited.classes.groovy"],
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "HLSL Semantic",
				scope: ["support.variable.semantic.hlsl"],
				settings: {
					foreground: "#e9dd54",
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
					foreground: "#CF82E8",
				},
			},
			{
				name: "SQL Variables",
				scope: ["text.variable", "text.bracketed"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "types",
				scope: ["support.type.swift", "support.type.vb.asp"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "heading 1, keyword",
				scope: ["entity.name.function.xi"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "heading 2, callable",
				scope: ["entity.name.class.xi"],
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "heading 3, property",
				scope: ["constant.character.character-class.regexp.xi"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "heading 4, type, class, interface",
				scope: ["constant.regexp.xi"],
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				name: "heading 5, enums, preprocessor, constant, decorator",
				scope: ["keyword.control.xi"],
				settings: {
					foreground: "#37beac",
				},
			},
			{
				name: "heading 6, number",
				scope: ["invalid.xi"],
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "string",
				scope: ["beginning.punctuation.definition.quote.markdown.xi"],
				settings: {
					foreground: "#49B649",
				},
			},
			{
				name: "comments",
				scope: ["beginning.punctuation.definition.list.markdown.xi"],
				settings: {
					foreground: "#76B276",
				},
			},
			{
				name: "link",
				scope: ["constant.character.xi"],
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "accent",
				scope: ["accent.xi"],
				settings: {
					foreground: "#43A4F4",
				},
			},
			{
				name: "wikiword",
				scope: ["wikiword.xi"],
				settings: {
					foreground: "#e15965",
				},
			},
			{
				name: "language operators like '+', '-' etc",
				scope: ["constant.other.color.rgb-value.xi"],
				settings: {
					foreground: "#ffffff",
				},
			},
			{
				name: "elements to dim",
				scope: ["punctuation.definition.tag.xi"],
				settings: {
					foreground: "#5c6370",
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
					foreground: "#e9dd54",
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
					foreground: "#e69040",
				},
			},
			{
				name: "meta.brace.square",
				scope: [" meta.brace.square"],
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Comments",
				scope: "comment, punctuation.definition.comment",
				settings: {
					foreground: "#578352",
				},
			},
			{
				name: "[VSCODE-CUSTOM] Markdown Quote",
				scope: "markup.quote.markdown",
				settings: {
					foreground: "#5c6370",
				},
			},
			{
				name: "punctuation.definition.block.sequence.item.yaml",
				scope: "punctuation.definition.block.sequence.item.yaml",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				scope: [
					"constant.language.symbol.elixir",
					"constant.language.symbol.double-quoted.elixir",
				],
				settings: {
					foreground: "#37beac",
				},
			},
			{
				scope: ["entity.name.variable.parameter.cs"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				scope: ["entity.name.variable.field.cs"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Deleted",
				scope: "markup.deleted",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "Inserted",
				scope: "markup.inserted",
				settings: {
					foreground: "#49B649",
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
					foreground: "#abb2bf",
				},
			},
			{
				name: "variable.other.object",
				scope: ["variable.other.object"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "variable.other.constant.property",
				scope: ["variable.other.constant.property"],
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "entity.other.inherited-class",
				scope: ["entity.other.inherited-class"],
				settings: {
					foreground: "#e9dd54",
				},
			},
			{
				name: "c variable readwrite",
				scope: "variable.other.readwrite.c",
				settings: {
					foreground: "#e69040",
				},
			},
			{
				name: "php scope",
				scope: "entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",
				settings: {
					foreground: "#abb2bf",
				},
			},
			{
				name: "Assembly",
				scope: ["constant.numeric.decimal.asm.x86_64"],
				settings: {
					foreground: "#CF82E8",
				},
			},
			{
				scope: ["support.other.parenthesis.regexp"],
				settings: {
					foreground: "#e15965",
				},
			},
			{
				scope: ["constant.character.escape"],
				settings: {
					foreground: "#e15965",
				},
			},
			{
				scope: ["string.regexp"],
				settings: {
					foreground: "#e69040",
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
