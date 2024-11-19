export const bookTourStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginX: "64px",
    marginTop: "126px",
    marginBottom: "64px",
    gap: "32px",
  },
  headingWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "40px",
    color: "#202445",
  },
  filters: {
    display: "inline-flex",
    height: "fit-content",
    gap: "8px",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
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
    fontSize: "20px",
  },
  cardsWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "54px",
  },
};
