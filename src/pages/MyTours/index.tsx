import { Box, Typography } from "@mui/material";
import { myToursStyles } from "./styles";
import DestinationCard from "../../components/DestinationCard";
import { destinations } from "../../constants";

const MyTours = () => {
  return (
    <Box sx={myToursStyles.container}>
      <Box sx={myToursStyles.headingWrapper}>
        <Typography sx={myToursStyles.heading}>My Tours</Typography>
      </Box>
      <Box sx={myToursStyles.cardsWrapper}>
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            title={destination.title}
            description={destination.description}
            img={destination.image}
            price={destination.price}
            duration={destination.duration}
            type="myTours"
          />
        ))}
      </Box>
    </Box>
  );
};

export default MyTours;
