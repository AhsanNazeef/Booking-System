import { Box, Typography } from "@mui/material";
import { addTourStyles } from "./styles";
import coverPicture from "../../assets/Images/cover2.png";
import BookingForm from "../../components/BookingForm";

const AddTour = () => {
  return (
    <Box sx={addTourStyles.container}>
      <Box sx={addTourStyles.sectionOne}>
        <Typography sx={addTourStyles.title}>Confirm Your Booking</Typography>
        <Box sx={addTourStyles.formWrapper}>
          <BookingForm />
        </Box>
      </Box>
      <Box sx={addTourStyles.sectionTwo}>
        <img loading="lazy" src={coverPicture} alt="cover-photo" />
      </Box>
    </Box>
  );
};

export default AddTour;
