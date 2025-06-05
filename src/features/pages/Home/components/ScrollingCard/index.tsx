import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./index.scss";

interface ScrollingCardProps {
  items: string[];
}

export type ScrollingCardRef = {
  pageDown: () => void;
  pageUp: () => void;
};

const ScrollingCard = forwardRef<ScrollingCardRef, ScrollingCardProps>(
  (props, ref) => {
    const { items: defaultItems } = props;
    const intervalRef = useRef<number | null>(null);
    const scrollFirstElementRef = useRef<HTMLDivElement>(null);
    const scrollLastElementRef = useRef<HTMLDivElement>(null);
    const scrollListRef = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<string[]>(defaultItems);

    const _pageDown = () => {
      if (scrollListRef.current && scrollFirstElementRef.current) {
        scrollListRef.current.style.transition = "transform 0.3s ease-in-out";
        scrollListRef.current.style.transform = `translateY(${scrollLastElementRef.current?.offsetHeight}px)`;
        const timeout = setTimeout(() => {
          if (scrollListRef.current) {
            setItems((prev) => {
              const updatedItems = [...prev];
              if (updatedItems.length > 0) {
                updatedItems.unshift(updatedItems.pop()!);
              }
              return updatedItems;
            });
            scrollListRef.current.style.transition = "none";
            scrollListRef.current.style.transform = "translateY(0)";
          }
          clearTimeout(timeout);
        }, 300);
      }
    };

    const _pageUp = () => {
      if (scrollListRef.current && scrollFirstElementRef.current) {
        scrollListRef.current.style.transition = "transform 0.3s ease-in-out";
        scrollListRef.current.style.transform = `translateY(-${scrollFirstElementRef.current?.offsetHeight}px)`;

        const timeout = setTimeout(() => {
          if (scrollListRef.current) {
            setItems((prev) => {
              const updatedItems = [...prev];
              if (updatedItems.length > 0) {
                updatedItems.push(updatedItems.shift()!);
              }
              return updatedItems;
            });
            scrollListRef.current.style.transition = "none";
            scrollListRef.current.style.transform = "translateY(0)";
          }
          clearTimeout(timeout);
        }, 300);
      }
    };

    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        _pageUp();
      }, 5000);
    };

    const pageDown = () => {
      _pageDown();
      startInterval();
    };

    const pageUp = () => {
      _pageUp();
      startInterval();
    };

    useImperativeHandle(ref, () => ({
      pageDown,
      pageUp,
    }));

    useEffect(() => {
      startInterval();
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, []);

    return (
      <div className="scrolling-card">
        <div className="scrolling-card-header"></div>
        <div ref={scrollListRef} className="scrolling-card-list">
          {items.map((text, index) => (
            <div
              ref={
                index === 0
                  ? scrollFirstElementRef
                  : index === items.length - 1
                  ? scrollLastElementRef
                  : null
              }
              className="scrolling-card-list-item"
              key={index}
            >
              <a
                href="https://www.iitdh.ac.in/announcement"
                className="scrolling-card-list-item-text"
              >
                {text}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default ScrollingCard;
