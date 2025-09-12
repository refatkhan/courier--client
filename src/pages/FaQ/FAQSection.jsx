export default function FAQSection() {
    const faqs = [
        {
            question: "How does this posture corrector work?",
            answer:
                "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
        },
        {
            question: "Is it suitable for all ages and body types?",
            answer:
                "Yes, it is designed to fit most body types and can be worn by people of different ages. Adjustable straps ensure a comfortable fit.",
        },
        {
            question: "Does it really help with back pain and posture improvement?",
            answer:
                "Absolutely. Regular use helps reduce strain on your spine and muscles, alleviating back pain and gradually improving posture.",
        },
        {
            question: "Does it have smart features like vibration alerts?",
            answer:
                "Some advanced models do come with vibration alerts to remind you when you slouch. Please check product specifications before purchase.",
        },
        {
            question: "How will I be notified when the product is back in stock?",
            answer:
                "You can subscribe with your email or phone number, and we’ll notify you immediately once the product is available again.",
        },
    ];

    return (
        <section className="py-16 bg-base-200">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Frequently Asked Questions (FAQ)
                </h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="collapse collapse-plus bg-base-100 shadow-md rounded-lg">
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title text-lg font-medium">
                                {faq.question}
                            </div>
                            <div className="collapse-content text-gray-600">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button className="btn bg-[#CAEB66] rounded-full">
                        See More FAQ’s
                    </button>
                </div>
            </div>
        </section>
    );
}
