import img1 from "../../assets/live-tracking.png";
import img2 from "../../assets/safe-delivery.png";
import img3 from "../../assets/safe-delivery.png";

const features = [
  {
    icon: img1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
  },
  {
    icon: img2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    icon: img3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="grid-cols-3 space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition"
            >
              <div className="flex items-start gap-5">
                {/* Image with right dotted border */}
                <div className="relative pr-4 border-r-2 border-dotted border-gray-400">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="object-contain"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
