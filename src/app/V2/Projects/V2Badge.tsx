export default function Badge({ name }: { name: string }) {
  return (
    <span className="whitespace-nowrap rounded-full text-xs bg-blue-100 px-2.5 py-0.5 md:text-sm text-blue-700 ">
      {name}
    </span>
  );
}
