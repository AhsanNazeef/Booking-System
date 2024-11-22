import { useNavigate } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { Home } from "@mui/icons-material";
import { notFoundStyles } from "./styles";
import BaseButton from "../../components/BaseButton";

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <Box sx={notFoundStyles.mainWrapper}>
      <Container maxWidth="sm">
        <Box sx={notFoundStyles.textWrapper}>
          <Typography variant="h1" sx={notFoundStyles.text404}>
            404
          </Typography>
          <Typography variant="h4" sx={notFoundStyles.textSecondary}>
            Page Not Found
          </Typography>
          <Typography variant="body1" sx={notFoundStyles.textTertiary}>
            The page you're looking for doesn't exist or has been moved.
          </Typography>
          <BaseButton startIcon={<Home />} onClick={handleRedirect}>
            Back to Home
          </BaseButton>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
