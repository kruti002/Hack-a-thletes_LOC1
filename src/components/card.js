import "./card.css";

export default function Card() {
  return (
    <div class="fancy-cards">
      <h1>Microinteraction on active</h1>
      <p>
        It triggers a subtle micro-interaction (scales and adjusts) when the
        user interacts with it.
      </p>
      <div class="fancy-card">
        <div class="top">
          <div class="caption">
            <h3 class="title">Beautiful Summer</h3>
            <a href="" class="button">
              Find Out{" "}
            </a>
          </div>
        </div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </div>
  );
}
