const generalConfig = {
  generatedConfigPath: 'generated_config',
  filesEnconding: 'utf-8',
  formatXMLFiles: true,
  filesToHandle: [
    {
      fileName: 'items.xml',
      idSelector: 'item[name="{{id}}"]',
    },
    {
      fileName: 'entityclasses.xml',
      idSelector: 'entity_class[name="{{id}}"]',
      configIndex: 'entities',
    },
  ],
};

module.exports = { generalConfig };
