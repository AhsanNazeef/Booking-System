import { Box, Typography } from "@mui/material";
import { bookTourStyles } from "./styles";
import { FilterList } from "@mui/icons-material";
import DestinationCard from "../../components/DestinationCard";
import { destinations } from "../../constants";

const BookTour = () => {
  return (
    <Box sx={bookTourStyles.container}>
      <Box sx={bookTourStyles.headingWrapper}>
        <Typography sx={bookTourStyles.heading}>
          Top Destinations At “Miami”
        </Typography>
        <Box sx={bookTourStyles.filters}>
          <FilterList sx={bookTourStyles.text} />
          <Typography sx={bookTourStyles.text}>Filter</Typography>
        </Box>
      </Box>
      <Box sx={bookTourStyles.cardsWrapper}>
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            title={destination.title}
            description={destination.description}
            img={destination.image}
            price={destination.price}
            duration={destination.duration}
            type="allTours"
          />
        ))}
      </Box>
    </Box>
  );
};

export default BookTour;
