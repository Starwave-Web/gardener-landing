import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";



const buttonVariants = cva("rounded-[35px] bg-white text-secondary-green text-[1.125rem] font-bold hover:bg-gray-100", {
  variants: {
    variant: {
      default: "shadow-lg",
      outline:
        "text-secondary-button text-quartary-green border-[3px] border-quartary-green bg-white hover:bg-quartary-green hover:text-white",
    },
    size: {
      default: "py-[21px] px-[30px]",
      sm: "py-[11px] px-[35px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
