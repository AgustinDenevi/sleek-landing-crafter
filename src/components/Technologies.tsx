import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";



const reviews = [
  {
    name: "React.JS",
    img: "../../public/technologiesIcons/react-icon-2048x2048-o8k3ymqa.png",
  },
  {
    name: "WordPress",
    img: "../../public/technologiesIcons/wordpress-icon-2048x2048-nw66awj8.png",
  },
  {
    name: "Flutter",
    img: "../../public/technologiesIcons/flutter-icon-1024x1024-vtu2wpze.png",
  },
  {
    name: "Elementor",
    img: "../../public/technologiesIcons/Screenshot_3.jpg",
  },
  {
    name: "ASP.Net",
    img: "../../public/technologiesIcons/aspnet-featured.png",
  },
  {
    name: "JQuery",
    img: "../../public/technologiesIcons/jquery-icon-505x512-u4lk43ex.png",
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
        <img className="rounded-full w-[120px] h-[120]" alt="" src={img} />
        <figcaption className="text-sm font-medium dark:text-white mt-2">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export function Technologies() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl mt-[10px]">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black dark:from-background"></div>
  
    </div>
  );
}
