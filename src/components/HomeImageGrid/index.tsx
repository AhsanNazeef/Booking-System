import { Box } from "@mui/material";
import { homeImageGridStyles } from "./styles";
import ImageOne from "../../assets/Images/ImgOne.png";
import ImageTwo from "../../assets/Images/ImgTwo.png";
import ImageThree from "../../assets/Images/ImgThree.png";

const HomeImageGrid = () => {
  return (
    <Box sx={homeImageGridStyles.imageWrapper}>
      <Box sx={homeImageGridStyles.gridContainer}>
        <Box
          sx={{
            ...homeImageGridStyles.gridItem,
            ...homeImageGridStyles.spanTwoRows,
          }}
        >
          <img src={ImageOne} alt="" />
        </Box>
        <Box sx={homeImageGridStyles.gridItem}>
          <img src={ImageTwo} alt="" />
        </Box>
        <Box sx={homeImageGridStyles.gridItem}>
          <img src={ImageThree} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeImageGrid;
