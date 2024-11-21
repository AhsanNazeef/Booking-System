export const includedListStyles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 2fr",
    },
    gap: "16px",
    borderBottom: "1px solid #E1E1E1",
    paddingLeft: {
      xs: "16px",
      lg: "40px",
    },
    paddingY: {
      xs: "16px",
      md: "22px",
    },
  },
  textPrimary: {
    color: "202020",
    fontFamily: "Poppins",
    fontSize: {
      xs: "16px",
      md: "18px",
      lg: "20px",
    },
    fontWeight: 600,
  },
  textSecondary: {
    color: "#202020",
    fontFamily: "Poppins",
    fontSize: {
      xs: "16px",
      md: "18px",
      lg: "20px",
    },
    fontWeight: 400,
  },
  subSectionContainer: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
    gap: {
      xs: "16px",
      md: "24px",
    },
  },
  subSectionItems: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    alignItems: "center",
  },
  icon: {
    color: "#F16B51",
    fontSize: "20px",
  },
};
