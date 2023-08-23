import { Button, Stack, styled, useMediaQuery } from "@mui/material";
import Image from "next/image";

const Root = styled("div")(
  () => `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    gap: 10px;
`,
);
const MainSection = styled("div")(
  ({ isMobile }: {isMobile: boolean}) => `
    width: 100%;
    position: relative;
    img {
        width: 100%;
        height: ${isMobile ? "400px" : "550px"};
        object-fit: cover;
        object-position: center -40px;
    }
    > div {
        color: #f8f9fa;
        position: absolute;
        top: 35%;
        left: 8%;
        .title {
            font-size: 50px;
        }
        .content {
            font-size: 20px;
            font-weight: 300;
        }
        .MuiButtonBase-root {
            color: #f8f9fa;
            border: 1px solid #f8f9fa;
            padding: 5px 60px;
            margin-top: 20px;
        }
        .MuiButtonBase-root:hover {
            background: #f8f9fa;
            color: rgba(0, 0, 0, 0.8);
        }
    }
`,
);
const SubSection = styled(Stack)(
  ({ isMobile }: { isMobile: boolean }) => `
    width: 100%;
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    overflow: hidden;
    gap: 10px;
`,
);
const SubItem = styled("div")(
  () => `
    flex: 1;
    height: 320px;
    overflow: hidden;
    position: relative;
    img {
        width: 100%;
        height: 380px;
        object-fit: cover;
        object-position: center center;
        transition: all 0.2s;
    }
    .hover-box{
        width: 100%;
        height: 100%;
        display: none;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: absolute;
        background: rgba(255, 255, 255, 0.55);
        top: 0;
        left: 0;
        pointer-events: none;
        .title {
            font-size: 30px;
        }
        .content {
            font-size: 20px;
            font-weight: 300;
        }
    }
    img:hover {
        transform: scale(1.1);
        & + .hover-box {
            display: inline-flex;
        }
    }
`,
);

function BannerWall() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Root>
      <MainSection isMobile={isMobile}>
        <Image
          src="/images/Banner01.png"
          width={600}
          height={550}
          priority
          alt="春夏新品上市"
        />
        <div>
          <div className="title">Heirloom Classics</div>
          <div className="content">春夏新品上市</div>
          <Button variant="outlined">SHOP NOW</Button>
        </div>
      </MainSection>
      <SubSection isMobile={isMobile}>
        <SubItem>
          <Image
            src="/images/Banner02.png"
            width={600}
            height={400}
            priority
            alt="春夏新品上市"
          />
          <div className="hover-box">
            <div className="title">NEW ARRIVAL</div>
            <div className="content">美好新生活提案，春夏新品上市</div>
          </div>
        </SubItem>
        <SubItem>
          <Image
            src="/images/Banner03.png"
            width={600}
            height={400}
            priority
            alt="春夏新品上市"
          />
          <div className="hover-box">
            <div className="title">SPRING LOOKBOOK</div>
            <div className="content">春季系列形象影片</div>
          </div>
        </SubItem>
      </SubSection>
    </Root>
  );
}

export default BannerWall;
