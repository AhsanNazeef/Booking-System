import CoverImage from "../../assets/Images/Cover.png";
import { exploreToursStyles } from "./styles";
import { Box } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import PopularSearch from "../../components/PopularSearch";

const ExploreTours = () => {
  return (
    <Box>
      <Box sx={exploreToursStyles.coverImage}>
        <img src={CoverImage} alt="tour" />
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <SearchBar />
        <PopularSearch />
      </Box>
    </Box>
  );
};

export default ExploreTours;
