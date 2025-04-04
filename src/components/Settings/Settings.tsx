import { Setting, Language, StyledSettings } from "./Settings.styles";
import { HiLanguage } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { GoMoon } from "react-icons/go";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";
import { useState } from "react";
import { ITranslations } from "../../utils/translations";

const Settings = ({ setShowSettings }: any) => {
  const [showMainSettings, setShowMainSettings] = useState(true);
  const [showLanguages, setShowLanguages] = useState(false);
  const { text, theme, language, languages, switchLanguage, toggleTheme } =
    useAppContext();
  const settings = [
    {
      label: text.language,
      icon: <TbWorld size={23} />,
      value: text[language as keyof ITranslations],
      onClick: () => {
        setShowMainSettings((currentState: boolean) => !currentState);
        setShowLanguages((currentState: boolean) => !currentState);
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
      {showMainSettings &&
        settings.map(({ label, icon, value, onClick }, index) => (
          <Setting key={index} onClick={onClick}>
            {icon}
            <Text>{`${label}: ${value}`}</Text>
          </Setting>
        ))}
      {showLanguages &&
        languages.map((language, index) => (
          <Language
            key={index}
            onClick={() => {
              switchLanguage(language);
              setShowSettings((currentState: boolean) => !currentState);
            }}
          >
            <HiLanguage size={23} />
            <Text>{text[language as keyof ITranslations]}</Text>
          </Language>
        ))}
    </StyledSettings>
  );
};

export default Settings;
