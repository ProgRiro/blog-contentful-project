export const config = { amp: true };

export const AboutHeader = () => {
  return (
    <>
      <div className="about">
        {/* <amp-bodymovin-animation
          layout="fixed"
          width="150"
          height="150"
          src="https://assets2.lottiefiles.com/packages/lf20_90ZmDV.json"
          // src="https://assets8.lottiefiles.com/packages/lf20_gqgyomqx.json"
          loop="true"
          className="ampBodymovinAnimation"
        /> */}
        <amp-img
          width="200"
          height="200"
          src="/progriro.webp"
          alt="progriro icon"
          className="ampImg"
        />
        {/* <amp-bodymovin-animation
          layout="fixed"
          width="150"
          height="150"
          src="https://assets2.lottiefiles.com/packages/lf20_90ZmDV.json"
          // src="https://assets8.lottiefiles.com/packages/lf20_gqgyomqx.json"
          loop="true"
          className="ampBodymovinAnimation"
        /> */}
      </div>
      <style jsx>
        {`
          .about {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .ampImg {
            border-radius: 50%;
            border: 5px double #6c2735;
          }
          @media screen and (max-width: 480px) {
            .ampBodymovinAnimation {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};
