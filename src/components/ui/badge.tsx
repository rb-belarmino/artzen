import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-[#B58F48]/30 bg-[#B58F48]/10 text-[#8C6A2E] shadow-xs",
        gold:
          "border border-[#B58F48]/30 bg-gradient-to-r from-[#B58F48]/15 via-[#B58F48]/5 to-transparent text-[#8C6A2E] shadow-xs backdrop-blur-md",
        secondary:
          "border border-[#E0D8CC] bg-[#F4F1EA] text-[#28231E]/80",
        outline:
          "border border-[#B58F48]/30 text-[#8C6A2E] bg-transparent",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
