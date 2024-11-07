import { SVGProps } from "react";

export interface IpadProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
}

export default function Ipad({
  width = 600,
  height = 800,
  src,
  ...props
}: IpadProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 70C10 32.5 42.5 0 80 0H520C557.5 0 590 32.5 590 70V730C590 767.5 557.5 800 520 800H80C42.5 800 10 767.5 10 730V70Z"
        className="fill-[#D3D3D3]"
      />
      <path
        d="M5 170C5 169.5 5.5 169 6 169H10V200H6C5.5 200 5 199.5 5 199V170Z"
        className="fill-[#D3D3D3]"
      />
      <path
        d="M6 250C6 249.5 6.5 249 7 249H10V300H7C6.5 300 6 299.5 6 299V250Z"
        className="fill-[#D3D3D3]"
      />
      <path
        d="M590 280H593C593.5 280 594 280.5 594 281V330C594 330.5 593.5 331 593 331H590V280Z"
        className="fill-[#D3D3D3]"
      />
      <path
        d="M15 70C15 34 46.5 5 80 5H520C553.5 5 585 34 585 70V730C585 766 553.5 795 520 795H80C46.5 795 15 766 15 730V70Z"
        className="fill-[#D3D3D3]"
      />
      <path
        opacity="0.5"
        d="M220 5H380V5.5C380 6.6 379.1 7.5 378 7.5H222C220.9 7.5 220 6.6 220 5.5V5Z"
        className="fill-[#D3D3D3]"
      />
      <path
        d="M40 70C40 42.2 62.2 20 90 20H510C537.8 20 560 42.2 560 70V730C560 757.8 537.8 780 510 780H90C62.2 780 40 757.8 40 730V70Z"
        className="fill-[#D3D3D3] stroke-[#D3D3D3] stroke-[0.5]"
      />

      {src && (
        <image
          href={src}
          x="40"
          y="20"
          width="520"
          height="760"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#ipadRoundedCorners)"
        />
      )}
      
      <path
        d="M295 28C295 23 298.5 18 303.5 18C308.5 18 312 23 312 28C312 32 308.5 36 303.5 36C298.5 36 295 32 295 28Z"
        className="fill-[#D3D3D3]"
      />
      <defs>
        <clipPath id="ipadRoundedCorners">
          <rect x="40" y="20" width="520" height="760" rx="40" ry="40" />
        </clipPath>
      </defs>
    </svg>
  );
}
