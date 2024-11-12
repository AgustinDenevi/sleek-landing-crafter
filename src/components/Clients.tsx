import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import ejercitoArg from "../../public/clientsIcons/Screenshot_3.jpg";



const reviews = [
  {
    name: "Ejército Argentino",
    img: ejercitoArg,
  },
  {
    name: "Colegio Milton",
    img: "../../public/clientsIcons/277760296_402379445223248_7172542210953580293_n.jpg",
  },
  {
    name: "Estancias Chiripa",
    img: "../../public/clientsIcons/Screenshot_3-2.jpg",
  },
  {
    name: "Círculo Militar",
    img: "../../public/clientsIcons/logo_circulo.png",
  },
  {
    name: "Acheto Films",
    img: "../../public/clientsIcons/Screenshot_4.jpg",
  },
  {
    name: "Facultad Ingeniería del Ejército",
    img: "../../public/clientsIcons/300417279_497292045735505_1493508741316747333_n.jpg",
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
        <img className="rounded-full " alt="" src={img} style={{ width: '120px', height: '120px' }}/>
        <figcaption className="text-sm font-medium dark:text-white mt-2">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[210px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl mt-[5px] ">
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
