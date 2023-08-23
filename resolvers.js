const fs = require('fs');
const db = JSON.parse(fs.readFileSync('./public/db.json', 'utf8'));

const resolvers = {
  Query: {
    getProductDetail: (_, { productID }) => db.products.find((item) => item.productID === productID),
    getAllProducts: () => db.products,
    getProductTips: () => db.productTips,
  }
};

module.exports = { resolvers }