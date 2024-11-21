export const myToursStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: {
      xs: "126px 16px 16px 16px",
      md: "126px 64px 64px  64px",
    },
    gap: "32px",
  },
  headingWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: {
      xs: "24px",
      md: "32px",
      lg: "40px",
    },
    color: "#202445",
  },
  cardsWrapper: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
      xl: "1fr 1fr 1fr 1fr",
    },
    gap: {
      xs: "24px",
      sm: "24px",
      md: "32px",
      xl: "54px",
    },
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: "calc(100% - 32px)",
      sm: "calc(100% - 64px)",
      md: "unset",
    },
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: {
      xs: "20px 20px",
      sm: "24px 32px",
    },
    gap: "32px",
    display: "flex",
    flexDirection: "column",
  },
  modalTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    color: "#F83030",
  },
  modalDescription: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    color: "#404040",
  },
  modalTextWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  buttomsWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column-reverse",
      sm: "row",
    },

    gap: "10px",
    justifyContent: "flex-end",
  },
  cancelButton: {
    color: "#999",
    backgroundColor: "transparent",
    border: "1px solid #999",
    fontWeight: 500,
    paddingX: "24px",
    "&:hover": {
      backgroundColor: "#999",
      color: "#fff",
    },
  },
  deleteButton: {
    color: "#fff",
    backgroundColor: "#F83030",
    paddingX: "24px",
    fontWeight: 500,
    "&:hover": {
      color: "#F83030",
      background: "#fff",
      outline: "1px solid #F83030",
    },
  },
};
