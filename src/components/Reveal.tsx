import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
}

export function Reveal({ children, as: Tag = "div", delay = 0, className = "", style, ...rest }: RevealProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
