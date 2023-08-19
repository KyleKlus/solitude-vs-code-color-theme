const chroma = require("chroma-js");
const baseColors = require("./baseColors");

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
	white: baseColors.white,
	black: "hsl(180, 5%, 13%)",
	accentGreen: baseColors.accentGreen,
	grey: baseColors.grey,
	lightGrey: baseColors.lightGrey,
	red: baseColors.red,
	lightRed: baseColors.lightRed,
	green: baseColors.green,
	lightGreen: baseColors.lightGreen,
	darkGreen: baseColors.darkGreen,
	orange: baseColors.orange,
	lightOrange: baseColors.lightOrange,
	yellow: baseColors.yellow,
	lightYellow: baseColors.lightYellow,
	blue: baseColors.blue,
	lightBlue: baseColors.lightBlue,
	magenta: baseColors.magenta,
	lightMagenta: baseColors.lightMagenta,
	cyan: baseColors.cyan,
	lightCyan: baseColors.lightCyan,
	transparent: this.transparent,
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
	accentGreen: {
		base: darkBaseColors.accentGreen,
		transparent: chroma(darkBaseColors.accentGreen).alpha(0.6).hex(),
		dark: alpha(darken(darkBaseColors.accentGreen, 0.8), 0.6),
		scale: [
			chroma(darkBaseColors.accentGreen).brighten(0.1).hex(),
			chroma(darkBaseColors.accentGreen).brighten(0.2).hex(),
			chroma(darkBaseColors.accentGreen).brighten(0.3).hex(),
			chroma(darkBaseColors.accentGreen).brighten(0.4).hex(),
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
	lightRed: {
		base: darkBaseColors.lightRed,
		scale: [
			chroma(darkBaseColors.lightRed).brighten(0.1).hex(),
			chroma(darkBaseColors.lightRed).brighten(0.2).hex(),
			chroma(darkBaseColors.lightRed).brighten(0.3).hex(),
			chroma(darkBaseColors.lightRed).brighten(0.4).hex(),
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
	lightGreen: {
		base: darkBaseColors.lightGreen,
		scale: [
			chroma(darkBaseColors.lightGreen).brighten(0.1).hex(),
			chroma(darkBaseColors.lightGreen).brighten(0.2).hex(),
			chroma(darkBaseColors.lightGreen).brighten(0.3).hex(),
			chroma(darkBaseColors.lightGreen).brighten(0.4).hex(),
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
	lightYellow: {
		base: darkBaseColors.lightYellow,
		scale: [
			chroma(darkBaseColors.lightYellow).brighten(0.1).hex(),
			chroma(darkBaseColors.lightYellow).brighten(0.2).hex(),
			chroma(darkBaseColors.lightYellow).brighten(0.3).hex(),
			chroma(darkBaseColors.lightYellow).brighten(0.4).hex(),
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
	lightOrange: {
		base: darkBaseColors.lightOrange,
		scale: [
			chroma(darkBaseColors.lightOrange).brighten(0.1).hex(),
			chroma(darkBaseColors.lightOrange).brighten(0.2).hex(),
			chroma(darkBaseColors.lightOrange).brighten(0.3).hex(),
			chroma(darkBaseColors.lightOrange).brighten(0.4).hex(),
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
	lightMagenta: {
		base: darkBaseColors.lightMagenta,
		scale: [
			chroma(darkBaseColors.lightMagenta).brighten(0.1).hex(),
			chroma(darkBaseColors.lightMagenta).brighten(0.2).hex(),
			chroma(darkBaseColors.lightMagenta).brighten(0.3).hex(),
			chroma(darkBaseColors.lightMagenta).brighten(0.4).hex(),
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
	lightCyan: {
		base: darkBaseColors.lightCyan,
		scale: [
			chroma(darkBaseColors.lightCyan).brighten(0.1).hex(),
			chroma(darkBaseColors.lightCyan).brighten(0.2).hex(),
			chroma(darkBaseColors.lightCyan).brighten(0.3).hex(),
			chroma(darkBaseColors.lightCyan).brighten(0.4).hex(),
		],
	},
};

const darkColors = {
	accent: darkBaseScaleColors.accentGreen,
	border: {
		light: darkBaseScaleColors.black.scale[6],
		dark: darkBaseScaleColors.black.base,
	},

	text: {
		normal: darkBaseScaleColors.white.base,
		muted: chroma(darkBaseScaleColors.grey.scale[1]).hex(),
		disabled: chroma(darkBaseScaleColors.grey.base).darken(0.1).hex(),
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
	lightRed: darkBaseScaleColors.lightRed,
	green: darkBaseScaleColors.green,
	lightGreen: darkBaseScaleColors.lightGreen,
	darkGreen: darkBaseScaleColors.darkGreen,
	orange: darkBaseScaleColors.orange,
	lightOrange: darkBaseScaleColors.lightOrange,
	yellow: darkBaseScaleColors.yellow,
	lightYellow: darkBaseScaleColors.lightYellow,
	blue: darkBaseScaleColors.blue,
	lightBlue: darkBaseScaleColors.lightBlue,
	magenta: darkBaseScaleColors.magenta,
	lightMagenta: darkBaseScaleColors.lightMagenta,
	cyan: darkBaseScaleColors.cyan,
	lightCyan: darkBaseScaleColors.lightCyan,
	transparent: darkBaseColors.transparent,
};

module.exports = darkColors;
