import { SVGProps } from "react";

export interface MacBookProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
}

export default function MacBook({
  width = 700,
  height = 450,
  src,
  ...props
}: MacBookProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Borde de la MacBook */}
      <rect
        x="10"
        y="10"
        width={width - 20}
        height={height - 30}
        rx="15"
        ry="15"
        className="fill-[#B0B0B0]"
      />

      {/* Bisel negro alrededor de la pantalla */}
      <rect
        x="20"
        y="20"
        width={width - 40}
        height={height / 1.4}
        rx="10"
        ry="10"
        className="fill-[#000000]"
      />

      {/* Pantalla */}
      <rect
        x="30"
        y="30"
        width={width - 60}
        height={height / 1.5}
        rx="5"
        ry="5"
        className="fill-[#111111]"
      />

      {/* Imagen dentro de la pantalla */}
      {src && (
        <image
          href={src}
          x="30"
          y="30"
          width={width - 60}
          height={height / 1.5}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#screenRoundedCorners)"
        />
      )}

      {/* Barra inferior (representa el grosor de la base) */}
      <rect
        x="20"
        y={height - 20}
        width={width - 40}
        height="10"
        rx="5"
        ry="5"
        className="fill-[#B0B0B0]"
      />

      {/* Detalle de la cámara en el bisel superior */}
      <circle
        cx={width / 2}
        cy="18"
        r="3"
        className="fill-[#404040]"
      />

      {/* ClipPath para esquinas redondeadas de la pantalla */}
      <defs>
        <clipPath id="screenRoundedCorners">
          <rect x="30" y="30" width={width - 60} height={height / 1.5} rx="5" ry="5" />
        </clipPath>
      </defs>
    </svg>
  );
}
