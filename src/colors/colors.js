const redDarkColors = require("./redDarkColors");
const redDarkerColors = require("./redDarkerColors");
const blueDarkColors = require("./blueDarkColors");
const blueDarkerColors = require("./blueDarkerColors");
const greenDarkColors = require("./greenDarkColors");
const greenDarkerColors = require("./greenDarkerColors");

function getColors(theme) {
	switch (theme) {
		case "redDarker":
			return redDarkerColors;
		case "redDark":
			return redDarkColors;
		case "blueDarker":
			return blueDarkerColors;
		case "blueDark":
			return blueDarkColors;
		case "greenDarker":
			return greenDarkerColors;
		case "greenDark":
			return greenDarkColors;
		default:
			throw new Error(`Colors are missing for value: ${theme}`);
	}
}

module.exports = getColors;
