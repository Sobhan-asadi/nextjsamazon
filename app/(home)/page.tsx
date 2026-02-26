import HomeCarousel from "@/components/shared/home/HomeCarousel";
import data from "@/lib/data";

export default function HomePage() {
  return <HomeCarousel items={data.carousels} />;
}
