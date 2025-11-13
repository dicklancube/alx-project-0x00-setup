import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Use the Card component */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
