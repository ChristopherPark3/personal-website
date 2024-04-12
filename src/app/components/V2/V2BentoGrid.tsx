import { BentoGrid, BentoGridItem } from "./Bento/BentoGrid";

export default function V2BentoGrid({ className }: { className: string }) {
  return (
    <BentoGrid className={className}>
      {items.map((item, i) => {
        return (
          <BentoGridItem

            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        );
      })}
    </BentoGrid>
  );
}

const items = [
  { title: "test1", description: "test 1", header: "test 1", className: "bg-green-100" },
  { title: "test1", description: "test 1", header: "test 1", className: "bg-green-100" },
  { title: "test1", description: "test 1", header: "test 1", className: "bg-green-100" },
  { title: "test1", description: "test 1", header: "test 1", className: "bg-green-100" },
  { title: "test1", description: "test 1", header: "test 1", className: "bg-green-100" },
  { title: "test1", description: "test 1", header: "test 1", className: "bg-green-100" },
];

// key={i}
// title={item.title}
// description={item.description}
// header={item.header}
// className={item.className}
// icon={item.icon}
