import { cn } from "@/src/lib/utils";
import { ChevronDown } from "lucide-react";

export default function Select({
  className,
  ...props
}: React.HTMLProps<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(
          "h-10 w-full appearance-none truncate rounded-md border border-input py-2 pl-3 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      >
        {props.children}
      </select>
      <ChevronDown
        className="absolute right-3 top-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground opacity-50"
        size={20}
      />
    </div>
  );
}
