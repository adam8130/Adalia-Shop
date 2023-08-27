const fs = require('fs');
const { getRandomItems } = require('./utils/getRandomItems');
const db = JSON.parse(fs.readFileSync('./public/db.json', 'utf8'));
const springDB = JSON.parse(fs.readFileSync('./public/series-SPRING.json', 'utf8'));
const autumnDB = JSON.parse(fs.readFileSync('./public/series-AUTUMN.json', 'utf8'));
const newArrivalsDB = JSON.parse(fs.readFileSync('./public/series-NEWARRIVALS.json', 'utf8'));
const allProductsDB = [
  { series: "SPRING", db: springDB },
  { series: "AUTUMN", db: autumnDB },
  { series: "NEWARRIVALS", db: newArrivalsDB }
];

const resolvers = {
  Query: {
    getShopSettings: () => db.shopSettings,
    getSpringSeries: () => springDB,
    getAutumnSeries: () => autumnDB,
    getNewArrivalsSeries: () => newArrivalsDB,
    getAllProducts: () => {
      const products = [
        { series: "SPRING", products: getRandomItems(springDB, 3) },
        { series: "AUTUMN", products: getRandomItems(autumnDB, 3) },
        { series: "NEW ARRIVALS", products :getRandomItems(newArrivalsDB, 3) }
      ];
      return products;
    },
    getProductDetail: (_, { productID, productSeriesEN }) => {
      const targetSeries = allProductsDB.find((item) => item.series === productSeriesEN.toUpperCase());
      const product = targetSeries.db.find((item) => item.productID === productID);
      const relatedProducts = getRandomItems(targetSeries.db, 4, product);
      return { product, relatedProducts }
    }
  }
};

module.exports = { resolvers }