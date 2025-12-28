import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Coordexa custom variants
        hero: "bg-primary text-primary-foreground px-8 py-6 text-base font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 animate-pulse-glow",
        "hero-secondary":
          "bg-transparent text-foreground border-2 border-foreground/20 px-8 py-6 text-base font-medium hover:border-foreground/40 hover:bg-foreground/5 hover:-translate-y-0.5",
        "hero-dark":
          "bg-primary text-primary-foreground px-8 py-6 text-base font-semibold shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1",
        "hero-secondary-dark":
          "bg-white/10 text-white border border-white/20 px-8 py-6 text-base font-medium hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 backdrop-blur-sm",
        glass:
          "bg-white/80 backdrop-blur-xl border border-white/30 text-foreground hover:bg-white/90 shadow-card",
        "glass-dark":
          "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/15",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

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
