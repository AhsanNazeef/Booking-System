import CoverImage from "../../assets/Images/Cover.png";
import { exploreToursStyles } from "./styles";
import { Box } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import PopularSearch from "../../components/PopularSearch";

const ExploreTours = () => {
  return (
    <>
      <Box sx={exploreToursStyles.coverImage}>
        <img src={CoverImage} alt="tour" />
      </Box>
      <Box sx={exploreToursStyles.container}>
        <Box sx={exploreToursStyles.content}>
          <SearchBar />
          <PopularSearch />
        </Box>
      </Box>
    </>
  );
};

export default ExploreTours;
