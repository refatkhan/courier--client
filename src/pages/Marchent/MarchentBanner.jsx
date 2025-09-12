import bgImg from "../../assets/be-a-merchant-bg.png";   // background image
import parcelImg from "../../assets/location-merchant.png"; // right side image

export default function MarchentBanner() {
  return (
    <section
      className="flex items-center justify-between rounded-2xl overflow-hidden px-6 md:px-12 py-12"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#03373D", // fallback bg
      }}
    >
      {/* Left Content */}
      <div className="text-white space-y-6 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h2>
        <p className="text-gray-200 text-sm md:text-base">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Profast courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="btn bg-[#CAEB66] text-black border-none rounded-full hover:border-[#CAEB66] hover:text-[#CAEB66] hover:bg-transparent">
            Become a Merchant
          </button>
          <button className="btn border-[#CAEB66] text-[#CAEB66] bg-transparent rounded-full hover:bg-[#CAEB66] hover:text-black">
            Earn with Profast Courier
          </button>                   
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex justify-end">
        <img
          src={parcelImg}
          alt="Parcel Illustration"
          className="w-[280px] md:w-[360px] lg:w-[420px] object-contain"
        />
      </div>
    </section>
  );
}
