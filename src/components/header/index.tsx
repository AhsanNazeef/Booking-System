import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Collapse, IconButton, Link } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import Logo from "../../assets/Images/Logo.png";
import { headerStyles } from "./styles";

const navigationLinks = [
  { title: "Add Tour", path: "add-tour" },
  { title: "Book Tour", path: "book-tour" },
  { title: "My Tours", path: "my-tours" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
    <Link
      to="explore-more"
      component={RouterLink}
      sx={headerStyles.rightLink}
      onClick={isMobile ? handleMenuToggle : undefined}
    >
      Explore More
    </Link>
  );

  return (
    <>
      <Box sx={headerStyles.fixedContainer}>
        <Box sx={headerStyles.container}>
          <Link to="/" component={RouterLink}>
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
