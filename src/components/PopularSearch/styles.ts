export const popularSearchStyles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginBottom: {
      xs: "40px",
      lg: 0,
    },
  },
  heading: {
    fontFamily: "Poppins",
    fontSize: {
      xs: "20px",
      lg: "24px",
    },
    fontStyle: "normal",
    fontWeight: 600,
    color: "#202445",
  },
  citiesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: {
      xs: "18px",
      lg: "32px",
    },
    justifyContent: "center",
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
    fontSize: {
      xs: "16px",
      lg: "20px",
    },
    color: "#787c9a",
    "&:hover": {
      color: "#f16b51",
    },
  },
};
