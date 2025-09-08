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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("fade-in-up");
        observer.disconnect();
      }
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`opacity-0 ${className}`} {...props}>
      {children}
    </section>
  );
}

