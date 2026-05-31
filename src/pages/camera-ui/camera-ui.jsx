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
          className="camera-ui__group camera-ui__group--right"
          aria-label="Recording information"
        >
          <div className="status-row">
            <span className="icon--record" aria-hidden="true"></span>
            <p className="status-row__text">00:01:02:03</p>
          </div>

          <div className="status-row">
            <span className="icon--tape" aria-hidden="true">
              <span className="icon--tape-circle" />
              <span className="icon--tape-line" />
              <span className="icon--tape-circle" />
            </span>
            <p className="status-row__text">54min</p>
          </div>
        </section>
      </section>

      <section className="camera-ui__bottom" aria-label="Playback controls">
        <span className="icon--stop" aria-hidden="true" />
        <span className="icon--rewind" aria-hidden="true">
          <span className="icon--rewind-triangle" />
          <span className="icon--rewind-triangle" />
        </span>
        <span className="icon--previous" aria-hidden="true">
          <span className="icon--previous-triangle" />
          <span className="icon--previous-triangle" />
        </span>
        <span className="icon--play" aria-hidden="true" />
        <span className="icon--pause" aria-hidden="true">
          <span className="icon--pause-line" />
          <span className="icon--pause-line" />
        </span>
        <span className="icon--next" aria-hidden="true">
          <span className="icon--next-triangle" />
          <span className="icon--next-triangle" />
        </span>
        <span className="icon--fast-forward" aria-hidden="true">
          <span className="icon--fast-forward-triangle" />
          <span className="icon--fast-forward-triangle" />
        </span>
        <p>P-MENU</p>
      </section>
    </main>
  );
}
