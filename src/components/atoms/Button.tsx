export const config = { amp: true };

// https://colorhunt.co/palette/212984
// https://flatuicolors.com/palette/de
export const colors = {
  primary: "#14274e",
  secondary: "#9ba4b4",
  warning: "#f7b731",
  danger: "#eb3b5a",
} as const;
export type colors = keyof typeof colors;

interface Props {
  color: colors;
}

export const Button: React.FC<Props> = ({ children, color }) => {
  return (
    <>
      <button style={{ backgroundColor: colors[color] }}>{children}</button>
      <style jsx>
        {`
          button {
            color: #fff;
            font-size: 20px;
            padding: 10px 25px;
            border-radius: 10px;
            border: none;
            box-shadow: 0 0 10px gray;
            transition: box-shadow 0.3s;
          }
          button:hover {
            box-shadow: none;
          }
        `}
      </style>
    </>
  );
};
