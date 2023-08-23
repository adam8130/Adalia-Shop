import BannerWall from "@/components/BannerWall";
import ProductWall from "@/components/ProductWall";
import DiscountCard from "@/components/DiscountCard";
import FieldCard from "@/components/FieldCard";
import { Product } from "@/__generated__/types";

export default function Home({ data }: { data: Product[] }) {
  return (
    <>
      <BannerWall />
      <FieldCard title="More simple, More Details">
        <p>
          In 2015, a group of girls with different cultural backgrounds met in
          New York City.
          <br />
          The love of vintage clothes connected them and sparked an idea to
          create a brand they wanted to wear themselves.
        </p>
      </FieldCard>
      <ProductWall displayAmount={6} productList={data} />
      <FieldCard title="More simple, More Details">
        <p>
          In 2015, a group of girls with different cultural backgrounds met in
          New York City.
          <br />
          The love of vintage clothes connected them and sparked an idea to
          create a brand they wanted to wear themselves.
        </p>
      </FieldCard>
      <DiscountCard 
        background={
          `url(https://images.unsplash.com/photo-1620890186094-1f3caf481295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80)`
        }
      />
    </>
  );
}
