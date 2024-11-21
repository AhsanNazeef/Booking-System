export const exploreToursStyles = {
  coverImage: {
    zIndex: -1,
    width: "100%",
    height: "55vh",
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "48px",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingX: {
      xs: "16px",
      md: "64px",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 1050,
    gap: "48px",
  },
};
