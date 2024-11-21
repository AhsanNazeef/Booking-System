export const bookingConfirmationStyles = {
  container: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: {
      xs: "32px",
      lg: 0,
    },
    margin: {
      xs: "126px 16px 0 16px",
      md: "126px 0 0 64px",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: {
      xs: "24px",
      md: "32px",
      lg: "40px",
    },
    color: "#202445",
  },
  sectionOne: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "32px",
  },
  sectionTwo: {
    display: {
      xs: "none",
      md: "flex",
    },
    flex: 1,
    height: "calc(100vh - 126px)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  formWrapper: {
    width: {
      xs: "100%",
      lg: "75%",
    },
  },
};
