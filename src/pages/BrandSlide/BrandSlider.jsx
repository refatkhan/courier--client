import Marquee from "react-fast-marquee";
import amazon from "../../assets/brands/amazon.png";
import amazonVector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import startPeople from "../../assets/brands/start-people 1.png";
import start from "../../assets/brands/start.png";

const brands = [amazon, amazonVector, casio, moonstar, randstad, startPeople, start];

export default function BrandSlider() {
    return (
        <div className="w-full bg-white dark:bg-gray-900 py-6">
            <Marquee gradient={false} speed={40}>
                {brands.map((logo, i) => (
                    <img
                        key={i}
                        src={logo}
                        alt={`Brand ${i}`}
                        className="h-6 mx-[100px] object-contain mb-3"
                    />
                ))}
            </Marquee>
        </div>
    );
}
