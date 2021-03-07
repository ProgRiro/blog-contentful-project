export const config = { amp: true };

// https://colorhunt.co/palette/212984
// https://flatuicolors.com/palette/de
export const colors = {
  primary: "#6c2735",
  secondary: "#14274e",
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
            font-size: 18px;
            padding: 8px 25px;
            border-radius: 2px;
            border: none;
            cursor: pointer;
            box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
            transition: box-shadow 0.3s;
          }
          button:hover {
            box-shadow: 0 6px 12px -4px rgb(0 27 68 / 20%);
          }
        `}
      </style>
    </>
  );
};
