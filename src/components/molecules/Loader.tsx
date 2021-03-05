export const config = { amp: true };

import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="loader">
        <amp-bodymovin-animation
          layout="fixed"
          width="180"
          height="180"
          src="https://assets6.lottiefiles.com/packages/lf20_90ZmDV.json"
          loop="true"
        />
      </div>
      <style jsx>
        {`
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
};
