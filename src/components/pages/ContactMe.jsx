import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const message = formData.get("message");

    if (!userName || !userEmail || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    emailjs
      .sendForm("service_oc567wd", "template_qtraxan", form.current, {
        publicKey: "e54s3gPjYwiQVwxiy",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); 
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="cm">
      <form ref={form} onSubmit={sendEmail}>

        <h2 className="in">Inquiries</h2>
<div className="iso">
        <div className="left">
          <label >Name:</label>
          <input type="text" name="user_name" />
        </div>

        <div className="right">
          <label>Email:</label>
          <input type="email" name="user_email" />
        </div>
</div>

        <div className="lower">
          <label >Message:</label>
          <textarea name="message" />
          <input type="submit" value="Send" />

        </div>
      </form>
    </div>
  );
}
