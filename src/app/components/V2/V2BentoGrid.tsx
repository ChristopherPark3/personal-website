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
  { title: "test1", description: "description here", header: "header", className: "bg-green-100 h-28" },
  { title: "test2", description: "test 1", header: "test 1", className: "bg-green-100 h-28" },
  { title: "test3", description: "test 1", header: "test 1", className: "bg-green-100 h-28" },
  { title: "test4", description: "test 1", header: "test 1", className: "bg-green-100 h-28" },
  { title: "test5", description: "test 1", header: "test 1", className: "bg-green-100 h-28" },
  { title: "test6", description: "test 1", header: "test 1", className: "bg-green-100 h-28" },
];

// key={i}
// title={item.title}
// description={item.description}
// header={item.header}
// className={item.className}
// icon={item.icon}
