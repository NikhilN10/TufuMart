import React from "react";
import Services from "./components/Services";

type Props = {};

const Info = (props: Props) => {
  return <div>Info</div>;
};

const services = [
  {
    title: "Product Procurement",
    description:
      "We find and supply industrial products at competitive prices.",
    image: "../public/image-102.png",
  },
  {
    title: "Logistics Management",
    description: "Timely and optimized delivery for all your bulk orders.",
    image: "../public/03-logistics02-2.png",
  },
  {
    title: "Quality Assurance",
    description: "Every item is inspected and verified before dispatch.",
    image: "../public/istockphoto-1177180781-612x612.jpg",
  },
  {
    title: "Inventory Planning",
    description: "Smart insights to maintain your stock without overloading.",
    image: "../public/guide-to-inventory-planning-with-ai-1130x641.jpg",
  },
];

export { services };
