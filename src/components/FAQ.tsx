import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Most items are delivered instantly after payment confirmation. Some larger orders may take up to 15 minutes. You'll receive detailed instructions via email and in your account dashboard.",
  },
  {
    question: "Is this safe and legitimate?",
    answer: "Absolutely! We use secure payment processing through Stripe, and all transactions are encrypted. We've served over 10,000 customers with a 99.5% satisfaction rate.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and select cryptocurrencies. All payments are processed securely through our payment partners.",
  },
  {
    question: "Can I get a refund?",
    answer: "We offer a satisfaction guarantee on all purchases. If there's an issue with your order, contact our support team within 24 hours for a full refund or replacement.",
  },
  {
    question: "Do I need to share my Roblox password?",
    answer: "Never! We will never ask for your Roblox password. All item transfers are done through secure, official methods that don't require sharing sensitive account information.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our 24/7 support team through the live chat button in the header, via email at support@mybe.gg, or through our Discord server.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle">
              Got questions? We've got answers.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-0"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href="#footer" className="btn-outline-glow inline-block">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
