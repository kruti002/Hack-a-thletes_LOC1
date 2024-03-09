// import React from "react";
// import "./Loading.css"; // Make sure to create this CSS file

// const LoadingSpinner = () => {
//   return (
//     <div className="loading-spinner-container">
//       <div className="loading-spinner"></div>
//     </div>
//   );
// };

// export default LoadingSpinner;
import React from "react";
import "./Loading.css";

import GearIcon from "@rsuite/icons/Gear";
// import SpinnerIcon from "@rsuite/icons/legacy/Spinner";

const Loading = () => (
  <div className="icon-example-list">
    <GearIcon spin style={{ fontSize: "2em" }} />
    {/* <SpinnerIcon pulse style={{ fontSize: "2em" }} /> */}
  </div>
);

export default Loading;
