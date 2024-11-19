export const headerStyles = {
  fixedContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 12,
  },
  container: {
    zIndex: 11,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginX: {
      xs: "16px",
      md: "64px",
    },
    marginY: "16px",
    position: "relative",
  },
  headerSpacer: {
    height: {
      xs: "64px",
      md: "80px",
    },
  },
  navlinksWrapper: {
    display: {
      xs: "none",
      md: "flex",
    },
    gap: "60px",
    ".MuiCollapse-root &": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px 16px",
      gap: "24px",
      backgroundColor: "rgba(255,255,255,0.98)",
    },
  },
  navlinks: {
    color: "#202445",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "normal",
    textDecoration: "none",
    transition: "color 0.3s ease",
    position: "relative",
    "&:hover": {
      color: "#f16b51",
    },
    ".MuiCollapse-root &": {
      textAlign: "center",
      width: "100%",
      padding: "8px 0",
    },
  },
  activeNavlink: {
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-4px",
      left: 0,
      width: "100%",
      height: "2px",
      backgroundColor: "#f16b51",
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
      transition: "transform 0.3s ease-in-out",
    },
  },
  rightLink: {
    display: {
      xs: "none",
      md: "block",
    },
    ".MuiCollapse-root &": {
      display: "block",
      width: "90%",
      textAlign: "center",
      marginTop: "8px",
    },
  },
  menuButton: {
    display: {
      xs: "block",
      md: "none",
    },
    color: "#202445",
    "&:hover": {
      color: "#f16b51",
    },
  },
  mobileMenu: {
    width: "100%",
    height: "calc(100vh - 64px)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 999,
    borderTop: "1px solid rgba(0,0,0,0.1)",
  },
};
