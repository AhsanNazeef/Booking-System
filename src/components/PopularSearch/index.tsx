import { Box, Typography } from "@mui/material";
import { popularSearchStyles } from "./styles";

const PopularSearch = (): JSX.Element => {
  const cities = [
    "Istanbul",
    "Dubai",
    "Miami",
    "Chicago",
    "Dallas",
    "Havana",
    "Berlin",
    "London",
    "Ankara",
    "Orlando",
    "Cape Town",
    "Santroni",
    "Madrid",
    "Lisbon",
    "New Orleans",
  ];

  return (
    <Box sx={popularSearchStyles.container}>
      <Typography sx={popularSearchStyles.heading}>Popular Search</Typography>
      <Box sx={popularSearchStyles.citiesContainer}>
        {cities.map((city, index) => (
          <Box key={index} sx={popularSearchStyles.citiesWrapper}>
            <Typography sx={popularSearchStyles.citiesText}>{city}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PopularSearch;
