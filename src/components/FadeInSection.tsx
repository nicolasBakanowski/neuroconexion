"use client";

import { ComponentProps, useEffect, useRef } from "react";

export default function FadeInSection({
  children,
  className = "",
  ...props
}: ComponentProps<"section">) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("fade-in-up");
          observer.disconnect();
        }
      },
      {
        // Trigger slightly before the element fully enters the viewport so
        // animations are visible on smaller mobile screens
        rootMargin: "0px 0px -10% 0px",
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`opacity-0 ${className}`} {...props}>
      {children}
    </section>
  );
}

