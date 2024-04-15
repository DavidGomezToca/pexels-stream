export const getTitle = (videoUrl: string): string => {
  let title = videoUrl
    ?.replace("https://www.pexels.com/video/", "")
    ?.split("-")
    ?.slice(0, -1)
    ?.join(" ");

  return title?.charAt(0)?.toUpperCase() + title?.slice(1);
};
