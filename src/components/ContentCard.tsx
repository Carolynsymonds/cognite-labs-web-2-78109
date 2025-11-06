import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

const ContentCard = ({ children, className }: ContentCardProps) => {
  return (
    <div className={cn("bg-card rounded-2xl shadow-sm border border-border/50 p-8 md:p-10", className)}>
      {children}
    </div>
  );
};

export default ContentCard;
