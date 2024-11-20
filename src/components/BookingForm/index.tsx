import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { MuiTelInput } from "mui-tel-input";
import BaseButton from "../BaseButton";
import { bookingFormStyles } from "./styles";
import { bookingFormValidationSchema } from "../../utils/helpers/validators";
import { ExpandMore } from "@mui/icons-material";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  numAdults: number;
  numChildren: number;
  paymentMethod: string;
}

interface BookingFormProps {
  defaultValues?: BookingFormData;
  onSubmit?: (data: BookingFormData) => void;
  type?: "update" | "create";
}

const BookingForm = ({
  defaultValues = {
    name: "",
    email: "",
    phone: "",
    numAdults: 1,
    numChildren: 0,
    paymentMethod: "",
  },
  type = "create",
  onSubmit = () => console.log("Form submitted:"),
}: BookingFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: joiResolver(bookingFormValidationSchema),
    defaultValues,
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={bookingFormStyles.formContainer}
    >
      <Box>
        <Typography sx={bookingFormStyles.label}>Name</Typography>
        <TextField
          {...register("name")}
          sx={bookingFormStyles.textField}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
        />
      </Box>
      <Box>
        <Typography sx={bookingFormStyles.label}>Email</Typography>
        <TextField
          {...register("email")}
          type="email"
          sx={bookingFormStyles.textField}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />
      </Box>
      <Box>
        <Typography sx={bookingFormStyles.label}>Phone</Typography>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <MuiTelInput
              inputMode="tel"
              value={value}
              onChange={onChange}
              sx={bookingFormStyles.textField}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              defaultCountry="US"
              fullWidth
            />
          )}
        />
      </Box>
      <Box sx={bookingFormStyles.twoContentWrapper}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={bookingFormStyles.label}>Number of Adults</Typography>
          <TextField
            {...register("numAdults")}
            type="number"
            sx={bookingFormStyles.textField}
            error={!!errors.numAdults}
            helperText={errors.numAdults?.message}
            fullWidth
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography sx={bookingFormStyles.label}>
            Number of Children
          </Typography>
          <TextField
            {...register("numChildren")}
            type="number"
            sx={bookingFormStyles.textField}
            error={!!errors.numChildren}
            helperText={errors.numChildren?.message}
            fullWidth
          />
        </Box>
      </Box>
      <Box>
        <Typography sx={bookingFormStyles.label}>Payment Method</Typography>
        <TextField
          {...register("paymentMethod")}
          select
          sx={bookingFormStyles.textField}
          error={!!errors.paymentMethod}
          helperText={errors.paymentMethod?.message}
          defaultValue={defaultValues.paymentMethod}
          SelectProps={{
            IconComponent: ExpandMore,
            sx: bookingFormStyles.dropdown,
          }}
          fullWidth
        >
          <MenuItem value="mastercard">Mastercard</MenuItem>
          <MenuItem value="visa">Visa</MenuItem>
        </TextField>
      </Box>
      <BaseButton type="submit">
        {type === "create" ? "Confirm" : "Update"}
      </BaseButton>
    </Box>
  );
};

export default BookingForm;
