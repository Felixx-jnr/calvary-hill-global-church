"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import PaystackButton with SSR disabled
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

const Payment = () => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string;
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: Number(amount) * 100,
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone,
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for donating to us! We do not take it for granted!!"),
    onClose: () => alert("Wait! You need to donate, don't go!!!!"),
  };

  const style = {
    input:
      "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button: "block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md",
  };

  return (
    <div className="px-4 mt-28">
      <h1 className="text-center ">Make your payment here</h1>
    </div>
  );
};

export default Payment;
