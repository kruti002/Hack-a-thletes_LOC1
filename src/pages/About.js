import "./About.css";
import Button from "../components/3Dbutton";
import "animate.css";
export default function About() {
  return (
    <div class="responsive-container-block bigContainer">
      <div class="responsive-container-block Container bottomContainer">
        <div class="allText bottomText">
          <p class="text-blk headingText">About Us</p>
          <p class="text-blk description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut. Congue in dignissim
            tincidunt ut dolor eu. Mi, eget posuere vitae sed purus nisl lorem.
          </p>
          <a>
            <Button message={"View More"} />
          </a>
        </div>
        <div class="videoContainer">
          <iframe
            allowfullscreen="allowfullscreen"
            class="mainVideo"
            controls="controls"
            src="https://www.youtube.com/embed/svg%3E?"
          ></iframe>
          <img
            class="dotsImg image-block"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
          />
        </div>
      </div>
    </div>
  );
}
