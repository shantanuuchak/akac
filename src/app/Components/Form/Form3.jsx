"use client";
import { useState } from "react";
const Form3 = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSc7a-eJIYhkiHEoo2LHUiAbbVIPmq2XOcosIeR024amFQoP3g/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: data,
      }
    );

    setSubmitted(true);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="cs_contact_form">
      <h2 className="text-center cs_fs_36 cs_semibold">Book An Appointment</h2>
      <input
        type="text"
        className="cs_form_field cs_mb_22"
        placeholder="Your Name"
        name="entry.455049253"
        required
      />
      <input
        type="email"
        className="cs_form_field cs_mb_22"
        placeholder="Your Email"
        name="entry.240261482"
        required
      />
      <input
        type="text"
        className="cs_form_field cs_mb_22"
        placeholder="Select Subjects"
        name="entry.1641905770"
        required
      />
      <textarea
        cols="30"
        rows="4"
        className="cs_form_field cs_mb_22"
        placeholder="Write Message..."
        name="entry.2118204743"
      ></textarea>
      <button className="cs_btn cs_style_1 w-100" type="submit">
        <span>Appointment Now</span>
      </button>
      {submitted && (
        <p className="cs_success_msg text-center mt-4">
          ✅ Appointment Submitted!
        </p>
      )}
    </form>
  );
};

export default Form3;
