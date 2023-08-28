import { styled } from "@mui/material";
import Image from "next/image";

const Root = styled('div')`
  width: 90%;
  height: 500px;
  margin: auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 36px;
    letter-spacing: 6px;
    font-weight: 300;
    margin-top: 20px;
  }
`

function CommingSoon() {
  return (
    <Root>
      <Image
        src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" 
        width={100}
        height={100}
        alt="Commig Soon"
      />
      <h1 className="text-4xl font-bold">Coming Soon</h1>
    </Root>
  );
}

export default CommingSoon;