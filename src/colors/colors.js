const darkColors = {
	accent: "",
	fg: "hsl(212, 52%, 94%)",
	bg: "hsl(212, 52%, 94%)",
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

module.exports = {
	getColors,
};
