import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Image = {
  __typename?: "Image";
  url: Scalars["String"]["output"];
};

export type ShopSettings = {
  __typename?: "ShopSettings";
  menubarItems?: Maybe<Array<Scalars["String"]["output"]>>;
  payment?: Maybe<Array<Scalars["String"]["output"]>>;
  delivery?: Maybe<Array<Scalars["String"]["output"]>>;
  shopTips?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  shopCampaigns?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type AvailableColor = {
  __typename?: "AvailableColor";
  color?: Maybe<Scalars["String"]["output"]>;
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  stock?: Maybe<Scalars["Int"]["output"]>;
};

export type AvailableSize = {
  __typename?: "AvailableSize";
  size?: Maybe<Scalars["String"]["output"]>;
  stock?: Maybe<Array<Maybe<AvailableColor>>>;
};

export type Product = {
  __typename?: "Product";
  productName: Scalars["String"]["output"];
  productID: Scalars["String"]["output"];
  productSeriesEN: Scalars["String"]["output"];
  productSeriesZH: Scalars["String"]["output"];
  productImages: Array<Image>;
  productPrice: Scalars["Int"]["output"];
  productDescription?: Maybe<Scalars["String"]["output"]>;
  availableCampaigns?: Maybe<Scalars["Float"]["output"]>;
  availableSize?: Maybe<Array<AvailableSize>>;
  availableColor?: Maybe<Array<AvailableColor>>;
};

export type AllProductGroup = {
  __typename?: "AllProductGroup";
  series: Scalars["String"]["output"];
  products: Array<Product>;
};

export type CartContent = {
  __typename?: "CartContent";
  productID?: Maybe<Scalars["String"]["output"]>;
  productName?: Maybe<Scalars["String"]["output"]>;
  productThumbnail?: Maybe<Scalars["String"]["output"]>;
  selectedSize?: Maybe<Scalars["String"]["output"]>;
  selectedColor?: Maybe<Scalars["String"]["output"]>;
  selectedQuantity?: Maybe<Scalars["Int"]["output"]>;
  totalPrice?: Maybe<Scalars["Int"]["output"]>;
  isPreviouslyAdded?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RelatedProducts = {
  __typename?: "RelatedProducts";
  productID?: Maybe<Scalars["String"]["output"]>;
  productName?: Maybe<Scalars["String"]["output"]>;
  productImages?: Maybe<Array<Maybe<Image>>>;
  productPrice?: Maybe<Scalars["Int"]["output"]>;
};

export type ProductDetail = {
  __typename?: "ProductDetail";
  product?: Maybe<Product>;
  relatedProducts?: Maybe<Array<Maybe<RelatedProducts>>>;
};

export type Query = {
  __typename?: "Query";
  getShopSettings?: Maybe<ShopSettings>;
  getSpringSeries: Array<Product>;
  getAutumnSeries: Array<Product>;
  getNewArrivalsSeries: Array<Product>;
  getAllProducts: Array<AllProductGroup>;
  getProductDetail?: Maybe<ProductDetail>;
};

export type QueryGetProductDetailArgs = {
  productID: Scalars["String"]["input"];
  productSeriesEN: Scalars["String"]["input"];
};

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProductsQuery = {
  __typename?: "Query";
  getAllProducts: Array<{
    __typename?: "AllProductGroup";
    series: string;
    products: Array<{
      __typename?: "Product";
      productName: string;
      productID: string;
      productSeriesEN: string;
      productSeriesZH: string;
      productDescription?: string | null;
      productPrice: number;
      productImages: Array<{ __typename?: "Image"; url: string }>;
      availableSize?: Array<{
        __typename?: "AvailableSize";
        size?: string | null;
        stock?: Array<{
          __typename?: "AvailableColor";
          color?: string | null;
          backgroundColor?: string | null;
          stock?: number | null;
        } | null> | null;
      }> | null;
    }>;
  }>;
};

export type GetProductDetailQueryVariables = Exact<{
  productID: Scalars["String"]["input"];
  productSeriesEN: Scalars["String"]["input"];
}>;

export type GetProductDetailQuery = {
  __typename?: "Query";
  getProductDetail?: {
    __typename?: "ProductDetail";
    product?: {
      __typename?: "Product";
      productName: string;
      productID: string;
      productSeriesEN: string;
      productSeriesZH: string;
      productDescription?: string | null;
      productPrice: number;
      productImages: Array<{ __typename?: "Image"; url: string }>;
      availableSize?: Array<{
        __typename?: "AvailableSize";
        size?: string | null;
        stock?: Array<{
          __typename?: "AvailableColor";
          color?: string | null;
          backgroundColor?: string | null;
          stock?: number | null;
        } | null> | null;
      }> | null;
    } | null;
    relatedProducts?: Array<{
      __typename?: "RelatedProducts";
      productID?: string | null;
      productName?: string | null;
      productPrice?: number | null;
      productImages?: Array<{
        __typename?: "Image";
        url: string;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetShopSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetShopSettingsQuery = {
  __typename?: "Query";
  getShopSettings?: {
    __typename?: "ShopSettings";
    menubarItems?: Array<string> | null;
    payment?: Array<string> | null;
    delivery?: Array<string> | null;
    shopTips?: Array<string | null> | null;
    shopCampaigns?: Array<string | null> | null;
  } | null;
};

export const GetAllProductsDocument = gql`
  query GetAllProducts {
    getAllProducts {
      series
      products {
        productName
        productID
        productSeriesEN
        productSeriesZH
        productDescription
        productPrice
        productImages {
          url
        }
        availableSize {
          size
          stock {
            color
            backgroundColor
            stock
          }
        }
      }
    }
  }
`;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllProductsQuery,
    GetAllProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(
    GetAllProductsDocument,
    options,
  );
}
export function useGetAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllProductsQuery,
    GetAllProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(
    GetAllProductsDocument,
    options,
  );
}
export type GetAllProductsQueryHookResult = ReturnType<
  typeof useGetAllProductsQuery
>;
export type GetAllProductsLazyQueryHookResult = ReturnType<
  typeof useGetAllProductsLazyQuery
>;
export type GetAllProductsQueryResult = Apollo.QueryResult<
  GetAllProductsQuery,
  GetAllProductsQueryVariables
>;
export const GetProductDetailDocument = gql`
  query GetProductDetail($productID: String!, $productSeriesEN: String!) {
    getProductDetail(productID: $productID, productSeriesEN: $productSeriesEN) {
      product {
        productName
        productID
        productSeriesEN
        productSeriesZH
        productDescription
        productPrice
        productImages {
          url
        }
        availableSize {
          size
          stock {
            color
            backgroundColor
            stock
          }
        }
      }
      relatedProducts {
        productID
        productName
        productImages {
          url
        }
        productPrice
      }
    }
  }
`;

/**
 * __useGetProductDetailQuery__
 *
 * To run a query within a React component, call `useGetProductDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDetailQuery({
 *   variables: {
 *      productID: // value for 'productID'
 *      productSeriesEN: // value for 'productSeriesEN'
 *   },
 * });
 */
export function useGetProductDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductDetailQuery,
    GetProductDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductDetailQuery, GetProductDetailQueryVariables>(
    GetProductDetailDocument,
    options,
  );
}
export function useGetProductDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductDetailQuery,
    GetProductDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductDetailQuery,
    GetProductDetailQueryVariables
  >(GetProductDetailDocument, options);
}
export type GetProductDetailQueryHookResult = ReturnType<
  typeof useGetProductDetailQuery
>;
export type GetProductDetailLazyQueryHookResult = ReturnType<
  typeof useGetProductDetailLazyQuery
>;
export type GetProductDetailQueryResult = Apollo.QueryResult<
  GetProductDetailQuery,
  GetProductDetailQueryVariables
>;
export const GetShopSettingsDocument = gql`
  query GetShopSettings {
    getShopSettings {
      menubarItems
      payment
      delivery
      shopTips
      shopCampaigns
    }
  }
`;

/**
 * __useGetShopSettingsQuery__
 *
 * To run a query within a React component, call `useGetShopSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShopSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetShopSettingsQuery,
    GetShopSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetShopSettingsQuery, GetShopSettingsQueryVariables>(
    GetShopSettingsDocument,
    options,
  );
}
export function useGetShopSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShopSettingsQuery,
    GetShopSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetShopSettingsQuery,
    GetShopSettingsQueryVariables
  >(GetShopSettingsDocument, options);
}
export type GetShopSettingsQueryHookResult = ReturnType<
  typeof useGetShopSettingsQuery
>;
export type GetShopSettingsLazyQueryHookResult = ReturnType<
  typeof useGetShopSettingsLazyQuery
>;
export type GetShopSettingsQueryResult = Apollo.QueryResult<
  GetShopSettingsQuery,
  GetShopSettingsQueryVariables
>;
