// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/HomePage";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Banner />
    </div>
  );
}
