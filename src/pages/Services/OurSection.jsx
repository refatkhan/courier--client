import { FaShippingFast, FaGlobeAsia, FaWarehouse, FaMoneyBillWave, FaBuilding, FaUndo } from "react-icons/fa";
import { motion } from "framer-motion";

const cardData = [
    {
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        icon: <FaShippingFast className="text-4xl text-blue-500 dark:text-blue-400" />,
    },
    {
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        icon: <FaGlobeAsia className="text-4xl text-green-500 dark:text-green-400" />,
    },
    {
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        icon: <FaWarehouse className="text-4xl text-orange-500 dark:text-orange-400" />,
    },
    {
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        icon: <FaMoneyBillWave className="text-4xl text-yellow-500 dark:text-yellow-300" />,
    },
    {
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
        icon: <FaBuilding className="text-4xl text-purple-500 dark:text-purple-400" />,
    },
    {
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        icon: <FaUndo className="text-4xl text-red-500 dark:text-red-400" />,
    },
];

export default function OurSection() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto text-center px-4">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Our Section
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    We provide a wide range of delivery and logistics solutions to make your business smoother and faster.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.01 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition"
                        >
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
