import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

function Winner() {
    console.log('you made it!');
    return <Fireworks autorun={{ speed: 5, duration: 1000 }} />;
}

export default Winner;