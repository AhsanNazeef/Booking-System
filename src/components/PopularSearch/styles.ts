export const popularSearchStyles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  heading: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    color: "#202445",
  },
  citiesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
    justifyContent: "center",
    maxWidth: 1050,
  },
  citiesWrapper: {
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "12px",
    border: "1px solid #e1e1e1",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  citiesText: {
    fontFamily: "Poppins, Helvetica",
    fontWeight: 400,
    fontSize: "20px",
    color: "#787c9a",
    "&:hover": {
      color: "#f16b51",
    },
  },
};
