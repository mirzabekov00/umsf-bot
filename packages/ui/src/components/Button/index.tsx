import React from "react";
import type { ButtonProps } from "antd";
import StyledButton from "./Button.style";

export interface MyButtonProps extends ButtonProps {
  label?: string;
}

export const MyButton = ({ children, label, ...restProps }: MyButtonProps) => {
  return <StyledButton {...restProps}>{label || children}</StyledButton>;
};