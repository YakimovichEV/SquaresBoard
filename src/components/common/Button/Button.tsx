import React, { ButtonHTMLAttributes } from "react";

import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    background?: string;
}

export const Button: React.FC<ButtonProps> = ({
    color,
    background,
    children,
    ...props
}) => {
    return (
        <button className="button" {...props}>
            {children}
        </button>
    );
};
