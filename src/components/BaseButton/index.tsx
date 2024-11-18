import { Button, ButtonProps } from "@mui/material";
import { styles } from "./styles";

const BaseButton = (props: ButtonProps) => {
  return <Button {...props} sx={{ ...styles.baseButton }} />;
};

export default BaseButton;
