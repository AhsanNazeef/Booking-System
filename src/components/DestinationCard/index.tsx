import { Box, Typography } from "@mui/material";
import { cardStyles } from "./styles";
import BaseButton from "../BaseButton";
import { useState } from "react";
import {
  AttachMoneyRounded,
  DeleteOutlineOutlined,
  QueryBuilderRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type DestinationCardProps = {
  img: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  type: "myTours" | "allTours";
};

const DestinationCard = ({
  img,
  title,
  description,
  price,
  duration,
  type,
}: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        ...cardStyles.container,
        zIndex: isHovered ? 10 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={cardStyles.imageWrapper}>
        <img src={img} alt="destination" />
      </Box>

      <Box sx={cardStyles.cardContent}>
        <Box sx={cardStyles.textContainer}>
          <Typography sx={cardStyles.title}>{title}</Typography>
          <Typography sx={cardStyles.description}>{description}</Typography>
        </Box>

        {!isHovered ? (
          <Box sx={cardStyles.destinationDetails}>
            <Box sx={cardStyles.detailRow}>
              <AttachMoneyRounded sx={cardStyles.icon} />
              <Typography sx={cardStyles.text}>{price}</Typography>
            </Box>
            <Box sx={cardStyles.detailRow}>
              <QueryBuilderRounded sx={cardStyles.icon} />
              <Typography sx={cardStyles.text}>{duration}</Typography>
            </Box>
          </Box>
        ) : (
          <Box sx={cardStyles.textContentWrapper}>
            {type === "allTours" ? (
              <BaseButton
                sx={{ width: "100%" }}
                onClick={() => navigate("/destination-details")}
              >
                View Details
              </BaseButton>
            ) : (
              <Box sx={cardStyles.myTours}>
                <DeleteOutlineOutlined sx={cardStyles.deleteIcon} />
                <BaseButton
                  sx={cardStyles.toursButton}
                  onClick={() => navigate("/destination-details")}
                >
                  Details
                </BaseButton>
                <BaseButton sx={cardStyles.toursButton}>Update</BaseButton>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DestinationCard;
