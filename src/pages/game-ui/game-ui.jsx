import IconBar from "../../components/Game-Ui/icon-bar";
import IconRoute from "../../components/Game-Ui/icon-route";
import IconTask from "../../components/Game-Ui/icon-task";
import "./game-ui.css";

export default function GameUiPage() {
  return (
    <main className="game-ui">
      <section className="game-ui__top">
        <section className="game-ui__group">
          <IconBar />
        </section>
        <section className="game-ui__group">
          <IconRoute />
        </section>
        <section className="game-ui__group">
          <IconTask />
        </section>
      </section>
      <section className="game-ui__middle">
        <div className="game-ui__icon game-ui__icon--party"></div>
        <div className="game-ui__icon game-ui__icon--party"></div>
      </section>
      <section className="game-ui__bottom">
        <section className="game-ui__group">
          <div className="game-ui__icon game-ui__icon-info"></div>
        </section>
        <section className="game-ui__group">
          <div className="game-ui__icon game-ui__icon--skill"></div>
        </section>
        <section className="game-ui__group">
          <div className="game-ui__icon game-ui__icon--resources"></div>
        </section>
      </section>
    </main>
  );
}
