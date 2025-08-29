import Image from "next/image";
import favicon from "/public/favicon.png";

export default function StampLogo() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Image
        src= {favicon}
        alt="ECC Logo"
        width={80}
        height={80}
        className="opacity-90 hover:opacity-100 transition-opacity"
        priority
      />
    </div>
  );
}
