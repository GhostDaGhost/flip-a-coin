import { Container, Box } from "@mui/material";
import { useState } from "react";

import Header from "./components/Header";
import Coin from "./components/Coin";
import FlipButton from "./components/FlipButton";

// APP
const App = () => {
    const [flippingCoin, flipCoin] = useState(false);
    const [coinAnimation, setCoinAnimation] = useState('none');

    // ON FLIP BUTTON CLICK
    const onFlipButtonClicked = () => {
        setCoinAnimation('none'); // RESET

        // BEGIN FLIP AND SET ANIMATION (DETERMINES WHICH SIDE IT SHOULD LAND ON)
        setTimeout(() => {
            setCoinAnimation(`spin-${Math.floor(Math.random() * 2) ? 'heads' : 'tails'} 3s forwards`);
            flipCoin(true);

            // RESET STATE AFTER TIMEOUT
            setTimeout(() => flipCoin(false), 4000);            
        }, 100);
    }

    // RETURN ELEMENT
    return (
        <Container id="outercontainer">
            <Box id="innercontainer" sx={{ py: 3, px: 10, borderRadius: 3, bgcolor: '#383838' }}>
                <Header />
                <Coin coinAnimation={coinAnimation} />
                <FlipButton flippingCoin={flippingCoin} onClick={onFlipButtonClicked} />
            </Box>
        </Container>
    )
}

export default App;
