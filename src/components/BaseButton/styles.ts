import { SxProps } from "@mui/material";

export const styles = {
  baseButton: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: {
      sm: "16px",
      md: "18px",
      lg: "20px",
    },
    fontWeight: 600,
    lineHeight: "normal",
    backgroundColor: "#f16b51",
    borderRadius: "12px",
    padding: {
      xs: "12px 10px",
      md: "12px 14px",
      lg: "12px 16px",
    },
    textTransform: "none",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#f16b10",
    },
    textDecoration: "none",
  } as SxProps,
};
