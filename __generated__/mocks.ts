import {
  Image,
  ShopSettings,
  AvailableColor,
  AvailableSize,
  Product,
  AllProductGroup,
  CartContent,
  RelatedProducts,
  ProductDetail,
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

export const aShopSettings = (
  overrides?: Partial<ShopSettings>,
  _relationshipsToOmit: Set<string> = new Set(),
): ShopSettings => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("ShopSettings");
  return {
    shopMenuItems:
      overrides && overrides.hasOwnProperty("shopMenuItems")
        ? overrides.shopMenuItems!
        : ["ab"],
    shopPayment:
      overrides && overrides.hasOwnProperty("shopPayment")
        ? overrides.shopPayment!
        : ["consequatur"],
    shopDelivery:
      overrides && overrides.hasOwnProperty("shopDelivery")
        ? overrides.shopDelivery!
        : ["eos"],
    shopTips:
      overrides && overrides.hasOwnProperty("shopTips")
        ? overrides.shopTips!
        : ["odio"],
    shopCampaigns:
      overrides && overrides.hasOwnProperty("shopCampaigns")
        ? overrides.shopCampaigns!
        : ["eum"],
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
    productSeriesEN:
      overrides && overrides.hasOwnProperty("productSeriesEN")
        ? overrides.productSeriesEN!
        : "quia",
    productSeriesZH:
      overrides && overrides.hasOwnProperty("productSeriesZH")
        ? overrides.productSeriesZH!
        : "fugiat",
    productImages:
      overrides && overrides.hasOwnProperty("productImages")
        ? overrides.productImages!
        : [
            relationshipsToOmit.has("Image")
              ? ({} as Image)
              : anImage({}, relationshipsToOmit),
          ],
    productPrice:
      overrides && overrides.hasOwnProperty("productPrice")
        ? overrides.productPrice!
        : 3295,
    productDescription:
      overrides && overrides.hasOwnProperty("productDescription")
        ? overrides.productDescription!
        : "maxime",
    availableCampaigns:
      overrides && overrides.hasOwnProperty("availableCampaigns")
        ? overrides.availableCampaigns!
        : 2.85,
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

export const anAllProductGroup = (
  overrides?: Partial<AllProductGroup>,
  _relationshipsToOmit: Set<string> = new Set(),
): AllProductGroup => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("AllProductGroup");
  return {
    series:
      overrides && overrides.hasOwnProperty("series")
        ? overrides.series!
        : "eaque",
    products:
      overrides && overrides.hasOwnProperty("products")
        ? overrides.products!
        : [
            relationshipsToOmit.has("Product")
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
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
    productSeriesEN:
      overrides && overrides.hasOwnProperty("productSeriesEN")
        ? overrides.productSeriesEN!
        : "similique",
    productSeriesZH:
      overrides && overrides.hasOwnProperty("productSeriesZH")
        ? overrides.productSeriesZH!
        : "et",
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

export const aRelatedProducts = (
  overrides?: Partial<RelatedProducts>,
  _relationshipsToOmit: Set<string> = new Set(),
): RelatedProducts => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("RelatedProducts");
  return {
    productID:
      overrides && overrides.hasOwnProperty("productID")
        ? overrides.productID!
        : "cumque",
    productName:
      overrides && overrides.hasOwnProperty("productName")
        ? overrides.productName!
        : "enim",
    productSeriesEN:
      overrides && overrides.hasOwnProperty("productSeriesEN")
        ? overrides.productSeriesEN!
        : "sed",
    productSeriesZH:
      overrides && overrides.hasOwnProperty("productSeriesZH")
        ? overrides.productSeriesZH!
        : "ea",
    productImages:
      overrides && overrides.hasOwnProperty("productImages")
        ? overrides.productImages!
        : [
            relationshipsToOmit.has("Image")
              ? ({} as Image)
              : anImage({}, relationshipsToOmit),
          ],
    productPrice:
      overrides && overrides.hasOwnProperty("productPrice")
        ? overrides.productPrice!
        : 8894,
  };
};

export const aProductDetail = (
  overrides?: Partial<ProductDetail>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductDetail => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("ProductDetail");
  return {
    product:
      overrides && overrides.hasOwnProperty("product")
        ? overrides.product!
        : relationshipsToOmit.has("Product")
        ? ({} as Product)
        : aProduct({}, relationshipsToOmit),
    relatedProducts:
      overrides && overrides.hasOwnProperty("relatedProducts")
        ? overrides.relatedProducts!
        : [
            relationshipsToOmit.has("RelatedProducts")
              ? ({} as RelatedProducts)
              : aRelatedProducts({}, relationshipsToOmit),
          ],
  };
};

export const aQuery = (
  overrides?: Partial<Query>,
  _relationshipsToOmit: Set<string> = new Set(),
): Query => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Query");
  return {
    getShopSettings:
      overrides && overrides.hasOwnProperty("getShopSettings")
        ? overrides.getShopSettings!
        : relationshipsToOmit.has("ShopSettings")
        ? ({} as ShopSettings)
        : aShopSettings({}, relationshipsToOmit),
    getSpringSeries:
      overrides && overrides.hasOwnProperty("getSpringSeries")
        ? overrides.getSpringSeries!
        : [
            relationshipsToOmit.has("Product")
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
    getAutumnSeries:
      overrides && overrides.hasOwnProperty("getAutumnSeries")
        ? overrides.getAutumnSeries!
        : [
            relationshipsToOmit.has("Product")
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
    getNewArrivalsSeries:
      overrides && overrides.hasOwnProperty("getNewArrivalsSeries")
        ? overrides.getNewArrivalsSeries!
        : [
            relationshipsToOmit.has("Product")
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
    getAllSeriesProducts:
      overrides && overrides.hasOwnProperty("getAllSeriesProducts")
        ? overrides.getAllSeriesProducts!
        : [
            relationshipsToOmit.has("AllProductGroup")
              ? ({} as AllProductGroup)
              : anAllProductGroup({}, relationshipsToOmit),
          ],
    getProductDetail:
      overrides && overrides.hasOwnProperty("getProductDetail")
        ? overrides.getProductDetail!
        : relationshipsToOmit.has("ProductDetail")
        ? ({} as ProductDetail)
        : aProductDetail({}, relationshipsToOmit),
  };
};
