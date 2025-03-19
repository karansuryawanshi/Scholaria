import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const backgroundVarients = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-sky-100",
        success: "bg-emerald-100",
      },
      iconVariant: {
        default: "text-sky-700",
        success: "bg-emerald-700",
      },
      size: {
        default: "p-2",
        sm: "p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconVariant = cva("", {
  variants: {
    variant: {
      default: "text-sky-700",
      success: "emerald-700",
    },
    size: {
      default: "h-8 w-8",
      sm: "h-8 w-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type backgroundVarients = VariantProps<typeof backgroundVarients>;
type iconVariantProps = VariantProps<typeof iconVariant>;

interface IconBadgeProps extends backgroundVarients, iconVariantProps {
  icon: LucideIcon;
}
export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
  return (
    <div className={cn(backgroundVarients({ variant, size }))}>
      <Icon className={cn(iconVariant({ variant, size }))} />
    </div>
  );
};
