import dynamic from "next/dynamic";

const DynamicHomePageV2 = dynamic(() => import("./V2/_HomePageV2"), {
  ssr: false,
});

export default function Home() {
  return <DynamicHomePageV2 />;
}
