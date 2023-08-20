import { Box } from "@mui/material";

import Heads from '../assets/heads.png';
import Tails from '../assets/tails.png';

// SIZE OF COIN IMAGE
const coinImageStyling: object = {
    width: '150px'
};

// COIN
const Coin = (props: CoinProps) => {
    const { coinAnimation } = props;

    // RETURN ELEMENT
    return (
        <Box id="coin_container" sx={{ mt: 5, animation: coinAnimation }}>
            <Box id="heads">
                <img style={coinImageStyling} src={Heads} alt="Heads" draggable="false" loading="lazy" />
            </Box>

            <Box id="tails" sx={{ transform: 'rotateX(180deg)' }}>
                <img style={coinImageStyling} src={Tails} alt="Tails" draggable="false" loading="lazy" />
            </Box>
        </Box>
    )
}

export default Coin;
