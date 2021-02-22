export const config = { amp: true };

interface Props {
  src: string;
}

export const Avatar: React.FC<Props> = ({ src }) => {
  return (
    <amp-img
      width="50"
      height="50"
      src={src}
      alt="a cool image"
      style={{ borderRadius: "50%" }}
    />
  );
};
