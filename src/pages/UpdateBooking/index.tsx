import { Box, Typography } from "@mui/material";
import { addTourStyles } from "../AddTour/styles";
import coverPicture from "../../assets/Images/cover2.png";
import BookingForm from "../../components/BookingForm";

const UpdateBooking = () => {
  return (
    <Box sx={addTourStyles.container}>
      <Box sx={addTourStyles.sectionOne}>
        <Typography sx={addTourStyles.title}>Update Your Booking</Typography>
        <Box sx={addTourStyles.formWrapper}>
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
      <Box sx={addTourStyles.sectionTwo}>
        <img loading="lazy" src={coverPicture} alt="cover-photo" />
      </Box>
    </Box>
  );
};

export default UpdateBooking;
