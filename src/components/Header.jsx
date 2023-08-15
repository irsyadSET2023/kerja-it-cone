import React from "react";
import Button from "./ui/Button";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white flex justify-between w-screen py-6 px-8 border border-gray-500">
      <h5>Logo</h5>
      <div className="flex justify-center items-center gap-4">
        <Button variant="outline">📈 Stats</Button>
        <Button variant="outline">✈️ Talents</Button>
        <Button variant="outline">📤 Post Jobs</Button>
        <Button variant="outline">💌 Get Job Alerts</Button>
        <Button variant="outline">☁️ Log In</Button>
        <Button variant="outline">✨ Register</Button>
      </div>
    </div>
  );
};

export default Header;
