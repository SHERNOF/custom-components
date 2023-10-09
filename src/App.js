import "./App.css";
import ABox from "./components/animatedBorder/AnimatedBorder";
import ANav from "./components/animatedNavbar/AnimatedNavBar";
import Box from "./components/box/Box";
import Deck1 from "./components/deck1/Deck1";
import GlowingIcons from "./components/glowingIcons/GlowingIcons";
import RotatingText from "./components/rotating text/RotatingText";

function App() {
  return (
    <>
      <Box className="App">
        <p style={{ padding: "1rem", color: "white", textAlign: "center" }}>
          JESUS IS LORD
        </p>
      </Box>
      <ANav />
      <Deck1 />
      <GlowingIcons />
    </>
  );
}

export default App;
