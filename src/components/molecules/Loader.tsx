export const config = { amp: true };

export const Loader = () => {
  return (
    <>
      <div className="loader">
        <amp-bodymovin-animation
          layout="fixed"
          width="200"
          height="200"
          src="https://assets8.lottiefiles.com/packages/lf20_gqgyomqx.json"
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
