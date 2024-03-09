import React from "react";
import Product from "../components/Product_display";
import image from "../pages/img.jpg";
import piggygif from "../pages/piggygif.gif";
import offergif from "../pages/offersgif.gif";
import Button from "../components/3Dbutton";
import { Panel, Placeholder } from "rsuite";
import Rad from "../components/Radiolabel";
export default function Home({ setLoading }) {
  const [placement, setPlacement] = React.useState("bottom");
  const [shape, setShape] = React.useState("bar");
  const RadioLabel = ({ children }) => (
    <label style={{ padding: 7 }}>{children}</label>
  );
  return (
    <div className="home">
      <div className="parts">
        <div className="partsleft">
          <img
            className="gif"
            src={piggygif} // Replace with the actual URL of your GIF
            alt="Your GIF"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="partsright">
          <p class="text-blk headingText">
            Did you every think about saving money?
          </p>
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
      </div>
      <div className="parts">
        <div className="partsleft">
          <img
            className="gif"
            src={offergif} // Replace with the actual URL of your GIF
            alt="Your GIF"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="partsright">
          <p class="text-blk headingText" style={{ marginBottom: "80px" }}>
            Click here to get the latest offers
          </p>
          <Button message={"Offers"} />
        </div>
      </div>
      <div className="home_container">
        <div className="moving_bar">
          <Rad />
        </div>
      </div>
      <div className="parts-questions">
        <p className="ques-header">Some frequently asked questions:</p>
        <div className="parts-internal">
          <div className="partsleft">
            <Panel
              className="panel"
              header="Why to signup"
              collapsible
              bordered
            >
              <p>Prvides a solution for the comparision</p>
            </Panel>
            <Panel
              className="panel"
              header="Dose this realy help in saving money"
              collapsible
              bordered
            >
              <p>Yes it dose help in saving the money by comparing values</p>
            </Panel>
            <Panel
              className="panel"
              header="Is it very good"
              collapsible
              bordered
            >
              <p>Yes definetly it is too good to understand</p>
            </Panel>
            <Panel className="panel" header="Why this" collapsible bordered>
              <p>hi there this is me not me but me</p>
            </Panel>
          </div>
          <div className="partsright">
            <Panel className="panel" header="Why this" collapsible bordered>
              <p>hi there this is me not me but me</p>
            </Panel>
            <Panel className="panel" header="Why this" collapsible bordered>
              <p>hi there this is me not me but me</p>
            </Panel>
            <Panel className="panel" header="Why this" collapsible bordered>
              <p>hi there this is me not me but me</p>
            </Panel>
            <Panel className="panel" header="Why this" collapsible bordered>
              <p>hi there this is me not me but me</p>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
