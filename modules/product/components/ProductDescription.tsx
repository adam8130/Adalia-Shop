import { styled, Grid } from "@mui/material";
import { RelatedProducts } from "@/__generated__/types";

const RootGrid = styled(Grid)`

`
export function ProductDescription ({
  description,
  relatedProducts
} : {
  description: string,
  relatedProducts: RelatedProducts[]
}) {

  return (
    <RootGrid container>

    </RootGrid>
  )
}