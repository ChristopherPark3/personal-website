export default function Badge({ name }: { name: string }) {
  return (
    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
      {name}
    </span>
  );
}
