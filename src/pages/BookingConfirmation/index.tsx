import { Box, Typography } from "@mui/material";
import { bookingConfirmationStyles } from "./styles";
import coverPicture from "../../assets/Images/cover2.png";
import BookingForm from "../../components/BookingForm";

const BookingConfirmation = () => {
  return (
    <Box sx={bookingConfirmationStyles.container}>
      <Box sx={bookingConfirmationStyles.sectionOne}>
        <Typography sx={bookingConfirmationStyles.title}>
          Confirm Your Booking
        </Typography>
        <Box sx={bookingConfirmationStyles.formWrapper}>
          <BookingForm />
        </Box>
      </Box>
      <Box sx={bookingConfirmationStyles.sectionTwo}>
        <img loading="lazy" src={coverPicture} alt="cover-photo" />
      </Box>
    </Box>
  );
};

export default BookingConfirmation;
