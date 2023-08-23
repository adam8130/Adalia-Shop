import { Button, styled } from "@mui/material";

const Root = styled("div")`
  width: 100%;
  padding: 20px 40px;
  height: 300px;
  background-size: cover;
  background-position: center;
`;
const DiscountBar = styled("div")`
  width: max-content;
  background: white;
  padding: 20px;
  h1 {
    width: max-content;
    font-weight: 300;
    letter-spacing: 2px;
    padding-right: 100px;
  }
  h3 {
    width: max-content;
    font-size: 20px;
    font-weight: 300;
    margin-top: 10px;
  }
  button {
    margin-top: 20px;
    background: #6c786a;
    padding: 10px 25px;
    font-weight: 300;
    letter-spacing: 2px;
  }
`;

function DiscountCard({ background }: {background: string}): JSX.Element {
  return (
    <Root style={{ backgroundImage: `${background}` }}>
      <DiscountBar>
        <h1>Summer sale 50% off!</h1>
        <h3>搶購夏季狂潮</h3>
        <Button variant="contained">Buy Now</Button>
      </DiscountBar>
    </Root>
  );
}

export default DiscountCard;
