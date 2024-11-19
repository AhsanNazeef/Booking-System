import {
  AttachMoneyRounded,
  PlaceOutlined,
  QueryBuilderRounded,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import ImageGrid from "../../components/ImageGrid";
import { destinationDetailsStyles } from "./styles";
import { gridImages, schedule, textContent } from "../../constants";
import IncludedList from "../../components/IncludedList";
import BaseButton from "../../components/BaseButton";
import ScheduleCard from "../../components/ScheduleCard";

const DestinationDetails = () => {
  return (
    <Box sx={destinationDetailsStyles.container}>
      <Box sx={destinationDetailsStyles.topContentWrapper}>
        <Box sx={destinationDetailsStyles.headingContainer}>
          <Typography sx={destinationDetailsStyles.heading}>
            Pérez Art Museum Miami
          </Typography>
          <Box sx={destinationDetailsStyles.destinationDetails}>
            <Box sx={destinationDetailsStyles.detailRow}>
              <PlaceOutlined sx={destinationDetailsStyles.icon} />
              <Typography sx={destinationDetailsStyles.text}>Miami</Typography>
            </Box>
            <Box sx={destinationDetailsStyles.detailRow}>
              <AttachMoneyRounded sx={destinationDetailsStyles.icon} />
              <Typography sx={destinationDetailsStyles.text}>
                $50 - $200
              </Typography>
            </Box>
            <Box sx={destinationDetailsStyles.detailRow}>
              <QueryBuilderRounded sx={destinationDetailsStyles.icon} />
              <Typography sx={destinationDetailsStyles.text}>3 Days</Typography>
            </Box>
          </Box>
        </Box>
        <ImageGrid images={gridImages} />
      </Box>
      <Box sx={destinationDetailsStyles.descriptionContainer}>
        {textContent.map((text, index) => (
          <Typography key={index} sx={destinationDetailsStyles.description}>
            {text}
          </Typography>
        ))}
      </Box>
      <Box sx={destinationDetailsStyles.featuresContainer}>
        <Typography sx={destinationDetailsStyles.heading}>
          What's included
        </Typography>
        <IncludedList />
      </Box>
      <Box sx={destinationDetailsStyles.schedule}>
        <Typography sx={destinationDetailsStyles.heading}>
          Itinerary Schedule
        </Typography>
        <Box sx={destinationDetailsStyles.scheduleGrid}>
          {schedule.map((day, index) => (
            <ScheduleCard
              key={index}
              dayTitle={day.day}
              temperature={day.temperature}
              activities={day.activities}
              weather={day.weather as "sunny" | "cloudy"}
            />
          ))}
        </Box>
      </Box>
      <Box sx={destinationDetailsStyles.buttonContainer}>
        <BaseButton sx={{ width: "330px" }}>Book Now</BaseButton>
      </Box>
    </Box>
  );
};
export default DestinationDetails;
