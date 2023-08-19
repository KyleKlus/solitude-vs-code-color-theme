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

const darkerBaseColors = {
	white: baseColors.white,
	black: "hsl(180, 5%, 9%)",
	grey: baseColors.grey,
	accentRed: baseColors.accentRed,
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

const darkerBaseScaleColors = {
	white: {
		base: darkerBaseColors.white,
		scale: [
			chroma(darkerBaseColors.white).brighten(0.1).hex(),
			chroma(darkerBaseColors.white).brighten(0.2).hex(),
			chroma(darkerBaseColors.white).brighten(0.3).hex(),
			chroma(darkerBaseColors.white).brighten(0.4).hex(),
		],
	},
	black: {
		base: darkerBaseColors.black,
		scale: [
			chroma(darkerBaseColors.black).brighten(0.1).hex(),
			chroma(darkerBaseColors.black).brighten(0.2).hex(),
			chroma(darkerBaseColors.black).brighten(0.3).hex(),
			chroma(darkerBaseColors.black).brighten(0.4).hex(),
			chroma(darkerBaseColors.black).brighten(0.5).hex(),
			chroma(darkerBaseColors.black).brighten(0.6).hex(),
			chroma(darkerBaseColors.black).brighten(0.7).hex(),
			chroma(darkerBaseColors.black).brighten(0.8).hex(),
			chroma(darkerBaseColors.black).brighten(0.9).hex(),
			chroma(darkerBaseColors.black).brighten(1).hex(),
		],
		transparentScale: [
			chroma(darkerBaseColors.black).alpha(0.6).brighten(0.1).hex(),
			chroma(darkerBaseColors.black).alpha(0.6).brighten(0.2).hex(),
			chroma(darkerBaseColors.black).alpha(0.6).brighten(0.3).hex(),
			chroma(darkerBaseColors.black).alpha(0.6).brighten(0.4).hex(),
			chroma(darkerBaseColors.black).alpha(0.6).brighten(0.5).hex(),
			chroma(darkerBaseColors.black).alpha(0.6).brighten(0.6).hex(),
			chroma(darkerBaseColors.black).alpha(0.6).brighten(0.7).hex(),
			chroma(darkerBaseColors.black).alpha(0.6).brighten(0.8).hex(),
			chroma(darkerBaseColors.black).alpha(0.6).brighten(0.9).hex(),
			chroma(darkerBaseColors.black).alpha(0.6).brighten(1).hex(),
		],
	},
	grey: {
		base: darkerBaseColors.grey,
		scale: [
			chroma(darkerBaseColors.grey).brighten(0.1).hex(),
			chroma(darkerBaseColors.grey).brighten(0.2).hex(),
			chroma(darkerBaseColors.grey).brighten(0.3).hex(),
			chroma(darkerBaseColors.grey).brighten(0.4).hex(),
		],
	},
	lightGrey: {
		base: darkerBaseColors.lightGrey,
		scale: [
			chroma(darkerBaseColors.lightGrey).brighten(0.1).hex(),
			chroma(darkerBaseColors.lightGrey).brighten(0.2).hex(),
			chroma(darkerBaseColors.lightGrey).brighten(0.3).hex(),
			chroma(darkerBaseColors.lightGrey).brighten(0.4).hex(),
		],
	},
	accentRed: {
		base: darkerBaseColors.accentRed,
		transparent: chroma(darkerBaseColors.accentRed).alpha(0.6).hex(),
		dark: alpha(darken(darkerBaseColors.accentRed, 0.8), 0.6),
		scale: [
			chroma(darkerBaseColors.accentRed).brighten(0.1).hex(),
			chroma(darkerBaseColors.accentRed).brighten(0.2).hex(),
			chroma(darkerBaseColors.accentRed).brighten(0.3).hex(),
			chroma(darkerBaseColors.accentRed).brighten(0.4).hex(),
		],
	},
	red: {
		base: darkerBaseColors.red,
		scale: [
			chroma(darkerBaseColors.red).brighten(0.1).hex(),
			chroma(darkerBaseColors.red).brighten(0.2).hex(),
			chroma(darkerBaseColors.red).brighten(0.3).hex(),
			chroma(darkerBaseColors.red).brighten(0.4).hex(),
		],
	},
	lightRed: {
		base: darkerBaseColors.lightRed,
		scale: [
			chroma(darkerBaseColors.lightRed).brighten(0.1).hex(),
			chroma(darkerBaseColors.lightRed).brighten(0.2).hex(),
			chroma(darkerBaseColors.lightRed).brighten(0.3).hex(),
			chroma(darkerBaseColors.lightRed).brighten(0.4).hex(),
		],
	},
	blue: {
		base: darkerBaseColors.blue,
		scale: [
			chroma(darkerBaseColors.blue).brighten(0.1).hex(),
			chroma(darkerBaseColors.blue).brighten(0.2).hex(),
			chroma(darkerBaseColors.blue).brighten(0.3).hex(),
			chroma(darkerBaseColors.blue).brighten(0.4).hex(),
		],
	},
	lightBlue: {
		base: darkerBaseColors.blue,
		scale: [
			chroma(darkerBaseColors.blue).brighten(0.1).hex(),
			chroma(darkerBaseColors.blue).brighten(0.2).hex(),
			chroma(darkerBaseColors.blue).brighten(0.3).hex(),
			chroma(darkerBaseColors.blue).brighten(0.4).hex(),
		],
	},
	green: {
		base: darkerBaseColors.green,
		scale: [
			chroma(darkerBaseColors.green).brighten(0.1).hex(),
			chroma(darkerBaseColors.green).brighten(0.2).hex(),
			chroma(darkerBaseColors.green).brighten(0.3).hex(),
			chroma(darkerBaseColors.green).brighten(0.4).hex(),
		],
	},
	lightGreen: {
		base: darkerBaseColors.lightGreen,
		scale: [
			chroma(darkerBaseColors.lightGreen).brighten(0.1).hex(),
			chroma(darkerBaseColors.lightGreen).brighten(0.2).hex(),
			chroma(darkerBaseColors.lightGreen).brighten(0.3).hex(),
			chroma(darkerBaseColors.lightGreen).brighten(0.4).hex(),
		],
	},
	darkGreen: {
		base: darkerBaseColors.darkGreen,
		scale: [
			chroma(darkerBaseColors.darkGreen).brighten(0.1).hex(),
			chroma(darkerBaseColors.darkGreen).brighten(0.2).hex(),
			chroma(darkerBaseColors.darkGreen).brighten(0.3).hex(),
			chroma(darkerBaseColors.darkGreen).brighten(0.4).hex(),
		],
	},
	yellow: {
		base: darkerBaseColors.yellow,
		scale: [
			chroma(darkerBaseColors.yellow).brighten(0.1).hex(),
			chroma(darkerBaseColors.yellow).brighten(0.2).hex(),
			chroma(darkerBaseColors.yellow).brighten(0.3).hex(),
			chroma(darkerBaseColors.yellow).brighten(0.4).hex(),
		],
	},
	lightYellow: {
		base: darkerBaseColors.lightYellow,
		scale: [
			chroma(darkerBaseColors.lightYellow).brighten(0.1).hex(),
			chroma(darkerBaseColors.lightYellow).brighten(0.2).hex(),
			chroma(darkerBaseColors.lightYellow).brighten(0.3).hex(),
			chroma(darkerBaseColors.lightYellow).brighten(0.4).hex(),
		],
	},
	orange: {
		base: darkerBaseColors.orange,
		scale: [
			chroma(darkerBaseColors.orange).brighten(0.1).hex(),
			chroma(darkerBaseColors.orange).brighten(0.2).hex(),
			chroma(darkerBaseColors.orange).brighten(0.3).hex(),
			chroma(darkerBaseColors.orange).brighten(0.4).hex(),
		],
	},
	lightOrange: {
		base: darkerBaseColors.lightOrange,
		scale: [
			chroma(darkerBaseColors.lightOrange).brighten(0.1).hex(),
			chroma(darkerBaseColors.lightOrange).brighten(0.2).hex(),
			chroma(darkerBaseColors.lightOrange).brighten(0.3).hex(),
			chroma(darkerBaseColors.lightOrange).brighten(0.4).hex(),
		],
	},
	magenta: {
		base: darkerBaseColors.magenta,
		scale: [
			chroma(darkerBaseColors.magenta).brighten(0.1).hex(),
			chroma(darkerBaseColors.magenta).brighten(0.2).hex(),
			chroma(darkerBaseColors.magenta).brighten(0.3).hex(),
			chroma(darkerBaseColors.magenta).brighten(0.4).hex(),
		],
	},
	lightMagenta: {
		base: darkerBaseColors.lightMagenta,
		scale: [
			chroma(darkerBaseColors.lightMagenta).brighten(0.1).hex(),
			chroma(darkerBaseColors.lightMagenta).brighten(0.2).hex(),
			chroma(darkerBaseColors.lightMagenta).brighten(0.3).hex(),
			chroma(darkerBaseColors.lightMagenta).brighten(0.4).hex(),
		],
	},
	cyan: {
		base: darkerBaseColors.cyan,
		scale: [
			chroma(darkerBaseColors.cyan).brighten(0.1).hex(),
			chroma(darkerBaseColors.cyan).brighten(0.2).hex(),
			chroma(darkerBaseColors.cyan).brighten(0.3).hex(),
			chroma(darkerBaseColors.cyan).brighten(0.4).hex(),
		],
	},
	lightCyan: {
		base: darkerBaseColors.lightCyan,
		scale: [
			chroma(darkerBaseColors.lightCyan).brighten(0.1).hex(),
			chroma(darkerBaseColors.lightCyan).brighten(0.2).hex(),
			chroma(darkerBaseColors.lightCyan).brighten(0.3).hex(),
			chroma(darkerBaseColors.lightCyan).brighten(0.4).hex(),
		],
	},
};

const darkerColors = {
	accent: darkerBaseScaleColors.accentRed,
	border: {
		light: darkerBaseScaleColors.black.scale[6],
		dark: darkerBaseScaleColors.black.base,
	},

	text: {
		normal: darkerBaseScaleColors.white.base,
		muted: chroma(darkerBaseScaleColors.grey.scale[1]).hex(),
		disabled: chroma(darkerBaseScaleColors.grey.base).darken(0.1).hex(),
	},
	surface: {
		darker: darkerBaseScaleColors.black.scale[1],
		dark: darkerBaseScaleColors.black.scale[3],
		light: darkerBaseScaleColors.black.scale[5],
		lighter: darkerBaseScaleColors.black.scale[7],
		darkerTransparent: darkerBaseScaleColors.black.transparentScale[1],
		darkTransparent: darkerBaseScaleColors.black.transparentScale[3],
		lightTransparent: darkerBaseScaleColors.black.transparentScale[5],
		lighterTransparent: darkerBaseScaleColors.black.transparentScale[7],
	},
	shadow: "#101718b2",
	black: darkerBaseScaleColors.black,
	white: darkerBaseScaleColors.white,
	grey: darkerBaseScaleColors.grey,
	lightGrey: darkerBaseScaleColors.lightGrey,
	red: darkerBaseScaleColors.red,
	lightRed: darkerBaseScaleColors.lightRed,
	green: darkerBaseScaleColors.green,
	lightGreen: darkerBaseScaleColors.lightGreen,
	darkGreen: darkerBaseScaleColors.darkGreen,
	orange: darkerBaseScaleColors.orange,
	lightOrange: darkerBaseScaleColors.lightOrange,
	yellow: darkerBaseScaleColors.yellow,
	lightYellow: darkerBaseScaleColors.lightYellow,
	blue: darkerBaseScaleColors.blue,
	lightBlue: darkerBaseScaleColors.lightBlue,
	magenta: darkerBaseScaleColors.magenta,
	lightMagenta: darkerBaseScaleColors.lightMagenta,
	cyan: darkerBaseScaleColors.cyan,
	lightCyan: darkerBaseScaleColors.lightCyan,
	transparent: darkerBaseColors.transparent,
};

module.exports = darkerColors;
