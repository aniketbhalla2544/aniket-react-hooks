import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const mediaQueryObj = window.matchMedia(query);
    setIsMatching(mediaQueryObj.matches);
    mediaQueryObj.onchange = (e) => {
      setIsMatching(e.matches);
    };
  }, [query])

  return isMatching
}