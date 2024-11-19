import { Button, ButtonProps } from "@mui/material";
import { styles } from "./styles";

const BaseButton = (props: ButtonProps) => {
  const defaultStyles = {
    ...styles.baseButton,
    ...props.sx,
  };
  return <Button {...props} sx={defaultStyles} />;
};

export default BaseButton;
