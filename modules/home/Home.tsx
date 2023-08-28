import BannerWall from "@/modules/home/components/BannerWall";
import ProductWall from "@/modules/home/components/ProductWall";
import { DiscountCard } from "@/components/DiscountCard";
import { FieldCard } from "@/components/FieldCard";
import { AllProductGroup } from "@/__generated__/types";

export default function Home({ allProducts }: { allProducts: AllProductGroup[] }) {
  return (
    <>
      <BannerWall />
      <FieldCard 
        title="More Simpler Yet Detailed"
        content={`In 2018, diverse young women converged in New York City. 
        Their shared passion for vintage fashion led to the inception of a
        brand, embodying their own style and ideals.`}
      />
      <ProductWall productList={allProducts} />
      <FieldCard 
        title="Vintage Love, Modern Spirit" 
        content={`The streets of New York City, 2015, saw the union of creative minds
        from various walks of life. 
        Together, driven by a shared admiration for vintage fashion, they
        envisioned a brand that resonated with the modern woman.`}
      />
      <DiscountCard
        background={`url(https://images.unsplash.com/photo-1620890186094-1f3caf481295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80)`}
      />
    </>
  );
}
