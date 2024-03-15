import React from "react";
import { StyledAuthButton } from "./AuthButton.styles";
import { FaRegUserCircle } from "react-icons/fa";
import { Text } from "../../utils/Text.styles";

const AuthButton = () => {
  return (
    <StyledAuthButton>
      <FaRegUserCircle size={22} />
      <Text className="auth">Sign In</Text>
    </StyledAuthButton>
  );
};

export default AuthButton;
