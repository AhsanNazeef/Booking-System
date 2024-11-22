export const searchBarStyles = {
  container: {
    width: {
      xs: "100%",
      sm: "90%",
      md: "70%",
      lg: "100%",
    },
    height: {
      xs: "fit-content",
      lg: "130px",
    },
    marginTop: {
      xs: -18,
      lg: -8,
    },
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderRadius: 4,
    boxShadow: "0px 0px 12px rgba(159, 164, 189, 0.3)",
    padding: 3,
    display: "flex",
    alignItems: {
      xs: "flex-start",
      lg: "center",
    },
    gap: {
      xs: 1,
      lg: 0,
    },
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    justifyContent: "space-between",
  },
  contentWrapper: {
    display: "flex",
    flex: 1,
    gap: 2,
  },
  iconStyles: {
    fontSize: "32px",
    color: "#75778b",
    backgroundColor: "#f5f5f5",
    padding: "5px",
    borderRadius: "12px",
  },
  heading: {
    color: "#202445",
    fontFamily: "Poppins",
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "18px",
      lg: "20px",
    },
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  input: {
    padding: 0,
    "& .MuiOutlinedInput-notchedOutline": {
      border: `none`,
      padding: 0,
    },
    "& .MuiInputBase-input": {
      padding: 0,
      border: `none`,
      fontWeight: 500,
      fontSize: {
        xs: "12px",
        sm: "14px",
        lg: "16px",
      },
      fontFamily: "Poppins",
      lineHeight: "normal",
      fontStyle: "normal",
      color: "#202445",
      "&::placeholder": {
        opacity: 1,
        color: "#999",
        fontWeight: 400,
      },
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
  },
  divider: {
    width: "1px",
    height: "100%",
    backgroundColor: "#e0e0e0",
    mx: 2,
  },
  buttonOne: {
    color: "#999",
    fontFamily: "Poppins",
    fontSize: {
      xs: "12px",
      sm: "14px",
      lg: "16px",
    },
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    padding: 0,
    textTransform: "unset",
    position: "absolute",
    top: 0,
  },
  buttonTwo: {
    backgroundColor: "#F16B51",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    width: {
      xs: "100%",
      lg: 54,
    },
    height: {
      xs: 45,
      lg: 87,
    },
    marginTop: {
      xs: 2,
      lg: 0,
    },
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e55a3c",
    },
  },
  dateRangePicker: {
    "& .rs-input-group": {
      color: "#999999",
      "& .rs-input-group-addon": {
        display: "none",
      },
      "& .rs-input": {
        color: "#202445",
        fontFamily: "Poppins",
        fontSize: {
          xs: "12px",
          sm: "14px",
          lg: "16px",
        },
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        padding: 0,
        width: "fit-content",
        height: "fit-content",
        "&::placeholder": {
          color: "#999",
          fontWeight: 400,
        },
      },
      "&:hover": {
        border: "1px solid transparent",
        outline: "none",
      },
      "&:focus-within": {
        pointerEvents: "none",
        border: "1px solid transparent",
        outline: "none",
      },
    },
  },
  selectDropdown: {
    width: {
      xs: "110px",
      sm: "130px",
      lg: "160px",
    },
    color: "#fff",
    "& .MuiInputBase-input": {
      padding: 0,
      border: `none`,
      fontWeight: 500,
      fontSize: {
        xs: "12px",
        sm: "14px",
        lg: "16px",
      },
      fontFamily: "Poppins",
      lineHeight: "normal",
      fontStyle: "normal",
      color: "#202445",
      display: "hidden",
      "&::placeholder": {
        opacity: 1,
        color: "#999",
        fontWeight: 400,
        alignItem: "center",
        justifyContent: "center",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `none`,
      padding: 0,
    },
    "& .MuiSelect-icon": {
      color: "#202445",
      fontSize: {
        xs: "20px",
        sm: "24px",
        lg: "35px",
      },
    },
    "&:hover": {
      ":before": {
        borderBottom: `1px solid red`,
      },
      color: "red",
    },
  },
  dropdownMenuStyles: {
    "& .MuiMenu-paper": {
      backgroundColor: "#fff",
      color: "#505050",
    },
    "& .MuiMenuItem-root:hover": {
      backgroundColor: "rgba(241, 107, 81, 0.20)",
      color: "#505050",
    },
    "& .MuiMenuItem-root.Mui-selected": {
      backgroundColor: "rgba(241, 107, 81, 0.20)",
      color: "#505050",
      "&:hover": {
        backgroundColor: "rgba(241, 107, 81, 0.30)",
      },
    },
  },
  searchIcon: {
    fontSize: {
      xs: "30px",
      sm: "35px",
      lg: "40px",
    },
  },
};
