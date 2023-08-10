const fs = require("fs").promises;
const getTheme = require("./theme");

const darkDefaultTheme = getTheme({
	theme: "dark",
	name: "Solitude Dark",
});

const lightDefaultTheme = getTheme({
	theme: "light",
	name: "Solitude Light",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile(
				"./themes/solitude-light-color-theme.json",
				JSON.stringify(lightDefaultTheme, null, 2)
			),
			fs.writeFile(
				"./themes/solitude-dark-color-theme.json",
				JSON.stringify(darkDefaultTheme, null, 2)
			),
		])
	)
	.catch(() => process.exit(1));
