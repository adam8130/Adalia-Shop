import { ProductTips, Product } from "@/__generated__/types";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/Cart";


function ProductHome({ 
  product,
  productTips
}: { 
  product: Product
  productTips: ProductTips
}) {
  return (
    <>
      <ProductDetail 
        product={product}
        productTips={productTips}
      />
    </>
  )
}

export default observer(ProductHome);