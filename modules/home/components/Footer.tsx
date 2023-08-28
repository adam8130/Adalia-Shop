import { styled, Grid, Button, useMediaQuery } from "@mui/material";
import { Facebook } from "@mui/icons-material";
import { InstagramIcon, LineIcon } from "@/public/svgs";
import { useStore } from "@/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";

const RootGrid = styled(Grid)`
  width: 100%;
  background: #f0efd5;
`;
const Menubar = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 40px 0;
  h1 {
    font-size: 32px;
    letter-spacing: 2px;
    font-weight: 300;
  }
  h4 {
    padding: 4px 0;
    font-weight: 300;
  }
  a {
    font-weight: 300;
  }
  .MuiButtonBase-root {
    font-weight: 300;
    padding: 3px 8px;
    svg {
      fill: currentColor;
    }
  }
`;

function Footer() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const { shopMenuItems } = useStore();

  return (
    <RootGrid container>
      {!isMobile && (
        <Grid item xs={false} sm={4} md={4} columnSpacing={2}>
          <Menubar>
            {shopMenuItems?.map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(" ", "")}`}>
                {item}
              </Link>
            ))}
          </Menubar>
        </Grid>
      )}
      <Grid item xs={12} sm={4} md={4} columnSpacing={2}>
        <Menubar>
          <h1>Adalia</h1>
          <h4>220新北市板橋區縣民大道三段251號</h4>
          <h4>週一到週五營業 AM9:00 ~ PM8:00</h4>
          <h4>02-2023-2168</h4>
          <h4>service@adalia.example.com</h4>
        </Menubar>
      </Grid>
      <Grid item xs={12} sm={4} md={4} columnSpacing={2}>
        <Menubar>
          <h1>Contact</h1>
          <Button startIcon={<InstagramIcon/>} color="inherit">Instgram</Button>
          <Button startIcon={<Facebook/>} color="inherit">Facebook</Button>
          <Button startIcon={<LineIcon/>} color="inherit">Line</Button>
        </Menubar>
      </Grid>
    </RootGrid>
  );
}

export default observer(Footer);
