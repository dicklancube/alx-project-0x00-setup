import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>

      <h2 className="text-lg font-semibold mt-10 mb-4">Buttons</h2>

      <div className="flex flex-wrap gap-4">
        <Button
          title="Small Rounded-sm"
          styles="bg-blue-500 text-white text-sm px-3 py-1 rounded-sm"
        />
        <Button
          title="Medium Rounded-md"
          styles="bg-blue-500 text-white text-base px-4 py-2 rounded-md"
        />
        {/* 👇 IMPORTANT: include rounded-lg literally in the string */}
        <Button
          title="Large Rounded-lg"
          styles="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg"
        />
        <Button
          title="Large Rounded-full"
          styles="bg-blue-500 text-white text-lg px-6 py-3 rounded-full"
        />
      </div>
    </div>
  );
};

export default Landing;
