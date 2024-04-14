export default function Badge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className={"whitespace-nowrap rounded-full text-xs bg-blue-100 px-2.5 py-0.5 md:text-sm text-blue-700 " + className}>
      {name}
    </span>
  );
}
