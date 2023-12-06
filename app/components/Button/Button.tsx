import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  className,
  children,
  disabled,
  onClick,
  ...others
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`capitalize rounded text-white ${className} w-full  p-3 btn-secondary button-shadow bg-accent transition-all duration-150 ease-linear`}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
