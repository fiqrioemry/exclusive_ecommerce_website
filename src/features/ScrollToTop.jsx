import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    // Only scroll if the user is not already at the top
    if (window.pageYOffset > 0) {
      handleScroll();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
