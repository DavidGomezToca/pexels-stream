export const translateText = async (
  text: string,
  language: string
): Promise<string | null> => {
  if (language !== "en") {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|${language}`
      );
      const data = await response.json();
      if (
        data?.responseDetails?.includes(
          "YOU USED ALL AVAILABLE FREE TRANSLATIONS"
        )
      ) {
        console.warn("Translation limit reached:", data.responseDetails);
        return text;
      }
      if (data?.responseData?.translatedText) {
        return data.responseData.translatedText;
      }
      console.error("Translation response does not contain translated text.");
      return text;
    } catch (error) {
      console.error("Error fetching translation:", error);
      return text;
    }
  } else {
    return text;
  }
};
