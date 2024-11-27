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
    text: "Give Now",
    onSuccess: () => {
      alert("Thank you!!! Your giving has been received. God bless you.");
      setAmount("");
      setEmail("");
      setName("");
      setPhone("");
    },
    onClose: () => alert("You have not given yet!!!"),
  };

  const style = {
    input:
      " font-medium bg-smokeWhite text-darkmaroon text-lg w-full py-2 px-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button:
      " font-medium hover:bg-maroon text-lg block w-full px-4 py-2 bg-darkmaroon text-darkGrey rounded-md",
  };

  return (
    <main>
      <div className="border-2 bg-smokeWhite border-darkGrey rounded-2xl w-[80%] mx-auto my-10">
        <div className="w-[100%] mx-auto">
          <h1 className="mt-5 text-center text-4xl sm:text-5xl md:text-6xl font-sofia-bold text-darkmaroon tracking-tight mb-3">
            You can give here
          </h1>
          <h2 className=" text-midGrey font-medium text-sm sm:text-base tracking-tight italic text-center">
            <span>
              -THE LORD GIVES ME SEED FOR SOWING AND HE GIVES ME BREAD FOR MY
              FOOD. TODAY I DECLARE, I RECEIVE BOUNTIFUL HARVEST OF SEEDS AND I
              GIVE IT WHERE HE SHOWS AND DIRECT, ALL MY NEEDS ARE MET AND ALL MY
              BILLS ARE PAID, MY BARNS EXPAND FOR MORE TO COME IN FOR THE GLORY
              OF GOD, FOR THE FURTHERANCE OF HIS KINGDOM AND FOR ME TO ENJOY
              LIFE, AFTER A GODLY SORT AND FOR A GOOD WITNESS.
            </span>
          </h2>
        </div>

        <div className="my-4 w-[80%] mx-auto">
          <input
            type="email"
            placeholder="Email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            className={style.input}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            className={style.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone number"
            className={style.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <PaystackButton
            className={style.button}
            {...componentProps}
          />
        </div>
      </div>
    </main>
  );
};

export default Payment;
