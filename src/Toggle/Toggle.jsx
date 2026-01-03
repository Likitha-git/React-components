import "./Toggle.css";

function Toggle({ isOn, onToggle }) {
  return (
    <div className="toggle-container">
      <button
        className={`toggle-btn ${isOn ? "on" : "off"}`}
        onClick={onToggle}
      >
        {isOn ? "ON" : "OFF"}
      </button>

      <p>Background: {isOn ? "Dark Mode" : "Light Mode"}</p>
    </div>
  );
}

export default Toggle;
