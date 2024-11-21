import { Box, Modal, Typography } from "@mui/material";
import { myToursStyles } from "./styles";
import DestinationCard from "../../components/DestinationCard";
import { destinations } from "../../constants";
import { useState } from "react";
import BaseButton from "../../components/BaseButton";

const MyTours = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <Box sx={myToursStyles.container}>
      <Box sx={myToursStyles.headingWrapper}>
        <Typography sx={myToursStyles.heading}>My Tours</Typography>
      </Box>
      <Box sx={myToursStyles.cardsWrapper}>
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            title={destination.title}
            description={destination.description}
            img={destination.image}
            price={destination.price}
            duration={destination.duration}
            type="myTours"
            handleDelete={() => setOpenDeleteModal(true)}
          />
        ))}
      </Box>
      <Modal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={myToursStyles.modal}>
          <Box sx={myToursStyles.modalTextWrapper}>
            <Typography sx={myToursStyles.modalTitle}>Delete Tour</Typography>
            <Typography sx={myToursStyles.modalDescription}>
              Are you sure you want to delete <b>“Perez Art Museum Miami”</b>?
            </Typography>
          </Box>
          <Box sx={myToursStyles.buttomsWrapper}>
            <BaseButton
              sx={myToursStyles.cancelButton}
              onClick={() => setOpenDeleteModal(false)}
            >
              Cancel
            </BaseButton>
            <BaseButton
              sx={myToursStyles.deleteButton}
              onClick={() => setOpenDeleteModal(false)}
            >
              Delete
            </BaseButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default MyTours;
