import ProductsforRe from "./productsforrecom";
export default function Display() {
  <Wrapper id="blog">
    <div className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <h1
            style={{ display: "flex", justifyContent: "center" }}
            className="font40 extraBold"
          >
            Price Comparisions
          </h1>
          <p
            className="font13"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
            <br />
            labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </HeaderInfo>
        <div className="flex row textCenter">
          <div
            style={{ marginLeft: "100px", marginBottom: "20px" }}
            className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
          >
            <ProductsforRe
              title="New Office!"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              tag="company"
              author="Luke Skywalker, 2 days ago"
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProductsforRe
              title="New Office!"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              tag="company"
              author="Luke Skywalker, 2 days ago"
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProductsforRe
              title="New Office!"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              tag="company"
              author="Luke Skywalker, 2 days ago"
              action={() => alert("clicked")}
            />
          </div>
        </div>
        <div className="row flexCenter">
          <div style={{ margin: "50px 0", width: "200px" }}>
            {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
          </div>
        </div>
      </div>
    </div>
  </Wrapper>;
}
