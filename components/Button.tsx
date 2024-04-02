interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button(buttonProps: ButtonProps) {
  return (
    <button
      className="border-b-2 text-4xl pb-1 pt-8 mb-8 hover:pb-3 hover:ease-in hover:duration-300"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        buttonProps.onClick();
      }}
    >
      {buttonProps.text}
    </button>
  );
}
