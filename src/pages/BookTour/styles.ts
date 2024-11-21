export const bookTourStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: {
      xs: "126px 16px 16px 16px",
      md: "126px 64px 64px  64px",
    },
    gap: "32px",
  },
  headingWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    gap: {
      xs: "16px",
      md: "0",
    },
    justifyContent: "space-between",
  },
  heading: {
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
  filters: {
    display: "inline-flex",
    height: "fit-content",
    gap: "8px",
    alignItems: "center",
    justifyContent: "center",
    padding: {
      xs: "8px 12px",
      md: "12px 16px",
    },
    border: "1px solid #E1E1E1",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "color 0.3s ease",
    color: "#202445",
    "&:hover": {
      color: "#f16b51",
    },
  },
  text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: {
      xs: "14px",
      md: "16px",
      lg: "20px",
    },
  },
  cardsWrapper: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
      xl: "1fr 1fr 1fr 1fr",
    },
    gap: {
      xs: "24px",
      sm: "24px",
      md: "32px",
      xl: "54px",
    },
  },
};
