import "./camera-ui.css";

export default function CameraUiPage() {
  return (
    <main className="camera-ui" aria-label="Camera interface">
      <section className="camera-ui__top">
        <section
          className="camera-ui__group"
          aria-label="Battery and video format information"
        >
          <div className="battery" aria-label="Remaining battery life">
            <div className="battery__icon" aria-hidden="true">
              <span className="battery__head" />
              <span className="battery__body">
                <span className="battery__charge" />
              </span>
            </div>
            <p className="battery__time">45min</p>
          </div>

          <p className="camera-ui__resolution">HDV1080i</p>
        </section>

        <section
          className="cameraUi-topRightSection"
          aria-label="Recording information"
        >
          <div className="recordingTime-section">
            <span className="recording-icon"></span>
            <p className="recordingTime">00:01:02:03</p>
          </div>

          <div className="recordedTime-section">
            <span className="tape-icon" aria-hidden="true">
              <span className="tape-icon-circle" />
              <span className="tape-icon-connectionLine" />
              <span className="tape-icon-circle" />
            </span>
            <p>54min</p>
          </div>
        </section>
      </section>

      <section className="camera-ui__bottom" aria-label="Playback controls">
        <span className="stop-icon" />
        <span className="rewind-icon">
          <span className="rewind-triangle" />
          <span className="rewind-triangle" />
        </span>
        <span className="previous-icon">
          <span className="previous-triangle" />
          <span className="previous-triangle" />
        </span>
        <span className="play-icon" />
        <span className="pause-icon">
          <span className="pause-line" />
          <span className="pause-line" />
        </span>
        <span className="next-icon">
          <div className="next-triangle" />
          <div className="next-triangle" />
        </span>
        <span className="fastForward-icon">
          <span className="fastForward-triangle" />
          <span className="fastForward-triangle" />
        </span>
        <p>P-MENU</p>
      </section>
    </main>
  );
}
