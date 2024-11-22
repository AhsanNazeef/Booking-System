import {
  AttachMoneyOutlined,
  CalendarTodayOutlined,
  ExpandMore,
  LocationOnOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import { searchBarStyles } from "./styles";
import { DateRangePicker } from "rsuite";
import { useState } from "react";

const { beforeToday } = DateRangePicker;

const SearchBar = () => {
  const [priceRange, setPriceRange] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event: SelectChangeEvent) => {
    setPriceRange(event.target.value as string);
  };

  return (
    <Box sx={searchBarStyles.container}>
      <Box sx={searchBarStyles.contentWrapper}>
        <LocationOnOutlined sx={searchBarStyles.iconStyles} />
        <Box>
          <Typography sx={searchBarStyles.heading}>Location</Typography>
          <OutlinedInput
            sx={searchBarStyles.input}
            placeholder="Where you want to go?"
          />
        </Box>
      </Box>
      <Box sx={searchBarStyles.divider} />
      <Box sx={searchBarStyles.contentWrapper}>
        <CalendarTodayOutlined sx={searchBarStyles.iconStyles} />
        <Box>
          <Typography sx={searchBarStyles.heading}>Choose Date</Typography>
          <Box sx={searchBarStyles.dateRangePicker}>
            <DateRangePicker
              appearance="subtle"
              placeholder="Choose Here"
              size="lg"
              showOneCalendar={isSmallScreen}
              shouldDisableDate={beforeToday()}
              character=" - "
              format="dd MMM"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={searchBarStyles.divider} />
      <Box sx={searchBarStyles.contentWrapper}>
        <AttachMoneyOutlined sx={searchBarStyles.iconStyles} />
        <Box>
          <Typography sx={searchBarStyles.heading}>Price Range</Typography>
          <Box sx={{ position: "relative" }}>
            {!priceRange && (
              <Button sx={searchBarStyles.buttonOne}>Choose Here</Button>
            )}
            <Select
              value={priceRange}
              onChange={handleChange}
              sx={searchBarStyles.selectDropdown}
              IconComponent={ExpandMore}
              MenuProps={{
                sx: searchBarStyles.dropdownMenuStyles,
              }}
            >
              <MenuItem value={1}>$50 - $200</MenuItem>
              <MenuItem value={2}>$200 - $400</MenuItem>
              <MenuItem value={3}>$400 - $500</MenuItem>
              <MenuItem value={4}>$500 - $750</MenuItem>
              <MenuItem value={5}>$750 - $1000</MenuItem>
              <MenuItem value={6}>$1000 above</MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>
      <Button sx={searchBarStyles.buttonTwo}>
        <SearchOutlined sx={searchBarStyles.searchIcon} />
      </Button>
    </Box>
  );
};

export default SearchBar;
