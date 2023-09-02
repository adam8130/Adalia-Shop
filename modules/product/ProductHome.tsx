import { ProductDetail as ProductDetailType, RelatedProducts } from "@/__generated__/types";
import { ProductDetail } from "./components/ProductDetail";
import { ProductDescription } from "./components/ProductDescription";
import { useRouter } from 'next/router'


function ProductHome({ productDetail }: { productDetail: ProductDetailType }) {
  const router = useRouter();

  return (
    <>
      <ProductDetail product={productDetail.product!} />
      <ProductDescription 
        description={productDetail.product?.productDescription!}
        relatedProducts={productDetail.relatedProducts as RelatedProducts[]}
      />
    </>
  )
}

export default ProductHome;