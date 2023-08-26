import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from "@apollo/client/cache";
export type ImageKeySpecifier = ("url" | ImageKeySpecifier)[];
export type ImageFieldPolicy = {
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ShopSettingsKeySpecifier = (
  | "menubarItems"
  | "payment"
  | "delivery"
  | "shopTips"
  | "shopCampaigns"
  | ShopSettingsKeySpecifier
)[];
export type ShopSettingsFieldPolicy = {
  menubarItems?: FieldPolicy<any> | FieldReadFunction<any>;
  payment?: FieldPolicy<any> | FieldReadFunction<any>;
  delivery?: FieldPolicy<any> | FieldReadFunction<any>;
  shopTips?: FieldPolicy<any> | FieldReadFunction<any>;
  shopCampaigns?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AvailableColorKeySpecifier = (
  | "color"
  | "backgroundColor"
  | "stock"
  | AvailableColorKeySpecifier
)[];
export type AvailableColorFieldPolicy = {
  color?: FieldPolicy<any> | FieldReadFunction<any>;
  backgroundColor?: FieldPolicy<any> | FieldReadFunction<any>;
  stock?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AvailableSizeKeySpecifier = (
  | "size"
  | "stock"
  | AvailableSizeKeySpecifier
)[];
export type AvailableSizeFieldPolicy = {
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  stock?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProductKeySpecifier = (
  | "productName"
  | "productID"
  | "productSeriesEN"
  | "productSeriesZH"
  | "productImages"
  | "productPrice"
  | "productDescription"
  | "availableCampaigns"
  | "availableSize"
  | "availableColor"
  | ProductKeySpecifier
)[];
export type ProductFieldPolicy = {
  productName?: FieldPolicy<any> | FieldReadFunction<any>;
  productID?: FieldPolicy<any> | FieldReadFunction<any>;
  productSeriesEN?: FieldPolicy<any> | FieldReadFunction<any>;
  productSeriesZH?: FieldPolicy<any> | FieldReadFunction<any>;
  productImages?: FieldPolicy<any> | FieldReadFunction<any>;
  productPrice?: FieldPolicy<any> | FieldReadFunction<any>;
  productDescription?: FieldPolicy<any> | FieldReadFunction<any>;
  availableCampaigns?: FieldPolicy<any> | FieldReadFunction<any>;
  availableSize?: FieldPolicy<any> | FieldReadFunction<any>;
  availableColor?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AllProductGroupKeySpecifier = (
  | "series"
  | "products"
  | AllProductGroupKeySpecifier
)[];
export type AllProductGroupFieldPolicy = {
  series?: FieldPolicy<any> | FieldReadFunction<any>;
  products?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CartContentKeySpecifier = (
  | "productID"
  | "productName"
  | "productThumbnail"
  | "selectedSize"
  | "selectedColor"
  | "selectedQuantity"
  | "totalPrice"
  | "isPreviouslyAdded"
  | CartContentKeySpecifier
)[];
export type CartContentFieldPolicy = {
  productID?: FieldPolicy<any> | FieldReadFunction<any>;
  productName?: FieldPolicy<any> | FieldReadFunction<any>;
  productThumbnail?: FieldPolicy<any> | FieldReadFunction<any>;
  selectedSize?: FieldPolicy<any> | FieldReadFunction<any>;
  selectedColor?: FieldPolicy<any> | FieldReadFunction<any>;
  selectedQuantity?: FieldPolicy<any> | FieldReadFunction<any>;
  totalPrice?: FieldPolicy<any> | FieldReadFunction<any>;
  isPreviouslyAdded?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RelatedProductsKeySpecifier = (
  | "productID"
  | "productName"
  | "productImages"
  | "productPrice"
  | RelatedProductsKeySpecifier
)[];
export type RelatedProductsFieldPolicy = {
  productID?: FieldPolicy<any> | FieldReadFunction<any>;
  productName?: FieldPolicy<any> | FieldReadFunction<any>;
  productImages?: FieldPolicy<any> | FieldReadFunction<any>;
  productPrice?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProductDetailKeySpecifier = (
  | "product"
  | "relatedProducts"
  | ProductDetailKeySpecifier
)[];
export type ProductDetailFieldPolicy = {
  product?: FieldPolicy<any> | FieldReadFunction<any>;
  relatedProducts?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "getShopSettings"
  | "getSpringSeries"
  | "getAutumnSeries"
  | "getNewArrivalsSeries"
  | "getAllProducts"
  | "getProductDetail"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  getShopSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  getSpringSeries?: FieldPolicy<any> | FieldReadFunction<any>;
  getAutumnSeries?: FieldPolicy<any> | FieldReadFunction<any>;
  getNewArrivalsSeries?: FieldPolicy<any> | FieldReadFunction<any>;
  getAllProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  getProductDetail?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Image?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ImageKeySpecifier
      | (() => undefined | ImageKeySpecifier);
    fields?: ImageFieldPolicy;
  };
  ShopSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ShopSettingsKeySpecifier
      | (() => undefined | ShopSettingsKeySpecifier);
    fields?: ShopSettingsFieldPolicy;
  };
  AvailableColor?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AvailableColorKeySpecifier
      | (() => undefined | AvailableColorKeySpecifier);
    fields?: AvailableColorFieldPolicy;
  };
  AvailableSize?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AvailableSizeKeySpecifier
      | (() => undefined | AvailableSizeKeySpecifier);
    fields?: AvailableSizeFieldPolicy;
  };
  Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ProductKeySpecifier
      | (() => undefined | ProductKeySpecifier);
    fields?: ProductFieldPolicy;
  };
  AllProductGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AllProductGroupKeySpecifier
      | (() => undefined | AllProductGroupKeySpecifier);
    fields?: AllProductGroupFieldPolicy;
  };
  CartContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CartContentKeySpecifier
      | (() => undefined | CartContentKeySpecifier);
    fields?: CartContentFieldPolicy;
  };
  RelatedProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RelatedProductsKeySpecifier
      | (() => undefined | RelatedProductsKeySpecifier);
    fields?: RelatedProductsFieldPolicy;
  };
  ProductDetail?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ProductDetailKeySpecifier
      | (() => undefined | ProductDetailKeySpecifier);
    fields?: ProductDetailFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
