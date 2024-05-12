

const MobileFooter = () => {

  return (
    <div className="flex flex-1 items-start">
      <p className="mx-auto text-sm mt-6 max-w-md leading-relaxed text-gray-500">
          Made with amazing tools/libraries like{" "}
          <a className="hover:text-gray-300" href="https://nextjs.org/">
            Next.js
          </a>
          ,{" "}
          <a className="hover:text-gray-300" href="https://tailwindcss.com/">
            TailwindCSS
          </a>
          ,{" "}
          <a className="hover:text-gray-300" href="https://www.framer.com/">
            Framer Motion
          </a>
          ,{" "}
          <a className="hover:text-gray-300" href="https://www.hyperui.dev/">
            HyperUI
          </a>
          ,{" "}
          <a className="hover:text-gray-300" href="https://ui.aceternity.com/">
            AceternityUI
          </a>{" "}
          and{" "}
          <a className="hover:text-gray-300" href="https://fffuel.co/">
            fffuel
          </a>
          .
        </p>
    </div>
  )
}

export default MobileFooter;