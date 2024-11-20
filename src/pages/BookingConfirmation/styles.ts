export const bookingConfirmationStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "64px",
    marginTop: "126px",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "40px",
    color: "#202445",
  },
  sectionOne: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "32px",
  },
  sectionTwo: {
    display: "flex",
    flex: 1,
    height: "calc(100vh - 126px)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  formWrapper: {
    width: "70%",
  },
};
