import React from "react";

const FAQ = () => {
  return (
    <div className="faq-container mt-10">
      <h1 className="text-3xl font-bold text-center">Frequently Asked Questions</h1>
      <div className="faq-item text-center mt-5">
        <h2 className="text-xl font-semibold"> What is GadgetHeaven?</h2>
        <p className="text-md text-white">GadgetHeaven is your one-stop shop for the latest and most innovative tech gadgets and accessories.</p>
      </div>
      <div className="faq-item text-center mt-5">
        <h2 className="text-xl font-semibold">How can I contact customer support?</h2>
        <p className="text-md text-white">Fill out the form with your query, and our team will get back to you within 24-48 hours.</p>
      </div>
      <div className="faq-item text-center mt-5">
        <h2 className="text-xl font-semibold"> Do you offer international shipping?</h2>
        <p className="text-md text-white">Yes, we ship internationally! Shipping times and costs may vary depending on your location.</p>
      </div>
    </div>
  );
};

export default FAQ;
