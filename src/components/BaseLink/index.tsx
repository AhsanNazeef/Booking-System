import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Link, LinkProps } from "@mui/material";
import { styles } from "./styles";

const BaseLink = (props: RouterLinkProps & LinkProps) => {
  const { to, ...otherProps } = props;
  const defaultStyles = {
    ...styles.baseLink,
    ...props.sx,
  };

  return (
    <Link {...otherProps} to={to} sx={defaultStyles} component={RouterLink} />
  );
};

export default BaseLink;
