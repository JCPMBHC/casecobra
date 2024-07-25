import React, { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className,
      )}
    ></div>
  );
};

export default Phone;
