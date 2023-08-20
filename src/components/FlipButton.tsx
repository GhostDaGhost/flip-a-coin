import { Box, Button } from "@mui/material";

// FLIP BUTTON
const FlipButton = (props: FlipButtonProps) => {
    const { flippingCoin, onClick } = props;

    // RETURN ELEMENT
    return (
        <Box display="flex" justifyContent="center" sx={{ mb: 1 }}>
            <Button variant="contained" onClick={onClick} disabled={flippingCoin}>Flip Coin</Button>
        </Box>
    )
}

export default FlipButton;
