import { cn } from "../../../utils/cn";

export default function Button({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "flex items-center justify-center px-4 py-2 font-medium text-white bg-primary rounded-md border border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
