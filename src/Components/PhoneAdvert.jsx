import Marquee from "react-fast-marquee";

const imageItems = [
  "/order-arrived.png",
  "/pickup.png",
  "/accept-order.png",
  "/order-arrived.png",
  "/pickup.png",
  "/accept-order.png",
  "/order-arrived.png",
  "/pickup.png",
  "/accept-order.png",
];

const ImageMarquee = () => {
  return (
    <Marquee className="py-6 " gradient={false} speed={100}>
      {imageItems.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`marquee-img-${index}`}
          className={`w-[336px] h-[693px] object-cover mx-6 rounded-lg transition-all duration-500
            ${index % 2 === 0 ? "mt-6" : "mb-6"}`}
        />
      ))}
    </Marquee>
  );
};

export default ImageMarquee;
