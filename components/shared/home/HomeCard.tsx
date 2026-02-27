import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type CardItem = {
  title: string;
  link?: { text: string; href: string };
  items: {
    name: string;
    items?: string[];
    image: string;
    href: string;
  }[];
};

export default function HomeCard({ cards }: { cards: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
      {cards.map((cardItem) => (
        <Card key={cardItem.title}>
          <CardContent className="flex-1 p-4">
            <h3 className="mb-4 text-xl font-bold">{cardItem.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {cardItem.items.map((item) => (
                <Link href={item.href} key={item.name}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="mx-auto aspect-square h-auto max-w-full object-scale-down"
                    height={120}
                    width={120}
                  />
                  <p className="overflow-hidden text-center text-sm text-ellipsis whitespace-nowrap">
                    {item?.name}
                  </p>
                </Link>
              ))}
            </div>
          </CardContent>
          {cardItem.link && (
            <CardFooter>
              <Link className="mt-4 block" href={cardItem.link.href}>
                {cardItem.link.text}
              </Link>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
}
