import { Box } from "@mui/material";
import { imageGridStyles } from "./styles";

type ImageGridProps = {
  images: string[];
};

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <Box sx={imageGridStyles.gridWrapper}>
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            ...imageGridStyles.gridItem,
            ...(index === 0 ? imageGridStyles.spanTwo : {}),
          }}
        >
          <img loading="lazy" src={image} alt={`grid-item-${index}`} />
        </Box>
      ))}
    </Box>
  );
};

export default ImageGrid;
