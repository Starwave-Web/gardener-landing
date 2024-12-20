import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/utils";



const buttonVariants = cva("rounded-[35px] bg-white text-secondary-green text-[1.125rem] font-bold hover:bg-gray-100", {
  variants: {
    variant: {
      default: "shadow-lg",
      destructive:
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "text-secondary-button text-quartary-green border-[3px] border-quartary-green bg-white hover:bg-quartary-green hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "py-[21px] px-[30px]",
      sm: "py-[11px] px-[35px]",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
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
