export const bookingFormStyles = {
  formContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "18px",
      md: "32px",
    },
  },
  twoContentWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: {
      xs: "18px",
      md: "32px",
    },
    width: "100%",
  },
  label: {
    color: "#999",
    fontSize: {
      xs: "14px",
      md: "16px",
      lg: "18px",
    },
    fontWeight: 400,
    fontFamily: "Poppins",
  },
  textField: {
    width: "100%",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #e1e1e1",
      borderRadius: "12px",
      padding: 0,
    },
    "& .MuiInputBase-input": {
      padding: " 15px 24px",
      border: `none`,
      fontWeight: 500,
      fontSize: {
        xs: "14px",
        md: "16px",
      },
      fontFamily: "Poppins",
      lineHeight: "normal",
      fontStyle: "normal",
    },
    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #202445",
        outline: "none",
      },
    },
  },
  dropdown: {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #202445",
    },
    "& .MuiSelect-icon": {
      marginRight: "10px",
      "&.MuiSelect-iconOpen": {
        transform: "rotate(180deg)",
      },
    },
  },
};
