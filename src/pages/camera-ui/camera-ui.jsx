import "./camera-ui.css";

export default function CameraUiPage() {
  return (
    <main className="camera-ui" aria-label="Camera interface">
      <section className="camera-ui__top">
        <section
          className="camera-ui__group"
          aria-label="Battery and video format information"
        >
          <div
            className="battery"
            aria-label="Remaining battery life"
          >
            <div className="battery-wrapper">
              <div className="battery-head"></div>
              <div className="battery-body">
                <div className="battery-charge"></div>
              </div>
            </div>
            <p className="battery-time">45min</p>
          </div>
          <p className="camera-resolution">HDV1080i</p>
        </section>
        <section className="cameraUi-topRightSection">
          <div className="recordingTime-section">
            <div className="recording-icon"></div>
            <p className="recordingTime">00:01:02:03</p>
          </div>
          <div className="recordedTime-section">
            <div className="tape-icon">
              <div className="tape-icon-circle"></div>
              <div className="tape-icon-connectionLine"></div>
              <div className="tape-icon-circle"></div>
            </div>
            <p>54min</p>
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
        <div className="pause-icon">
          <div className="pause-line"></div>
          <div className="pause-line"></div>
        </div>
        <div className="next-icon">
          <div className="next-triangle"></div>
          <div className="next-triangle"></div>
        </div>
        <div className="fastForward-icon">
          <div className="fastForward-triangle"></div>
          <div className="fastForward-triangle"></div>
        </div>
        <p>P-MENU</p>
      </section>
    </main>
  );
}
