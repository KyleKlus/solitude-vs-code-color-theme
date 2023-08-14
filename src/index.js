const fs = require("fs").promises;
const getTheme = require("./theme");

const redDarkTheme = getTheme({
	theme: "redDark",
	name: "Solitude Red Dark",
});

const redDarkerTheme = getTheme({
	theme: "redDarker",
	name: "Solitude Red Darker",
});

const greenDarkTheme = getTheme({
	theme: "greenDark",
	name: "Solitude Green Dark",
});

const greenDarkerTheme = getTheme({
	theme: "greenDarker",
	name: "Solitude Green Darker",
});

const blueDarkTheme = getTheme({
	theme: "blueDark",
	name: "Solitude Blue Dark",
});

const blueDarkerTheme = getTheme({
	theme: "blueDarker",
	name: "Solitude Blue Darker",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile(
				"./themes/solitude-red-dark-color-theme.json",
				JSON.stringify(redDarkTheme, null, 2)
			),
			fs.writeFile(
				"./themes/solitude-red-darker-color-theme.json",
				JSON.stringify(redDarkerTheme, null, 2)
			),
			fs.writeFile(
				"./themes/solitude-blue-dark-color-theme.json",
				JSON.stringify(blueDarkTheme, null, 2)
			),
			fs.writeFile(
				"./themes/solitude-blue-darker-color-theme.json",
				JSON.stringify(blueDarkerTheme, null, 2)
			),
			fs.writeFile(
				"./themes/solitude-green-dark-color-theme.json",
				JSON.stringify(greenDarkTheme, null, 2)
			),
			fs.writeFile(
				"./themes/solitude-green-darker-color-theme.json",
				JSON.stringify(greenDarkerTheme, null, 2)
			),
		])
	)
	.catch(() => process.exit(1));
