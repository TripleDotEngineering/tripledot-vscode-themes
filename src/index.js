const fs = require('fs');
const path = require('path');

const themeNames = fs.readdirSync(__dirname).filter(s => s.endsWith('-color-theme.js'));

for (let i = 0; i < themeNames.length; i++) {
    const themeName = themeNames[i].replace('.js', '');
    const theme = require(`${__dirname}/${themeNames[i]}`);
    const themeStr = JSON.stringify(theme, null, 2);
    const output = path.join('themes', `${themeName}.json`);
    console.log(`Writing ${output} ... `);
    fs.writeFileSync(output, themeStr);
}
