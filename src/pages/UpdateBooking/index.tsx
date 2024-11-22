import { Box, Typography } from "@mui/material";
import { bookingConfirmationStyles } from "../BookingConfirmation/styles";
import coverPicture from "../../assets/Images/cover2.png";
import BookingForm from "../../components/BookingForm";

const UpdateBooking = () => {
  return (
    <Box sx={bookingConfirmationStyles.container}>
      <Box sx={bookingConfirmationStyles.sectionOne}>
        <Typography sx={bookingConfirmationStyles.title}>
          Update Your Booking
        </Typography>
        <Box sx={bookingConfirmationStyles.formWrapper}>
          <BookingForm
            defaultValues={{
              name: "John Doe",
              email: "jondoe@gmail.com",
              phone: "+92234567890",
              numAdults: 2,
              numChildren: 1,
              paymentMethod: "visa",
            }}
            type="update"
          />
        </Box>
      </Box>
      <Box sx={bookingConfirmationStyles.sectionTwo}>
        <img loading="lazy" src={coverPicture} alt="cover-photo" />
      </Box>
    </Box>
  );
};

export default UpdateBooking;
