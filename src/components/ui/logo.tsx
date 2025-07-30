import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export function Logo({ className = "", width = 40, height = 40, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <Image
        src="/logo/tspd.svg"
        alt="TSP Digital Logo"
        width={width}
        height={height}
        className="object-contain"
      />
      {showText && (
        <div className="flex items-center">
          <span className="font-bold text-xl text-black dark:text-white">TSP</span>
          <span className="font-medium text-black dark:text-white ml-1">Digital</span>
        </div>
      )}
    </Link>
  );
}

export function LogoIcon({ className = "", width = 32, height = 32 }: LogoProps) {
  return (
    <Image
      src="/logo/tspd.svg"
      alt="TSP Digital"
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
} 