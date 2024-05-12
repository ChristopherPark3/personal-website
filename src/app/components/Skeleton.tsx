export const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={
      "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-800  to-neutral-700 items-center justify-center " +
      className
    }
  >
    Currently developing...
  </div>
);

export const MobileSkeleton = () => (
  <div className="h-32 w-60 flex items-center justify-center bg-gradient-to-br from-neutral-800  to-neutral-700 text-white">
    Currently developing...
  </div>
);
