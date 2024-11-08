import { SVGProps } from "react";

export interface MacbookProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
}

export default function MacBook({
  width = 1000,
  height = 600,
  src,
  ...props
}: MacbookProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        rx="20"
        ry="20"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <rect
        x="10"
        y="10"
        width={width - 20}
        height={height - 50}
        className="dark:fill-[#262626] fill-white"
      />
      {src && (
        <image
          href={src}
          x="10"
          y="10"
          width={width - 20}
          height={height - 50}
          preserveAspectRatio="xMidYMid slice"
        />
      )}
      <rect
        x="20"
        y={height - 30}
        width={width - 40}
        height="20"
        rx="10"
        ry="10"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
    </svg>
  );
}
