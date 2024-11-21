import { Box, Typography } from "@mui/material";
import { homeStyles } from "./styles";
import BaseLink from "../../components/BaseLink";
import HomeImageGrid from "../../components/HomeImageGrid";
import lineBelow from "../../assets/Images/line-below.svg";

const Home = () => {
  return (
    <Box sx={homeStyles.container}>
      <Box sx={homeStyles.leftContentWrapper}>
        <Box sx={homeStyles.textWrapper}>
          <Typography sx={homeStyles.heading}>
            <Typography
              sx={{ ...homeStyles.heading, ...homeStyles.headingFirstWord }}
              component="span"
            >
              Explore
              <img src={lineBelow} alt="line below" />
            </Typography>
            The New World With Tourbay
          </Typography>
          <Typography sx={homeStyles.secondaryText}>
            No matter where in the world you want to go, we can help get you
            there and make your tour a stupendous memory.
          </Typography>
        </Box>
        <BaseLink to="explore-tours" sx={homeStyles.button}>
          Explore Now
        </BaseLink>
      </Box>
      <HomeImageGrid />
    </Box>
  );
};

export default Home;
