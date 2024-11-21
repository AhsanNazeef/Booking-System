export const imageGridStyles = {
  gridWrapper: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(2, 1fr)",
      sm: "repeat(4, 1fr)",
    },
    gap: {
      xs: "8px",
      sm: "16px",
      md: "24px",
    },
  },
  gridItem: {
    height: "100%",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "8px",
    },
  },
  spanTwo: {
    gridColumn: "span 2",
    gridRow: "span 2",
  },
};
