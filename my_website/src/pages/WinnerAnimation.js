import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

function WinnerAnimation() {
    return <Fireworks autorun={{ speed: 5, duration: 1000 }} />;
}

export default WinnerAnimation;