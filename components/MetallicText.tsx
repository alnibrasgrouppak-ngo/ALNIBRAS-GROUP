import React from "react";

interface MetallicTextProps {
  children: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  className?: string;
  variant?: "gold" | "silver";
}

export default function MetallicText({
  children,
  tag = "span",
  className = "",
  variant = "gold",
}: MetallicTextProps) {
  const Tag = tag;

  const gradientClass =
    variant === "gold" ? "metallic-text" : "metallic-text-silver";

  return (
    <Tag className={`${gradientClass} ${className}`}>
      {children}
    </Tag>
  );
}
