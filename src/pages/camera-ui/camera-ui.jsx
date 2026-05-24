import "./camera-ui.css";

export default function CameraUiPage() {
  return (
    <main className="cameraUi-main">
      <div className="battery-wrapper">
        <div className="battery-head"></div>
        <div className="battery-body">
          <div className="battery-charge"></div>
        </div>
      </div>
    </main>
  );
}
