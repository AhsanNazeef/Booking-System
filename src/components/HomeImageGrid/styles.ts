export const homeImageGridStyles = {
  imageWrapper: {
    display: "flex",
    flex: 1,
    position: "relative",
    marginRight: {
      xs: "16px",
      md: "64px",
      lg: "18px",
    },
    marginLeft: {
      xs: "16px",
      md: "64px",
    },
  },
  gridContainer: {
    position: {
      xs: "relative",
      sm: "relative",
      md: "relative",
      lg: "absolute",
      xl: "absolute",
    },
    bottom: 0,
    right: 0,
    width: {
      xs: "100%",
      lg: "unset",
    },
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      lg: "330px 330px",
    },
    gridTemplateRows: "266px 266px",
    marginBottom: "100px",
    justifyContent: "bottom",
    gap: "24px",
  },
  gridItem: {
    borderRadius: "20px",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "12px",
    },
  },
  spanTwoRows: {
    gridRow: "span 2",
  },
};
