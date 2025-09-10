import { FaBoxOpen, FaMoneyCheckAlt, FaWarehouse, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Booking Pick & Drop",
        description: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <FaBoxOpen className="text-4xl text-blue-500 dark:text-blue-400" />,
    },
    {
        title: "Cash On Delivery",
        description: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <FaMoneyCheckAlt className="text-4xl text-green-500 dark:text-green-400" />,
    },
    {
        title: "Delivery Hub",
        description: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <FaWarehouse className="text-4xl text-orange-500 dark:text-orange-400" />,
    },
    {
        title: "Booking SME & Corporate",
        description: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <FaBuilding className="text-4xl text-purple-500 dark:text-purple-400" />,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    How It Works
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    Simple steps to make your delivery experience fast and hassle-free.
                </p>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
