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

export type ProductTips = {
  __typename?: "ProductTips";
  tips: Array<Scalars["String"]["output"]>;
  campaigns: Array<Scalars["String"]["output"]>;
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
  productSeries: Scalars["String"]["output"];
  images: Array<Image>;
  price: Scalars["Int"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  availableSize?: Maybe<Array<AvailableSize>>;
  availableColor?: Maybe<Array<AvailableColor>>;
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

export type Query = {
  __typename?: "Query";
  getProductDetail?: Maybe<Product>;
  getAllProducts: Array<Product>;
  getProductTips?: Maybe<ProductTips>;
};

export type QueryGetProductDetailArgs = {
  productID: Scalars["String"]["input"];
};

export type GetProductDetailQueryVariables = Exact<{
  productID: Scalars["String"]["input"];
}>;

export type GetProductDetailQuery = {
  __typename?: "Query";
  getProductDetail?: {
    __typename?: "Product";
    productName: string;
    productID: string;
    productSeries: string;
    price: number;
    description?: string | null;
    images: Array<{ __typename?: "Image"; url: string }>;
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
};

export type GetAllProductQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProductQuery = {
  __typename?: "Query";
  getAllProducts: Array<{
    __typename?: "Product";
    productName: string;
    productID: string;
    productSeries: string;
    price: number;
    images: Array<{ __typename?: "Image"; url: string }>;
  }>;
};

export type GetProductTipsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductTipsQuery = {
  __typename?: "Query";
  getProductTips?: {
    __typename?: "ProductTips";
    tips: Array<string>;
    campaigns: Array<string>;
  } | null;
};

export const GetProductDetailDocument = gql`
  query GetProductDetail($productID: String!) {
    getProductDetail(productID: $productID) {
      productName
      productID
      productSeries
      images {
        url
      }
      price
      description
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
export const GetAllProductDocument = gql`
  query GetAllProduct {
    getAllProducts {
      productName
      productID
      productSeries
      images {
        url
      }
      price
    }
  }
`;

/**
 * __useGetAllProductQuery__
 *
 * To run a query within a React component, call `useGetAllProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllProductQuery,
    GetAllProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllProductQuery, GetAllProductQueryVariables>(
    GetAllProductDocument,
    options,
  );
}
export function useGetAllProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllProductQuery,
    GetAllProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllProductQuery, GetAllProductQueryVariables>(
    GetAllProductDocument,
    options,
  );
}
export type GetAllProductQueryHookResult = ReturnType<
  typeof useGetAllProductQuery
>;
export type GetAllProductLazyQueryHookResult = ReturnType<
  typeof useGetAllProductLazyQuery
>;
export type GetAllProductQueryResult = Apollo.QueryResult<
  GetAllProductQuery,
  GetAllProductQueryVariables
>;
export const GetProductTipsDocument = gql`
  query GetProductTips {
    getProductTips {
      tips
      campaigns
    }
  }
`;

/**
 * __useGetProductTipsQuery__
 *
 * To run a query within a React component, call `useGetProductTipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductTipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductTipsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductTipsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductTipsQuery,
    GetProductTipsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductTipsQuery, GetProductTipsQueryVariables>(
    GetProductTipsDocument,
    options,
  );
}
export function useGetProductTipsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductTipsQuery,
    GetProductTipsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductTipsQuery, GetProductTipsQueryVariables>(
    GetProductTipsDocument,
    options,
  );
}
export type GetProductTipsQueryHookResult = ReturnType<
  typeof useGetProductTipsQuery
>;
export type GetProductTipsLazyQueryHookResult = ReturnType<
  typeof useGetProductTipsLazyQuery
>;
export type GetProductTipsQueryResult = Apollo.QueryResult<
  GetProductTipsQuery,
  GetProductTipsQueryVariables
>;
