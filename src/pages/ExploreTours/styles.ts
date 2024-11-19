export const exploreToursStyles = {
  coverImage: {
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
  },
};
