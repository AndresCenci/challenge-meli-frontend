require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8000,
  urlMeli: process.env.URL_MELI || 'https://api.mercadolibre.com/',
  name: process.env.NAME || 'Andres',
  lastName: process.env.LAST_NAME || 'Cenci',
  quantity: process.env.QUANTITY || 4,
};

module.exports = { config };
