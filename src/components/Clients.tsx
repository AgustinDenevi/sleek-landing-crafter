import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Ejército Argentino",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Colegio Milton",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Estancias Chiripa",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Círculo Militar",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Acheto Films",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Facultad Ingeniería del Ejército",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        "hover:bg-gray-950/[.05]",
        "dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col items-center">
        <img className="rounded-full w-25 h-25" alt="" src={img} />
        <figcaption className="text-sm font-medium dark:text-white mt-2">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl mt-[10px]">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
      {reviews.map((review) =>(
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black dark:from-background"></div>
  
    </div>
  );
}
