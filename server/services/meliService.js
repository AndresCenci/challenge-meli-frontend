const fetch = require('node-fetch');
const currencyFormatter = require('currency-formatter');
const { config } = require('../config/index');

class MeliService {
  async search(query) {
    const url = config.urlMeli.concat(`sites/MLA/search?q=${query}&limit=${config.quantity}`);

    const current = await fetch(url);
    const json = await current.json();

    const response = {};
    response.author = this.getAuthor();
    response.categories = this.getCategories(json.filters);
    response.items = this.getItems(json.results);

    return response || {};
  }

  async getItem(id) {
    let url = config.urlMeli.concat(`items/${id}`);

    let current = await fetch(url);
    let item = await current.json();

    const response = {};
    response.author = this.getAuthor();
    response.item = {
      id: item.id,
      title: item.title,
      price: {
        amount: this.formatPrice(item.price),
        currency: item.currency_id,
        decimals: 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
    };

    url = config.urlMeli.concat(`items/${id}/description`);

    current = await fetch(url);
    item = await current.json();

    response.item.description = item.plain_text;

    return response || {};
  }

  getAuthor = () => {
    return { name: config.name, lastname: config.lastName };
  }

  getCategories = (filters) => {
    const trueFilters = filters[0] ? filters[0] : {};
    let categories = [];

    if (!!filters &&
      trueFilters.values.length &&
      trueFilters.values[0].path_from_root.length) {
      categories = trueFilters.values[0].path_from_root.map((category) => {
        return category.name;
      });
    }

    return categories;
  }

  getItems = (items) => {
    return items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: this.formatPrice(item.price),
          decimals: 0,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity };
    });
  }

  formatPrice = (price) => {
    return currencyFormatter.format(price, {
      symbol: '$ ',
      thousand: '.',
      precision: 0,
    });
  }
}

module.exports = MeliService;
