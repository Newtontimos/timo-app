import React from "react";

const Subscript = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-white text-center">
      <h1>Join our TIMO community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-3"
          type="email"
          placeholder="Enter your email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input className="mr-2" type="checkbox" />
        <p>Yes, I agree to receive email communication from Timo.</p>
      </div>
    </div>
  );
};

export default Subscript;
