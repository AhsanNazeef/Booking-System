export const headerStyles = {
  fixedContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
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
    "&:hover": {
      color: "#f16b51",
    },
    ".MuiCollapse-root &": {
      textAlign: "center",
      width: "100%",
      padding: "8px 0",
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
    backgroundColor: "#fff",
    borderTop: "1px solid rgba(0,0,0,0.1)",
  },
};
