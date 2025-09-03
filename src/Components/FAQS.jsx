import React, { useState } from "react";
import { TiStarburst } from "react-icons/ti";

const faqs = [
  {
    question: "What is Chowdeck?",
    answer:
      "Chowdeck is a reliable on-demand food and grocery delivery platform designed to make your everyday life easier. With Chowdeck, you can order meals from your favorite restaurants, snacks from local vendors, or even groceries and have them delivered quickly to your doorstep. Our goal is to provide convenience, speed, and a wide range of food options so you can spend less time worrying about meals and more time enjoying them with ease.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Placing an order on Chowdeck is simple and straightforward. Start by browsing the app or website to view restaurants, vendors, and menus available in your area. Add your preferred meals or groceries to your cart, then proceed to checkout. You will be asked to confirm your delivery address and payment method. Once your order is placed, a rider will be assigned, and you can track your delivery in real-time until it arrives.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Chowdeck supports multiple secure payment options to ensure convenience for all users. You can pay using debit or credit cards, bank transfers, or through your Chowdeck wallet balance. Digital wallets and other supported payment gateways may also be available depending on your location. Our platform prioritizes safe and secure transactions, so no matter which option you choose, you can rest assured your payment is handled with the highest level of reliability and transparency.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Delivery times on Chowdeck vary depending on your location, the restaurant or vendor you order from, and rider availability. However, on average, most customers receive their meals within 30 to 45 minutes. We partner with trusted vendors and professional riders to ensure speed and efficiency. In some cases, delivery may be faster or slightly longer during peak hours, but our real-time tracking keeps you updated every step of the way until your order arrives.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, Chowdeck provides real-time tracking for all orders to give you full visibility and peace of mind. Once your order is confirmed, you will see updates showing when the restaurant accepts and starts preparing it, when a rider has been assigned, and when the rider is on the way. You can follow the rider’s live location on the map in the app or website, making it easy to know exactly when to expect your food at your doorstep.",
  },
  {
    question: "Is there a minimum order amount?",
    answer:
      "Yes, Chowdeck has a minimum order amount that may vary depending on your location and the vendor you are ordering from. This ensures vendors can deliver efficiently while maintaining service quality. During checkout, the app will notify you if your order does not meet the minimum requirement, allowing you to add more items. It’s also worth noting that larger orders may sometimes qualify for discounts, promotions, or reduced delivery fees, depending on the vendor’s policy.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Our support team is always available to help resolve any issues or answer questions you may have while using Chowdeck. You can easily reach out through the Help section in the app or website, where you’ll find options for live chat, submitting a request, or browsing FAQs. Support agents are trained to handle inquiries quickly, whether it’s about an order, payment, or delivery concern. We prioritize fast responses to ensure your experience remains smooth and enjoyable.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Yes, you can cancel an order on Chowdeck, but it must be done before the restaurant starts preparing your meal. Once preparation begins, cancellation may no longer be possible as vendors would have already committed resources to your order. For urgent cancellations, we recommend contacting support immediately through the app. If successful, refunds are processed based on your payment method and can take a short time to reflect, ensuring fairness to both customers and vendors.",
  },
  {
    question: "Does Chowdeck operate in my city?",
    answer:
      "Chowdeck is currently expanding and is available in selected cities across Nigeria. To confirm if we operate in your city, simply download the app or visit the website and enter your delivery address. If your area is covered, you’ll instantly see available vendors and restaurants. If not, don’t worry—Chowdeck is actively growing, and we may arrive in your location soon. You can also follow our social media pages for updates on new city launches and expansions.",
  },
  {
    question: "How much does delivery cost?",
    answer:
      "Delivery costs on Chowdeck depend on several factors, including your location, the distance between you and the vendor, and current demand. The exact delivery fee is always displayed at checkout before you confirm your order, so there are no hidden charges. Sometimes, Chowdeck offers reduced delivery fees, free delivery promos, or discounts depending on promotions and vendor agreements. This ensures you always know what you’re paying for and can enjoy affordable, reliable, and transparent service.",
  },
  {
    question: "Can I schedule an order for later?",
    answer:
      "Yes, Chowdeck allows you to schedule orders in advance to better suit your plans. When placing an order, you can select a future time for delivery instead of requesting immediate service. This feature is especially useful for planning ahead, whether it’s lunch at work, dinner with friends, or a special occasion. Once scheduled, the restaurant will prepare your order in time, and a rider will deliver it promptly at the time you selected for maximum convenience.",
  },
  {
    question: "What if my order arrives incorrect or late?",
    answer:
      "If your order arrives incorrect, missing items, or is delayed beyond the expected time, Chowdeck provides easy ways to resolve the issue. Simply report the problem through the app by selecting your order and describing what went wrong. Our support team will quickly investigate, contact the vendor or rider if necessary, and ensure the issue is corrected. In most cases, refunds, replacements, or compensation are offered depending on the situation, ensuring customers always feel valued and protected.",
  },
  {
    question: "Does Chowdeck offer promotions or discounts?",
    answer:
      "Yes, Chowdeck frequently offers promotions, discounts, and special deals to make your orders even more affordable. These can come in the form of promo codes, seasonal campaigns, free delivery offers, or vendor-specific discounts. To stay updated, keep an eye on app notifications, check banners on the website, or follow our social media pages. Promotions are a great way to explore new vendors while saving money, and Chowdeck ensures customers always have exciting deals to enjoy regularly.",
  },
  {
    question: "Can I become a Chowdeck rider?",
    answer:
      "Yes, Chowdeck provides opportunities for individuals to earn money as delivery riders. To become a rider, simply apply through the official Chowdeck app or website under the 'Join as a Rider' section. Once you sign up, you will go through a short vetting process, and upon approval, you’ll receive the tools and training needed to start delivering orders. As a rider, you’ll enjoy flexible working hours, competitive earnings, and the chance to be part of a fast-growing platform.",
  },
  {
    question: "Can restaurants or vendors join Chowdeck?",
    answer:
      "Absolutely! Chowdeck partners with restaurants, food vendors, and grocery suppliers to help them reach more customers and grow their business. If you own a restaurant or food business, you can apply through the 'Partner with Us' page on the Chowdeck website or app. Once approved, your business will be listed on our platform, and customers in your area can start ordering immediately. Partnering with Chowdeck provides visibility, new revenue opportunities, and reliable support to grow your brand.",
  },
];

const FAQS = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  return (
    <div className="w-[85%] bg-white m-auto border-4 opacity-99 border-black rounded-xl flex flex-col md:flex-row py-10 mt-2">
      {/* Left: Questions list */}

      <div className="w-full md:w-[50%] ">
        <h1 className="text-6xl font-bold mb-6 text-[#0C513F] pl-4 ">FAQs</h1>
        <div className="max-h-[500px] overflow-y-auto custom-scrollbar border-r border-gray-200 px-4 ">
          <ul>
            {faqs.map((faq, idx) => (
              <li
                key={idx}
                className={`cursor-pointer px-4 mb-3 py-4 border text-xl rounded font-bold text-[#0C513F] border-green-100  transition-colors duration-200 ${
                  selectedIdx === idx
                    ? "bg-black flex justify-between items-center text-2xl text-white font-bold"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setSelectedIdx(idx)}
              >
                {faq.question}
                {selectedIdx === idx && (
                  <span className="text-[#FFC501] ">
                    <TiStarburst size={32} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Answer display */}
      <div className="w-full md:w-[50%] ">
        <h1 className="text-6xl pl-8 font-bold mb-6 text-[#0C513F]">Ans.</h1>
        <div className="flex flex-col  px-8 bg-[#FFC501] w-[90%] m-auto rounded-xl py-6 min-h-[500px] overflow-y-auto custom-scrollbar ">
          <TiStarburst size={48} className=" mb-4" />

          <p className=" text-2xl font-semibold">{faqs[selectedIdx].answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
