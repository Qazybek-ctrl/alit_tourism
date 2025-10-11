import heroImage from "../assets/hero.png";
import planeIcon from "../assets/plane.png";
import verifiedIcon from "../assets/verified.png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-left text-white max-w-3xl ml-12 lg:ml-[350px] -translate-y-7">
        <div className="flex items-end gap-4 mb-4">
          <h1 className="text-7xl md:text-9xl leading-tight">From Visa</h1>
          <img
            src={planeIcon}
            alt="Plane Icon"
            className="w-14 h-14 md:w-20 md:h-20 object-contain -translate-y-1"
          />
        </div>

        <h1 className="text-7xl md:text-9xl mb-8 leading-tight">
          to Adventure
        </h1>

        <div className="flex items-center gap-4">
          <p className="text-3xl md:text-4xl font-medium">
            Your Trusted Partner in Kazakhstan
          </p>
          <img
            src={verifiedIcon}
            alt="Decor Icon"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
        </div>
      </div>
    </section>
  );
}