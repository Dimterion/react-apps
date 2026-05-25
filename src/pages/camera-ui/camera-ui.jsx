import "./camera-ui.css";

export default function CameraUiPage() {
  return (
    <main className="cameraUi-main">
      <section className="cameraUi-topSection">
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
        <section className="cameraUi-topRightSection">
          <div className="recordingTime-section">
            <div className="play-icon"></div>
            <div>00:01:02:03</div>
          </div>
          <div className="recordedTime-section">
            <div className="tape-icon">
              <div className="tape-icon-circle"></div>
              <div className="tape-icon-connectionLine"></div>
              <div className="tape-icon-circle"></div>
            </div>
            <div>54min</div>
          </div>
        </section>
      </section>
      <section className="cameraUi-bottomSection">
        <div className="stop-icon"></div>
        <div className="rewind-icon">
          <div className="rewind-triangle"></div>
          <div className="rewind-triangle"></div>
        </div>
        <div className="previous-icon">
          <div className="previous-triangle"></div>
          <div className="previous-triangle"></div>
        </div>
        <div className="play-icon"></div>
        <div className="pause-icon"></div>
        <div className="next-icon"></div>
        <div className="fastForward-icon"></div>
        <div>P-MENU</div>
      </section>
    </main>
  );
}
