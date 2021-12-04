const path = require('path');

module.exports = {
  getTempVars: function (filePath) {
    const dirname = path.join(__dirname, '..');
    filePath = filePath.split('/');

    let fileDirectory = path.join(
      dirname,
      ...filePath.slice(0, filePath.length - 1)
    );

    let fileName = filePath[filePath.length - 1];
    filePath = path.join(dirname, ...filePath);

    return {
      fileName,
      fileDirectory,
      filePath,
      data: null,
    };
  },
};
