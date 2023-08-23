import {
  Image,
  ProductTips,
  AvailableColor,
  AvailableSize,
  Product,
  CartContent,
  Query,
} from "./types";

export const anImage = (
  overrides?: Partial<Image>,
  _relationshipsToOmit: Set<string> = new Set(),
): Image => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Image");
  return {
    url:
      overrides && overrides.hasOwnProperty("url") ? overrides.url! : "rerum",
  };
};

export const aProductTips = (
  overrides?: Partial<ProductTips>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductTips => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("ProductTips");
  return {
    tips:
      overrides && overrides.hasOwnProperty("tips")
        ? overrides.tips!
        : ["eaque"],
    campaigns:
      overrides && overrides.hasOwnProperty("campaigns")
        ? overrides.campaigns!
        : ["corrupti"],
  };
};

export const anAvailableColor = (
  overrides?: Partial<AvailableColor>,
  _relationshipsToOmit: Set<string> = new Set(),
): AvailableColor => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("AvailableColor");
  return {
    color:
      overrides && overrides.hasOwnProperty("color") ? overrides.color! : "vel",
    backgroundColor:
      overrides && overrides.hasOwnProperty("backgroundColor")
        ? overrides.backgroundColor!
        : "quaerat",
    stock:
      overrides && overrides.hasOwnProperty("stock") ? overrides.stock! : 9960,
  };
};

export const anAvailableSize = (
  overrides?: Partial<AvailableSize>,
  _relationshipsToOmit: Set<string> = new Set(),
): AvailableSize => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("AvailableSize");
  return {
    size:
      overrides && overrides.hasOwnProperty("size") ? overrides.size! : "quod",
    stock:
      overrides && overrides.hasOwnProperty("stock")
        ? overrides.stock!
        : [
            relationshipsToOmit.has("AvailableColor")
              ? ({} as AvailableColor)
              : anAvailableColor({}, relationshipsToOmit),
          ],
  };
};

export const aProduct = (
  overrides?: Partial<Product>,
  _relationshipsToOmit: Set<string> = new Set(),
): Product => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Product");
  return {
    productName:
      overrides && overrides.hasOwnProperty("productName")
        ? overrides.productName!
        : "cumque",
    productID:
      overrides && overrides.hasOwnProperty("productID")
        ? overrides.productID!
        : "et",
    productSeries:
      overrides && overrides.hasOwnProperty("productSeries")
        ? overrides.productSeries!
        : "delectus",
    images:
      overrides && overrides.hasOwnProperty("images")
        ? overrides.images!
        : [
            relationshipsToOmit.has("Image")
              ? ({} as Image)
              : anImage({}, relationshipsToOmit),
          ],
    price:
      overrides && overrides.hasOwnProperty("price") ? overrides.price! : 5007,
    description:
      overrides && overrides.hasOwnProperty("description")
        ? overrides.description!
        : "qui",
    availableSize:
      overrides && overrides.hasOwnProperty("availableSize")
        ? overrides.availableSize!
        : [
            relationshipsToOmit.has("AvailableSize")
              ? ({} as AvailableSize)
              : anAvailableSize({}, relationshipsToOmit),
          ],
    availableColor:
      overrides && overrides.hasOwnProperty("availableColor")
        ? overrides.availableColor!
        : [
            relationshipsToOmit.has("AvailableColor")
              ? ({} as AvailableColor)
              : anAvailableColor({}, relationshipsToOmit),
          ],
  };
};

export const aCartContent = (
  overrides?: Partial<CartContent>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartContent => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("CartContent");
  return {
    productID:
      overrides && overrides.hasOwnProperty("productID")
        ? overrides.productID!
        : "sit",
    productName:
      overrides && overrides.hasOwnProperty("productName")
        ? overrides.productName!
        : "inventore",
    productThumbnail:
      overrides && overrides.hasOwnProperty("productThumbnail")
        ? overrides.productThumbnail!
        : "est",
    selectedSize:
      overrides && overrides.hasOwnProperty("selectedSize")
        ? overrides.selectedSize!
        : "quod",
    selectedColor:
      overrides && overrides.hasOwnProperty("selectedColor")
        ? overrides.selectedColor!
        : "explicabo",
    selectedQuantity:
      overrides && overrides.hasOwnProperty("selectedQuantity")
        ? overrides.selectedQuantity!
        : 2467,
    totalPrice:
      overrides && overrides.hasOwnProperty("totalPrice")
        ? overrides.totalPrice!
        : 1454,
    isPreviouslyAdded:
      overrides && overrides.hasOwnProperty("isPreviouslyAdded")
        ? overrides.isPreviouslyAdded!
        : false,
  };
};

export const aQuery = (
  overrides?: Partial<Query>,
  _relationshipsToOmit: Set<string> = new Set(),
): Query => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Query");
  return {
    getProductDetail:
      overrides && overrides.hasOwnProperty("getProductDetail")
        ? overrides.getProductDetail!
        : relationshipsToOmit.has("Product")
        ? ({} as Product)
        : aProduct({}, relationshipsToOmit),
    getAllProducts:
      overrides && overrides.hasOwnProperty("getAllProducts")
        ? overrides.getAllProducts!
        : [
            relationshipsToOmit.has("Product")
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
    getProductTips:
      overrides && overrides.hasOwnProperty("getProductTips")
        ? overrides.getProductTips!
        : relationshipsToOmit.has("ProductTips")
        ? ({} as ProductTips)
        : aProductTips({}, relationshipsToOmit),
  };
};
