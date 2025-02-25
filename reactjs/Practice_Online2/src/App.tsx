import React, { useState, useCallback } from "react";
import SpiralEffect from "./components/SpiralEffect";
import CircleEffect from "./components/CircleEffect";

type EffectType = "spiral" | "circle";

const STYLES = {
  container: {
    position: "relative" as const,
    minHeight: "100vh",
  },
  effect: {
    position: "relative" as const,
  },
  buttonContainer: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    padding: "10px",
  },
  button: {
    margin: "0 10px",
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer" as const,
    transition: "background-color 0.2s",
    ":hover": {
      backgroundColor: "#cc0000",
    },
  },
} as const;

const EffectButton: React.FC<{
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      ...STYLES.button,
      backgroundColor: isActive ? "#cc0000" : "red",
    }}
  >
    {children}
  </button>
);

const App: React.FC = () => {
  const [effect, setEffect] = useState<EffectType>("spiral");

  const handleEffectChange = useCallback((newEffect: EffectType) => {
    setEffect(newEffect);
  }, []);

  const renderEffect = () => {
    return effect === "spiral" ? <SpiralEffect /> : <CircleEffect />;
  };

  return (
    <div style={STYLES.container}>
      <div style={STYLES.effect}>{renderEffect()}</div>
      <div style={STYLES.buttonContainer}>
        <EffectButton
          isActive={effect === "spiral"}
          onClick={() => handleEffectChange("spiral")}
        >
          Hình Xoắn
        </EffectButton>
        <EffectButton
          isActive={effect === "circle"}
          onClick={() => handleEffectChange("circle")}
        >
          Hình Tròn
        </EffectButton>
      </div>
    </div>
  );
};

export default App;