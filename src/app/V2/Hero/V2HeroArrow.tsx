import { motion } from "framer-motion";
export default function V2HeroArrow({
  setArrowInView,
}: {
  setArrowInView: (status: boolean) => void;
}) {
  return (
    <motion.div
      className="fixed top-[60vh] left-[50vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.3 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => {
          setArrowInView(false);
          if (window.innerHeight > 800) {
            window.scrollTo({ top: 800, behavior: "smooth" });
          } else {
            window.scrollTo({ top: 680, behavior: "smooth" });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-down"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </button>
    </motion.div>
  );
}
