import FullGrid from "@/components/visualization/fullgrid/fullgrid";
import BasicGrid from "@/components/visualization/grid";

export default function Home() {
  return (
    <>
      <div style={{ minHeight: "100vh", height: "100vh" }}>
        {/* <BasicGrid /> */}
        <FullGrid />
      </div>
    </>
  );
}
