import {
  StyledSetting,
  StyledSettings,
  StyledSettingsButton,
} from "./Settings.styles";
import { HiLanguage } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { GoMoon } from "react-icons/go";
import { GoSun } from "react-icons/go";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";
import { useState } from "react";
import { ITranslations } from "../../utils/translations";
import { MdOutlineSettings } from "react-icons/md";
import { Icon } from "../../utils/Icon.styles";

const Settings = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const { text, theme, language, languages, switchLanguage, toggleTheme } =
    useAppContext();

  function toggleShowLanguages() {
    setShowLanguages((currentState: boolean) => !currentState);
  }

  return (
    <StyledSettings className="dropdown">
      <StyledSettingsButton
        type="button"
        id="settingsDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Icon>
          <MdOutlineSettings size={24} />
        </Icon>
      </StyledSettingsButton>
      <ul
        className={`dropdown-menu ${theme}-theme`}
        aria-labelledby="settingsDropdown"
      >
        {!showLanguages && (
          <>
            <StyledSetting
              onClick={(e) => {
                e.stopPropagation();
                toggleShowLanguages();
              }}
            >
              <TbWorld size={20} />
              <Text>{`${text.language}: ${
                text[language as keyof ITranslations]
              }`}</Text>
            </StyledSetting>
            <StyledSetting onClick={toggleTheme}>
              {theme === "dark" ? <GoSun size={20} /> : <GoMoon size={20} />}
              <Text>{`${text.appearance}: ${
                text[theme === "dark" ? "light" : "dark"]
              }`}</Text>
            </StyledSetting>
          </>
        )}
        {showLanguages &&
          languages.map((lang, index) => (
            <StyledSetting
              key={index}
              onClick={() => {
                switchLanguage(lang);
                toggleShowLanguages();
              }}
            >
              <HiLanguage size={23} />
              <Text>{text[lang as keyof ITranslations]}</Text>
            </StyledSetting>
          ))}
      </ul>
    </StyledSettings>
  );
};

export default Settings;
