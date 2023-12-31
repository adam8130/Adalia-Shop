import { Button, styled, useMediaQuery } from "@mui/material";
import Image from "next/image";

const Root = styled("div")(
  ({ mobile }: {mobile: number}) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${mobile ? '20px 10px' : '20px 40px'};
    gap: 10px;
  `
);
const MainSection = styled("div")(
  ({ mobile }: {mobile: number}) => `
    width: 100%;
    position: relative;
    height: ${mobile ? "250px" : "550px"};
    img {
        object-fit: cover;
        object-position: center -40px;
    }
    > div {
        color: #f8f9fa;
        position: absolute;
        top: 35%;
        left: 8%;
        .title {
            font-size: ${mobile ? '32px' : '50px'};
        }
        .subtitle {
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
  `
);
const SubSection = styled("div")(
  ({ mobile }: { mobile: number }) => `
    width: 100%;
    display: flex;
    flex-direction: ${mobile ? "column" : "row"};
    gap: 10px;
  `
);
const SubItem = styled("div")(
  ({ mobile }: { mobile: number }) => `
    width: ${mobile ? "100%" : "50%"};
    height: ${mobile ? "200px" : "300px"};
    overflow: hidden;
    position: relative;
    img {
        object-fit: cover;
        object-position: center center;
        transition: all 0.2s;
    }
    .hover-box{
        width: 100%;
        height: 100%;
        display: ${mobile ? 'inline-flex' : 'none'};
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: absolute;
        background: ${mobile ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.55)'};
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
  `
);

function BannerWall() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Root mobile={Number(isMobile)}>
      <MainSection mobile={Number(isMobile)}>
        <Image
          src="/images/Banner01.png"
          alt="春夏新品上市"
          sizes="(max-width: 768px) 100vw"
          priority
          fill
        />
        <div>
          <div className="title">Heirloom Classics</div>
          <div className="subtitle">春夏新品上市</div>
          <Button variant="outlined">SHOP NOW</Button>
        </div>
      </MainSection>
      <SubSection mobile={Number(isMobile)}>
        <SubItem mobile={Number(isMobile)}>
          <Image
            src="/images/Banner02.png"
            alt="春夏新品上市"
            priority
            sizes="(max-width: 768px) 100vw"
            fill
          />
          <div className="hover-box">
            <div className="title">NEW ARRIVAL</div>
            <div className="content">美好新生活提案，春夏新品上市</div>
          </div>
        </SubItem>
        <SubItem mobile={Number(isMobile)}>
          <Image
            src="/images/Banner03.png"
            alt="春夏新品上市"
            priority
            sizes="(max-width: 768px) 100vw"
            fill
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
