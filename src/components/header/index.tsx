import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Collapse, IconButton, Link } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import Logo from "../../assets/Images/Logo.png";
import { headerStyles } from "./styles";
import BaseLink from "../BaseLink";

const navigationLinks = [
  { title: "Add Tour", path: "add-tour" },
  { title: "Book Tour", path: "book-tour" },
  { title: "My Tours", path: "my-tours" },
];

const Header = () => {
  const [showRightButton, setShowRightButton] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (location.pathname === "/explore-tours") {
      return setShowRightButton(false);
    }
    setShowRightButton(true);
  }, [location.pathname]);

  const renderNavigationLinks = (isMobile = false) =>
    navigationLinks.map(({ title, path }) => (
      <Link
        key={path}
        to={path}
        component={RouterLink}
        sx={headerStyles.navlinks}
        onClick={isMobile ? handleMenuToggle : undefined}
      >
        {title}
      </Link>
    ));

  const renderExploreMore = (isMobile = false) => (
    <BaseLink
      to="explore-tours"
      sx={{
        ...headerStyles.rightLink,
        ...(!showRightButton
          ? { visibility: "hidden" }
          : { visibility: "visible" }),
      }}
      onClick={isMobile ? handleMenuToggle : undefined}
    >
      Explore Now
    </BaseLink>
  );

  return (
    <>
      <Box sx={headerStyles.fixedContainer}>
        <Box sx={headerStyles.container}>
          <Link to="/" component={RouterLink} sx={headerStyles.navlinks}>
            <img src={Logo} alt="logo" />
          </Link>
          <Box sx={headerStyles.navlinksWrapper}>{renderNavigationLinks()}</Box>
          {renderExploreMore()}
          <IconButton
            sx={headerStyles.menuButton}
            onClick={handleMenuToggle}
            aria-label="toggle menu"
          >
            {mobileOpen ? <Close /> : <Menu />}
          </IconButton>
        </Box>
        <Collapse in={mobileOpen}>
          <Box sx={headerStyles.mobileMenu}>
            <Box sx={headerStyles.navlinksWrapper}>
              {renderNavigationLinks(true)}
              {renderExploreMore(true)}
            </Box>
          </Box>
        </Collapse>
      </Box>
      {/* <Box sx={headerStyles.headerSpacer} /> */}
    </>
  );
};

export default Header;
