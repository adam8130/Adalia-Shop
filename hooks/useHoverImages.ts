import { useState, useEffect, useRef, useCallback } from "react";

// requires 2 images as children
export const useHoverImages = () => {
  const [refsArray, setRefsArray] = useState<(HTMLDivElement | null)[]>([]);
  const addedRefs = useRef<Set<HTMLElement>>(new Set());

  const setRefsCallback = useCallback((node: HTMLDivElement) => {
    if (node && !addedRefs.current.has(node)) {
      setRefsArray(prev => [...prev, node]);
      addedRefs.current.add(node);
    }
  }, []);

  useEffect(() => {
    if (!refsArray[0]) return;
    console.log(refsArray)
    const handleMouseEnter = (ref: HTMLDivElement) => {
      (ref.children[0] as HTMLElement).style.zIndex = "0";
      (ref.children[0] as HTMLElement).style.opacity = "0";
      (ref.children[1] as HTMLElement).style.zIndex = "1";
      (ref.children[1] as HTMLElement).style.opacity = "1";
    };
    const handleMouseLeave = (ref: HTMLDivElement) => {
      (ref.children[0] as HTMLElement).style.zIndex = "1";
      (ref.children[0] as HTMLElement).style.opacity = "1";
      (ref.children[1] as HTMLElement).style.zIndex = "0";
      (ref.children[1] as HTMLElement).style.opacity = "0";
    };

    refsArray.forEach((ref) => {
      if (!ref) return;
      if (!ref.children[0]) return;
      if (!ref.children[1]) return;

      (ref as HTMLElement).style.position = "relative";

      (ref.children[0] as HTMLElement).style.transition = "all 0.5s";
      (ref.children[0] as HTMLElement).style.position = "absolute";
      (ref.children[0] as HTMLElement).style.zIndex = "1";

      (ref.children[1] as HTMLElement).style.transition = "all 0.5s";
      (ref.children[1] as HTMLElement).style.position = "absolute";
      (ref.children[1] as HTMLElement).style.zIndex = "0";

      ref?.addEventListener("mouseenter", () => handleMouseEnter(ref));
      ref?.addEventListener("mouseleave", () => handleMouseLeave(ref));
    });

    return () => {
      refsArray.forEach((ref) => {
        if (ref) {
          ref.removeEventListener("mouseenter", () => handleMouseEnter(ref));
          ref.removeEventListener("mouseleave", () => handleMouseLeave(ref));
        }
      });
    };
  }, [refsArray]);

  return { setRefsCallback };
}