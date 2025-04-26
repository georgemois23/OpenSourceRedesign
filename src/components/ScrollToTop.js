import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // 👈 κάθε φορά που αλλάζει το pathname, κάνει scroll στην κορυφή

  return null;
}
