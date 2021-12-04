const tagsEnum = {
  DamageModifier: {
    tag: '<passive_effect name="DamageModifier" {{attributes}} />',
    attributes: {
      operation: 'perc_add',
      value: '5',
      tags: 'head',
    },
  },
};

function generateTag(tagName, attributes = {}) {
  let tag = tagsEnum[tagName];

  if (!tag) {
    if (!Object.keys(attributes).length) {
      return '';
    }

    tag = {
      tag: `<${tagName} {{attributes}} />`,
      attributes: {},
    };
  }

  attributes = { ...tag.attributes, ...attributes };

  let stringifiedAttributes = new String();
  const attributeNames = Object.keys(attributes);

  for (const attributeName of attributeNames) {
    let value = attributes[attributeName];

    if (value !== null && value !== undefined) {
      stringifiedAttributes = stringifiedAttributes.concat(
        `${attributeName}="${value}" `
      );
      continue;
    }

    stringifiedAttributes = stringifiedAttributes.concat(`${attributeName}`);
  }

  return tag.tag
    .replace(/\{\{attributes\}\}/, stringifiedAttributes)
    .replace(/\s{2,}/g, ' ');
}

function getTagName(stringifiedElement) {
  const matching = stringifiedElement.match(/<\w+/);

  if (!matching.length) {
    return null;
  }

  return matching[0].substring(1);
}

function getAttributesAsObject(stringifiedElement) {
  const splitted = stringifiedElement
    .replace(/^</, '')
    .replace(/\/?>$/, '')
    .split(' ');

  // Removing tag name
  splitted.splice(0, 1);

  const attributes = {};

  for (const stringifiedAttribute of splitted) {
    const attribute = stringifiedAttribute.replace(/"|'/g, '').split('=');

    if (attribute.length !== 2) {
      continue;
    }

    const [attributeName, attributeValue] = [attribute[0], attribute[1]];
    attributes[attributeName] = attributeValue;
  }

  return attributes;
}

module.exports = { generateTag, getTagName, getAttributesAsObject };
