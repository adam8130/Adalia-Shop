import { ProductDetail as ProductDetailType, RelatedProducts } from "@/__generated__/types";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/Cart";
import { ProductDescription } from "./components/ProductDescription";


function ProductHome({ productDetail }: { productDetail: ProductDetailType }) {
  console.log(productDetail)
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

export default observer(ProductHome);