import { cn } from "../../../../utils/cn";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-6 md:grid-rows-3  gap-4 max-w-7xl mx-auto max-h-[90vh]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  section,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  section?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-neutral-800 border-neutral-700 border-2 justify-between flex flex-col space-y-4 text-gray-200",
        className
      )}
    >
      {section !== "Projects" ? (
        <>
          {header}
          <div className="">
            {icon}
            <div className="font-normal text-gray-400  mb-2 mt-">{title}</div>
            <div className="font-medium text-gray-400 text-xs ">
              {description}
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 gap-2 h-full">
          {header}
          <div className="flex flex-col justify-between p-2">
            <div className="font-normal text-gray-400  mb-2 mt-">{title}</div>
            <div className="font-medium text-gray-400 text-xs ">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
//
