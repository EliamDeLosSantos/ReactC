import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  className?: string;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  loading = false,
  className = "",
  ...rest
}) => (
  <button
    type={type}
    className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-60 ${className}`}
    disabled={loading || rest.disabled}
    {...rest}
  >
    {loading ? (
      <span className="flex items-center gap-2">
        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
        Cargando...
      </span>
    ) : (
      children
    )}
  </button>
);

export default Button;
