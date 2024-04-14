export default function V2Footer({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <div className="mx-auto max-w-5xl px-4 py-1 sm:px-6 lg:px-8">
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400">
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
          , {" "}
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
    </footer>
  );
}
