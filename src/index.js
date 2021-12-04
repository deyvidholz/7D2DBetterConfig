const fs = require('fs');
const { JSDOM } = require('jsdom');
const path = require('path');
const format = require('xml-formatter');
const { config } = require('./config');
const { getTempVars } = require('./helpers/general');
const { getTagName, getAttributesAsObject } = require('./helpers/tags');

console.log('Preparing variables...');
const line =
  '================================================================================';
const encoding = config.general.filesEnconding;
const generatedConfigPath = path.join(
  __dirname,
  '..',
  ...config.general.generatedConfigPath.split('/')
);

function handle(fileToHandle) {
  console.log(line);
  console.log(`Handling ${fileToHandle.fileName} file...`);
  let temp = getTempVars(`default_config/${fileToHandle.fileName}`);
  temp.data = fs.readFileSync(temp.filePath, { encoding });

  // Removing comments
  console.log('- Removing comments...');
  temp.data = temp.data.replace(/<!--[\s\S]*?-->/g, '');

  console.log(
    '- Closing tags properly in order to use the string with JSDOM...'
  );
  temp.data = temp.data.split('<');

  for (const index in temp.data) {
    let data = temp.data[index].trim();

    if (!data.match(/\/>$/)) {
      continue;
    }

    const attributeName = data.match(/[\w?]+ /)[0].trim();
    const attributeCloseTag = `</${attributeName}>`;

    data = data.replace(/\/>$/, '>');
    temp.data[index] = data.concat(attributeCloseTag);
  }

  temp.data = temp.data.join('<');

  // Instancing an HTML document
  console.log('- Creating JSDOM Instance...');
  const doc = new JSDOM(temp.data);
  const configIndex =
    fileToHandle.configIndex || fileToHandle.fileName.replace(/\.\w+$/, '');

  console.log(`- Applying changes [using configIndex ${configIndex}]...`);
  for (const itemConfig of config[configIndex]) {
    let { name, changes } = itemConfig;
    const idSelector = fileToHandle.idSelector.replace(/\{\{id\}\}/, name);

    const container = doc.window.document.querySelector(idSelector);
    if (!container) {
      console.log(`> <item name="${name}">...</item> not found`);
      continue;
    }

    for (const change of changes) {
      let element = container.querySelector(change.selector);

      if (!element) {
        console.log(`> Element with selector ${change.selector} not found`);
        // If element was not found but there's a container and tag, it will add the element.
        if (!change.containerSelector && !change.tag) {
          continue;
        }

        console.log(`> Creating element ${change.tag}`);
        const fatherElementContainer = container.querySelector(
          change.containerSelector
        );

        if (!fatherElementContainer) {
          continue;
        }

        const tag = getTagName(change.tag);
        element = doc.window.document.createElement(tag);

        const attributes = getAttributesAsObject(change.tag);

        for (const attributeName of Object.keys(attributes)) {
          const attributeValue = attributes[attributeName];
          element.setAttribute(attributeName, attributeValue);
        }

        // Workaraund: .appendChild is not working so it will add the outerHTML
        // container.appendChild(element);
        fatherElementContainer.innerHTML = `\n${element.outerHTML}\n${fatherElementContainer.innerHTML}`;
        continue;
      }

      if (!change.set) {
        continue;
      }

      const attributes = Object.keys(change.set);
      for (const attribute of attributes) {
        element.setAttribute(attribute, change.set[attribute]);
      }
    }
  }

  console.log('- Serializing and transforming back to XML File...');
  temp.data = doc
    .serialize()
    .replace(/<html><head><\/head><body>/, '')
    .replace(/<\/body><\/html>/, '')
    .replace(
      /<!--\?xml version="1\.0" encoding="UTF-8"\?-->/,
      '<?xml version="1.0" encoding="UTF-8"?>\n'
    );

  // Formating file
  if (config.general.formatXMLFiles) {
    console.log('- Formatting...');
    temp.data = format(temp.data);
  } else {
    console.log('- Minifying...');
    temp.data = temp.data.replace(/\t|\n/g, '');
  }

  console.log('- Saving...');
  fs.writeFileSync(path.join(generatedConfigPath, temp.fileName), temp.data, {
    encoding,
  });

  console.log(temp.fileName, 'done.');
  console.log(line);
}

// Generated updated files
config.general.filesToHandle.forEach((fileToHandle) => handle(fileToHandle));
