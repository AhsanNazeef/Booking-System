import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { scheduleCardStyles } from "./styles";
import {
  CloudOutlined,
  FiberManualRecord,
  WbSunnyOutlined,
} from "@mui/icons-material";

type ScheduleCardProps = {
  dayTitle: string;
  temperature: string;
  activities: string[];
  weather: "sunny" | "cloudy";
};

const ScheduleCard = ({
  dayTitle,
  temperature,
  activities,
  weather,
}: ScheduleCardProps) => {
  return (
    <Box sx={scheduleCardStyles.container}>
      <Box sx={scheduleCardStyles.contentOneContainer}>
        <Typography sx={scheduleCardStyles.textPrimary}>{dayTitle}</Typography>
        <Box sx={scheduleCardStyles.innerFlex}>
          {weather === "cloudy" ? (
            <CloudOutlined sx={scheduleCardStyles.weatherIcon} />
          ) : (
            <WbSunnyOutlined sx={scheduleCardStyles.weatherIcon} />
          )}
          <Typography sx={scheduleCardStyles.textPrimary}>
            {temperature}
          </Typography>
        </Box>
      </Box>
      <List disablePadding>
        {activities?.map((activity, index) => {
          return (
            <ListItem id={index.toString()} disablePadding>
              <ListItemIcon sx={{ minWidth: "15px" }}>
                <FiberManualRecord sx={scheduleCardStyles.dotIcon} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography sx={scheduleCardStyles.textSecondary}>
                    {activity}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ScheduleCard;
