import type { Ref } from "react";

export default function FloatingNavbar({ ref }: { ref?: Ref<HTMLElement> }) {
  return (
    <div className="fixed top-40 left-10 z-10 bg-white h-40 rounded-2xl">
      <div className="flex flex-col h-full w-full  rounded-2xl p-1">
        <ul>
          <li id="about_me">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // color="white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-laugh h-5 w-5 stroke-black"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
              <line x1="9" x2="9.01" y1="9" y2="9" />
              <line x1="15" x2="15.01" y1="9" y2="9" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}
