/*tslint: disable*/
//@ts-nocheck

const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;

function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) console.log(err);
    if (environmentFileContent !== '') console.log(`wrote variables to ${targetPath}`);
  });
}

const envDirectory = './src/environments';
if (!existsSync(envDirectory)) mkdirSync(envDirectory);

writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');

const isProduction = environment === 'prod';
const targetPath = isProduction ? './src/environments/environment.prod.ts' : './src/environments/environment.ts';
const environmentFileContent = `export const environment = {
    production: ${isProduction},
    googleMapsKey: '${process.env.googleMapsKey}',
    openWeatherMapKey: '${process.env.openWeatherMapKey}',
  }`;

writeFileUsingFS(targetPath, environmentFileContent);
/*tslint: enable*/
