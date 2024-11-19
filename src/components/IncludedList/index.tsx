import { CheckCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { includedListStyles } from "./styles";
import { includedListDetails, includedSubItems } from "../../constants";

const IncludedList = () => {
  return (
    <Box sx={includedListStyles.mainContainer}>
      {includedListDetails.map((detail, index) => (
        <Box key={index} sx={includedListStyles.gridContainer}>
          <Typography sx={includedListStyles.textPrimary}>
            {detail.label}
          </Typography>
          <Typography sx={includedListStyles.textSecondary}>
            {detail.value}
          </Typography>
        </Box>
      ))}
      <Box sx={includedListStyles.gridContainer}>
        <Typography sx={includedListStyles.textPrimary}>Included</Typography>
        <Box sx={includedListStyles.subSectionContainer}>
          {includedSubItems.map((item, index) => (
            <Box key={index} sx={includedListStyles.subSectionItems}>
              <CheckCircle sx={includedListStyles.icon} />
              <Typography sx={includedListStyles.textSecondary}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default IncludedList;
