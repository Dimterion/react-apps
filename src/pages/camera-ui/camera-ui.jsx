import "./camera-ui.css";

export default function CameraUiPage() {
  return (
    <main className="cameraUi-main">
      <section className="cameraUi-topLeftSection">
        <div className="battery-section">
          <div className="battery-wrapper">
            <div className="battery-head"></div>
            <div className="battery-body">
              <div className="battery-charge"></div>
            </div>
          </div>
          <div className="battery-time">45min</div>
        </div>
        <div className="camera-resolution">HDV1080i</div>
      </section>
    </main>
  );
}
