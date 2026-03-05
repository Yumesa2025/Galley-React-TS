import {useRef, useEffect } from "react";

export function useIntersectionObserver( callback: () => void, enabled: boolean ) 
{
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !enabled) return;
    const observer = new IntersectionObserver((entries) => {if (entries[0].isIntersecting) callback(); });
    observer.observe(ref.current);
    return () => observer.disconnect();
    }, [callback, enabled]);

  return ref; 
}