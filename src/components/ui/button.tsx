import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58F48] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#B58F48] to-[#967232] text-white shadow-lg shadow-[#B58F48]/25 hover:shadow-xl hover:shadow-[#B58F48]/35 hover:brightness-105 active:scale-[0.98]",
        whatsapp:
          "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:bg-[#20ba5a] hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-[0.98]",
        gold:
          "border border-[#B58F48]/50 bg-[#B58F48]/10 text-[#8C6A2E] hover:bg-[#B58F48]/20 hover:border-[#B58F48] shadow-xs active:scale-[0.98]",
        outline:
          "border border-[#E0D8CC] bg-white text-[#28231E] shadow-xs hover:bg-[#F7F5F0] hover:border-[#B58F48]/50 active:scale-[0.98]",
        secondary:
          "bg-[#F4F1EA] text-[#28231E] border border-[#E0D8CC] hover:bg-[#ECE7DC] hover:border-[#B58F48]/30",
        ghost: "text-[#28231E]/80 hover:bg-[#28231E]/5 hover:text-[#28231E]",
        link: "text-[#B58F48] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-14 rounded-2xl px-8 text-base tracking-wide font-bold",
        icon: "h-11 w-11",
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
