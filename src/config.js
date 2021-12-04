const { entitiesConfig } = require('./config/entities');
const { generalConfig } = require('./config/general');
const { itemsConfig } = require('./config/items');

const config = {
  general: { ...generalConfig },
  items: [...itemsConfig],
  entities: [...entitiesConfig],
};

module.exports = { config };
