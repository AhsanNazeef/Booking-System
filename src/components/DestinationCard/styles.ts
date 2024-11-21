export const cardStyles = {
  container: {
    borderRadius: "10px",
    boxShadow: "0px 0px 4px rgba(159,164,189,0.3)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "white",
    overflow: "visible",
    position: "relative",
  },
  imageWrapper: {
    width: "100%",
    height: {
      xs: "300px",
      md: "225px",
    },
    borderRadius: "10px 10px 0 0",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  cardContent: {
    marginX: "24px",
    marginBottom: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  title: {
    color: "#000000",
    fontFamily: "Poppins",
    fontSize: {
      xs: "16px",
      lg: "20px",
    },
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
  },
  description: {
    color: "#999999",
    fontFamily: "Poppins",
    fontSize: {
      xs: "14px",
      lg: "16px",
    },
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
  },
  destinationDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: {
      xs: "0px",
      lg: "54px",
    },
    justifyContent: {
      xs: "space-between",
      lg: "flex-start",
    },
  },
  detailRow: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    alignItems: "center",
  },
  text: {
    color: "#797C9A",
    fontFamily: "Poppins",
    fontSize: {
      xs: "14px",
      lg: "16px",
    },
    fontWeight: 400,
  },
  icon: {
    color: "#797C9A",
    padding: "3px",
    backgroundColor: "#F5F5F5",
    borderRadius: "50%",
  },
  myTours: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
    width: "100%",
    gap: {
      xs: "16px",
      md: "10px",
      lg: "20px",
    },
  },
  deleteIcon: {
    color: "#FF5C5C",
    cursor: "pointer",
    fontSize: {
      xs: "30px",
      md: "25px",
      lg: "35px",
    },
  },
  toursButton: {
    paddingX: "28px",
    width: "100%",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
    width: "90%",
    gap: {
      xs: "16px",
      md: "10px",
      lg: "20px",
    },
  },
  textContentWrapper: {
    position: {
      xs: "relative",
      md: "absolute",
    },
    left: 0,
    right: 0,
    bottom: 0,
    padding: {
      xs: 0,
      md: "16px",
    },
    width: "100%",
    paddingTop: 0,
    backgroundColor: "white",
    borderRadius: "0 0 10px 10px",
    boxShadow: {
      xs: "none",
      md: "4px 4px 4px -4px rgba(159,164,189,0.3), -4px 4px 4px -4px rgba(159,164,189,0.3)",
    },

    transform: {
      xs: "translateY(0)",
      md: "translateY(30%)",
    },
    zIndex: {
      xs: 1,
      md: -1,
    },
  },
};
