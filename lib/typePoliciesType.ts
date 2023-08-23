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
export type ProductTipsKeySpecifier = (
  | "tips"
  | "campaigns"
  | ProductTipsKeySpecifier
)[];
export type ProductTipsFieldPolicy = {
  tips?: FieldPolicy<any> | FieldReadFunction<any>;
  campaigns?: FieldPolicy<any> | FieldReadFunction<any>;
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
  | "productSeries"
  | "images"
  | "price"
  | "description"
  | "availableSize"
  | "availableColor"
  | ProductKeySpecifier
)[];
export type ProductFieldPolicy = {
  productName?: FieldPolicy<any> | FieldReadFunction<any>;
  productID?: FieldPolicy<any> | FieldReadFunction<any>;
  productSeries?: FieldPolicy<any> | FieldReadFunction<any>;
  images?: FieldPolicy<any> | FieldReadFunction<any>;
  price?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  availableSize?: FieldPolicy<any> | FieldReadFunction<any>;
  availableColor?: FieldPolicy<any> | FieldReadFunction<any>;
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
export type QueryKeySpecifier = (
  | "getProductDetail"
  | "getAllProducts"
  | "getProductTips"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  getProductDetail?: FieldPolicy<any> | FieldReadFunction<any>;
  getAllProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  getProductTips?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Image?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ImageKeySpecifier
      | (() => undefined | ImageKeySpecifier);
    fields?: ImageFieldPolicy;
  };
  ProductTips?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ProductTipsKeySpecifier
      | (() => undefined | ProductTipsKeySpecifier);
    fields?: ProductTipsFieldPolicy;
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
  CartContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CartContentKeySpecifier
      | (() => undefined | CartContentKeySpecifier);
    fields?: CartContentFieldPolicy;
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
