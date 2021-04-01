import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={showScroll ? "show" : "hid"}>
      <FontAwesomeIcon icon={faArrowCircleUp} size="2x" onClick={scrollTop} />
      <style jsx>
        {`
          .show {
            display: flex;
            position: sticky;
            top: 20rem;
            height: 40px;
            cursor: pointer;
            right: 5rem;
          }
          .hid {
            visibility: hidden;
          }
        `}
      </style>
    </div>
  );
}
