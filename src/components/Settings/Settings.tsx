import React from "react";
import { Setting, StyledSettings } from "./Settings.styles";
import { HiLanguage } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";

const Settings = ({ setShowSettings }: any) => {
  const { text, theme, language, toggleTheme, toggleLanguage } =
    useAppContext();
  const SETTINGS = [
    {
      label: text.language,
      icon: <HiLanguage size={23} />,
      value: text[language === "english" ? "french" : "english"],
      onClick: () => {
        toggleLanguage();
        setShowSettings((currentState: boolean) => !currentState);
      },
    },
    {
      label: text.appearance,
      icon: <GoMoon size={23} />,
      value: text[theme === "dark" ? "light" : "dark"],
      onClick: () => {
        toggleTheme();
        setShowSettings((currentState: boolean) => !currentState);
      },
    },
  ];

  return (
    <StyledSettings>
      {SETTINGS.map(({ label, icon, value, onClick }, index) => (
        <Setting key={index} onClick={onClick}>
          {icon}
          <Text>{`${label}: ${value}`}</Text>
        </Setting>
      ))}
    </StyledSettings>
  );
};

export default Settings;
