import mainBg from "../../assets/Images/mainBg.png";
import lineBelow from "../../../public/vite.svg";

export const homeStyles = {
  container: {
    position: "relative",
    backgroundImage: `url(${mainBg})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    height: {
      xs: "100%",
      lg: "100vh",
    },
    zIndex: 10,
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    backgroundSize: "contain",
    gap: "30px",
  },
  leftContentWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: {
      xs: "120px",
      lg: "187px",
    },
    marginX: {
      xs: "16px",
      md: "64px",
      lg: "64px 0px",
    },
    flex: 1,
    gap: "40px",
    alignItems: {
      xs: "center",
      lg: "flex-start",
    },
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    alignItems: {
      xs: "center",
      lg: "flex-start",
    },
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#202445",
    fontSize: {
      xs: "30px",
      sm: "48px",
      md: "56px",
      lg: "64px",
    },
    textAlign: {
      xs: "center",
      lg: "left",
    },
    lineHeight: "normal",
  },
  headingFirstWord: {
    display: "inline",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      bottom: {
        xs: "-30px",
        sm: "-20px",
      },
      left: 0,
      width: "100%",
      height: "40px",
      backgroundImage: `url(${lineBelow})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      zIndex: -1,
    },
  },
  secondaryText: {
    fontFamily: "Poppins",
    fontSize: {
      xs: "16px",
      sm: "18px",
      md: "20px",
      lg: "24px",
    },
    textAlign: {
      xs: "center",
      lg: "left",
    },
    fontWeight: 400,
    width: "75%",
  },
  button: {
    width: "fit-content",
  },
};
