import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { homeStyles } from "./styles";
import BaseLink from "../../components/BaseLink";
import ImageOne from "../../assets/Images/ImgOne.png";
import ImageTwo from "../../assets/Images/ImgTwo.png";
import ImageThree from "../../assets/Images/ImgThree.png";

const Home = () => {
  return (
    <>
      <Header />
      <Box sx={homeStyles.container}>
        <Box sx={homeStyles.leftContentWrapper}>
          <Box sx={homeStyles.textWrapper}>
            <Typography sx={homeStyles.heading}>
              <Typography
                sx={{ ...homeStyles.heading, ...homeStyles.headingFirstWord }}
              >
                Explore
              </Typography>{" "}
              The New World With Tourbay
            </Typography>
            <Typography sx={homeStyles.secondaryText}>
              No matter where in the world you want to go, we can help get you
              there and make your tour a stupendous memory.
            </Typography>
          </Box>
          <BaseLink to="explore-now" sx={homeStyles.button}>
            Explore Now
          </BaseLink>
        </Box>
        <Box sx={homeStyles.imageWrapper}>
          <Box sx={homeStyles.gridContainer}>
            <Box sx={{ ...homeStyles.gridItem, ...homeStyles.spanTwoRows }}>
              <img src={ImageOne} alt="" />
            </Box>
            <Box sx={homeStyles.gridItem}>
              <img src={ImageTwo} alt="" />
            </Box>
            <Box sx={homeStyles.gridItem}>
              <img src={ImageThree} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
