const chroma = require("chroma-js");

const alpha = (color, alpha) => {
	return chroma(color).alpha(alpha).hex();
};

const darken = (color, amount) => {
	return chroma(color).darken(amount).hex();
};

const lighten = (color, amount) => {
	return chroma(color).lighten(amount).hex();
};

const darkBaseColors = {
	white: "#cdd1d6",
	black: "hsl(195, 6%, 13%)",
	grey: "#6e7781",
	lightGrey:"#abb2bf",
	accentRed: "#528dd1",
	red: "#e15965",
	green: "#49B649",
	darkGreen:"#578352",
	orange: "#e69040",
	yellow: "#e9dd54",
	blue: "#43A4F4",
	lightBlue: "#5ed1e0",
	magenta: "#CF82E8",
	cyan: "#37beac",
	transparent: "#ffffff00",
};

const darkBaseScaleColors = {
	white: {
		base: darkBaseColors.white,
		scale: [
			chroma(darkBaseColors.white).brighten(0.1).hex(),
			chroma(darkBaseColors.white).brighten(0.2).hex(),
			chroma(darkBaseColors.white).brighten(0.3).hex(),
			chroma(darkBaseColors.white).brighten(0.4).hex(),
		],
	},
	black: {
		base: darkBaseColors.black,
		scale: [
			chroma(darkBaseColors.black).brighten(0.1).hex(),
			chroma(darkBaseColors.black).brighten(0.2).hex(),
			chroma(darkBaseColors.black).brighten(0.3).hex(),
			chroma(darkBaseColors.black).brighten(0.4).hex(),
			chroma(darkBaseColors.black).brighten(0.5).hex(),
			chroma(darkBaseColors.black).brighten(0.6).hex(),
			chroma(darkBaseColors.black).brighten(0.7).hex(),
			chroma(darkBaseColors.black).brighten(0.8).hex(),
			chroma(darkBaseColors.black).brighten(0.9).hex(),
			chroma(darkBaseColors.black).brighten(1).hex(),
		],
		transparentScale: [
			chroma(darkBaseColors.black).alpha(0.6).brighten(0.1).hex(),
			chroma(darkBaseColors.black).alpha(0.6).brighten(0.2).hex(),
			chroma(darkBaseColors.black).alpha(0.6).brighten(0.3).hex(),
			chroma(darkBaseColors.black).alpha(0.6).brighten(0.4).hex(),
			chroma(darkBaseColors.black).alpha(0.6).brighten(0.5).hex(),
			chroma(darkBaseColors.black).alpha(0.6).brighten(0.6).hex(),
			chroma(darkBaseColors.black).alpha(0.6).brighten(0.7).hex(),
			chroma(darkBaseColors.black).alpha(0.6).brighten(0.8).hex(),
			chroma(darkBaseColors.black).alpha(0.6).brighten(0.9).hex(),
			chroma(darkBaseColors.black).alpha(0.6).brighten(1).hex(),
		],
	},
	grey: {
		base: darkBaseColors.grey,
		scale: [
			chroma(darkBaseColors.grey).brighten(0.1).hex(),
			chroma(darkBaseColors.grey).brighten(0.2).hex(),
			chroma(darkBaseColors.grey).brighten(0.3).hex(),
			chroma(darkBaseColors.grey).brighten(0.4).hex(),
		],
	},
	lightGrey: {
		base: darkBaseColors.lightGrey,
		scale: [
			chroma(darkBaseColors.lightGrey).brighten(0.1).hex(),
			chroma(darkBaseColors.lightGrey).brighten(0.2).hex(),
			chroma(darkBaseColors.lightGrey).brighten(0.3).hex(),
			chroma(darkBaseColors.lightGrey).brighten(0.4).hex(),
		],
	},
	red: {
		base: darkBaseColors.red,
		scale: [
			chroma(darkBaseColors.red).brighten(0.1).hex(),
			chroma(darkBaseColors.red).brighten(0.2).hex(),
			chroma(darkBaseColors.red).brighten(0.3).hex(),
			chroma(darkBaseColors.red).brighten(0.4).hex(),
		],
	},
	accentRed: {
		base: darkBaseColors.accentRed,
		transparent: chroma(darkBaseColors.accentRed).alpha(0.6).hex(),
		dark: alpha(darken(darkBaseColors.accentRed, 0.8), 0.6),
		scale: [
			chroma(darkBaseColors.accentRed).brighten(0.1).hex(),
			chroma(darkBaseColors.accentRed).brighten(0.2).hex(),
			chroma(darkBaseColors.accentRed).brighten(0.3).hex(),
			chroma(darkBaseColors.accentRed).brighten(0.4).hex(),
		],
	},
	blue: {
		base: darkBaseColors.blue,
		scale: [
			chroma(darkBaseColors.blue).brighten(0.1).hex(),
			chroma(darkBaseColors.blue).brighten(0.2).hex(),
			chroma(darkBaseColors.blue).brighten(0.3).hex(),
			chroma(darkBaseColors.blue).brighten(0.4).hex(),
		],
	},
	lightBlue: {
		base: darkBaseColors.blue,
		scale: [
			chroma(darkBaseColors.blue).brighten(0.1).hex(),
			chroma(darkBaseColors.blue).brighten(0.2).hex(),
			chroma(darkBaseColors.blue).brighten(0.3).hex(),
			chroma(darkBaseColors.blue).brighten(0.4).hex(),
		],
	},
	green: {
		base: darkBaseColors.green,
		scale: [
			chroma(darkBaseColors.green).brighten(0.1).hex(),
			chroma(darkBaseColors.green).brighten(0.2).hex(),
			chroma(darkBaseColors.green).brighten(0.3).hex(),
			chroma(darkBaseColors.green).brighten(0.4).hex(),
		],
	},
	darkGreen: {
		base: darkBaseColors.darkGreen,
		scale: [
			chroma(darkBaseColors.darkGreen).brighten(0.1).hex(),
			chroma(darkBaseColors.darkGreen).brighten(0.2).hex(),
			chroma(darkBaseColors.darkGreen).brighten(0.3).hex(),
			chroma(darkBaseColors.darkGreen).brighten(0.4).hex(),
		],
	},
	yellow: {
		base: darkBaseColors.yellow,
		scale: [
			chroma(darkBaseColors.yellow).brighten(0.1).hex(),
			chroma(darkBaseColors.yellow).brighten(0.2).hex(),
			chroma(darkBaseColors.yellow).brighten(0.3).hex(),
			chroma(darkBaseColors.yellow).brighten(0.4).hex(),
		],
	},
	orange: {
		base: darkBaseColors.orange,
		scale: [
			chroma(darkBaseColors.orange).brighten(0.1).hex(),
			chroma(darkBaseColors.orange).brighten(0.2).hex(),
			chroma(darkBaseColors.orange).brighten(0.3).hex(),
			chroma(darkBaseColors.orange).brighten(0.4).hex(),
		],
	},
	magenta: {
		base: darkBaseColors.magenta,
		scale: [
			chroma(darkBaseColors.magenta).brighten(0.1).hex(),
			chroma(darkBaseColors.magenta).brighten(0.2).hex(),
			chroma(darkBaseColors.magenta).brighten(0.3).hex(),
			chroma(darkBaseColors.magenta).brighten(0.4).hex(),
		],
	},
	cyan: {
		base: darkBaseColors.cyan,
		scale: [
			chroma(darkBaseColors.cyan).brighten(0.1).hex(),
			chroma(darkBaseColors.cyan).brighten(0.2).hex(),
			chroma(darkBaseColors.cyan).brighten(0.3).hex(),
			chroma(darkBaseColors.cyan).brighten(0.4).hex(),
		],
	},
};

const darkColors = {
	accent: darkBaseScaleColors.accentRed,
	border: {
		light: darkBaseScaleColors.black.scale[6],
		dark: darkBaseScaleColors.black.base,
	},

	text: {
		normal: darkBaseScaleColors.white.base,
		muted: chroma(darkBaseScaleColors.grey.base).darken(0.3).hex(),
		disabled: chroma(darkBaseScaleColors.grey.base).darken(0.6).hex(),
	},
	surface: {
		darker: darkBaseScaleColors.black.scale[1],
		dark: darkBaseScaleColors.black.scale[3],
		light: darkBaseScaleColors.black.scale[5],
		lighter: darkBaseScaleColors.black.scale[7],
		darkerTransparent: darkBaseScaleColors.black.transparentScale[1],
		darkTransparent: darkBaseScaleColors.black.transparentScale[3],
		lightTransparent: darkBaseScaleColors.black.transparentScale[5],
		lighterTransparent: darkBaseScaleColors.black.transparentScale[7],
	},
	shadow: "#101718b2",
	black: darkBaseScaleColors.black,
	white: darkBaseScaleColors.white,
	grey: darkBaseScaleColors.grey,
	lightGrey: darkBaseScaleColors.lightGrey,
	red: darkBaseScaleColors.red,
	magenta: darkBaseScaleColors.magenta,
	blue: darkBaseScaleColors.blue,
	lightBlue: darkBaseScaleColors.lightBlue,
	cyan: darkBaseScaleColors.cyan,
	darkGreen: darkBaseScaleColors.darkGreen,
	green: darkBaseScaleColors.green,
	yellow: darkBaseScaleColors.yellow,
	orange: darkBaseScaleColors.orange,
	transparent: darkBaseColors.transparent,
};



module.exports = darkColors;
