import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import ejercitoArg from "../../public/clientsIcons/Screenshot_3.jpg";
import colegioMilton from "../../public/clientsIcons/277760296_402379445223248_7172542210953580293_n.jpg";
import estanciasChiripa from "../../public/clientsIcons//Screenshot_3-2.jpg";
import cirMil from "../../public/clientsIcons/logo_circulo.png";
import achu from "../../public/clientsIcons/Screenshot_4.jpg";
import ingEj from "../../public/clientsIcons/300417279_497292045735505_1493508741316747333_n.jpg";


const reviews = [
  {
    name: "Ejército Argentino",
    img: ejercitoArg,
    url: "https://www.argentina.gob.ar/ejercito"
  },
  {
    name: "Colegio Milton",
    img: colegioMilton,
    url: ""
  },
  {
    name: "Estancias Chiripa",
    img: estanciasChiripa,
    url: ""
  },
  {
    name: "Círculo Militar",
    img: cirMil,
    url: "https://www.circulomilitar.org.ar/"
  },
  {
    name: "Acheto Films",
    img: achu,
    url: "https://achetofilms.com/"
  },
  {
    name: "Facultad Ingeniería del Ejército",
    img: ingEj,
    url: ""
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  url,
}: {
  img: string;
  name: string;
  url: string;
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
        <a href={url} target="_blank"><img className="rounded-full " alt="" src={img} style={{ width: '120px', height: '120px' }}/></a>
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
