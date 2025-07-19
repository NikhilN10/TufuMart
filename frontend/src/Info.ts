
import type { Industry } from "./type/Industry";

const services = [
  {
    title: "Product Procurement",
    description: "We find and supply industrial products at competitive prices.",
    image: "/image-102.png", // ✅
  },
  {
    title: "Logistics Management",
    description: "Timely and optimized delivery for all your bulk orders.",
    image: "/03-logistics02-2.png", // ✅
  },
  {
    title: "Quality Assurance",
    description: "Every item is inspected and verified before dispatch.",
    image: "/istockphoto-1177180781-612x612.jpg", // ✅
  },
  {
    title: "Inventory Planning",
    description: "Smart insights to maintain your stock without overloading.",
    image: "/guide-to-inventory-planning-with-ai-1130x641.jpg", // ✅
  },
];
import { Factory, Building2, Pickaxe, Fuel, Cog, Car, Users, Smartphone, GraduationCap } from "lucide-react";
const industries: Industry[] = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Complete industrial solutions for manufacturing excellence",
    image: "/Industrial.jpg",
    gradient: "bg-gradient-to-br from-blue-600 to-purple-700",
    products: [
      "Industrial Machinery",
      "Production Equipment",
      "Assembly Line Components",
      "Quality Control Instruments",
      "Safety Equipment",
      "Maintenance Tools",
      "Raw Materials",
      "Packaging Machinery",
      "Conveyors Systems",
      "Industrial Automation Components"
    ]
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Building materials and equipment for construction projects",
    image: "/Construction.jpg",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600",
    products: [
      "Heavy Construction Equipment",
      "Building Materials",
      "Concrete Mixers",
      "Excavators & Bulldozers",
      "Safety Gear",
      "Hand Tools",
      "Electrical Equipment",
      "Plumbing Supplies",
      "Roofing Materials",
      "Steel & Structural Materials"
    ]
  },
  {
    icon: Pickaxe,
    title: "Mining",
    description: "Specialized equipment and supplies for mining operations",
    image: "/Mining.jpg",
    gradient: "bg-gradient-to-br from-yellow-600 to-orange-700",
    products: [
      "Mining Machinery",
      "Drilling Equipment",
      "Excavation Tools",
      "Safety Equipment",
      "Crushing & Grinding Equipment",
      "Conveyor Systems",
      "Processing Equipment",
      "Ventilation Systems",
      "Protective Gear",
      "Mining Vehicles"
    ]
  },
  {
    icon: Fuel,
    title: "Oil and Gas",
    description: "Comprehensive solutions for oil and gas industry needs",
    image: "/ONG.jpg",
    gradient: "bg-gradient-to-br from-emerald-600 to-teal-700",
    products: [
      "Drilling Equipment",
      "Pipeline Components",
      "Valves & Fittings",
      "Pumps & Compressors",
      "Safety Systems",
      "Instrumentation",
      "Refining Equipment",
      "Storage Tanks",
      "Control Systems",
      "Maintenance Equipment"
    ]
  },
  {
    icon: Cog,
    title: "Industrial Goods and Machineries",
    description: "Wide range of industrial goods and machinery solutions",
    image: "/Metalworking1.jpg",
    gradient: "bg-gradient-to-br from-slate-600 to-gray-700",
    products: [
      "Industrial Machines",
      "Power Tools",
      "Hydraulic Equipment",
      "Pneumatic Systems",
      "Generators",
      "Compressors",
      "Material Handling Equipment",
      "Workshop Tools",
      "Measurement Instruments",
      "Industrial Supplies"
    ]
  },
  {
    icon: Car,
    title: "Automobile",
    description: "Auto parts and equipment for automotive industry",
    image: "/Automotive.jpg",
    gradient: "bg-gradient-to-br from-red-600 to-pink-700",
    products: [
      "Engine Parts",
      "Transmission Components",
      "Brake Systems",
      "Electrical Components",
      "Body Parts",
      "Tires & Wheels",
      "Lubricants & Fluids",
      "Diagnostic Equipment",
      "Workshop Tools",
      "Safety Equipment"
    ]
  },
  {
    icon: Users,
    title: "Consumer",
    description: "Consumer goods and retail solutions",
    image: "/Consumer.jpg",
    gradient: "bg-gradient-to-br from-indigo-600 to-purple-700",
    products: [
      "Electronics",
      "Home Appliances",
      "Furniture",
      "Kitchenware",
      "Personal Care Products",
      "Sports Equipment",
      "Toys & Games",
      "Fashion Accessories",
      "Home Decor",
      "Health & Wellness Products"
    ]
  },
  {
    icon: Smartphone,
    title: "IT",
    description: "Information technology solutions and equipment",
    image: "/It.jpg",
    gradient: "bg-gradient-to-br from-cyan-600 to-blue-700",
    products: [
      "Computer Hardware",
      "Servers & Storage",
      "Networking Equipment",
      "Software Solutions",
      "Security Systems",
      "Audio/Visual Equipment",
      "Cables & Accessories",
      "Printers & Scanners",
      "Mobile Devices",
      "IT Accessories"
    ]
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Educational equipment and supplies for institutions",
    image: "/Education.jpg",
    gradient: "bg-gradient-to-br from-green-600 to-emerald-700",
    products: [
      "Laboratory Equipment",
      "Educational Software",
      "Audio/Visual Systems",
      "Classroom Furniture",
      "Sports Equipment",
      "Library Supplies",
      "Computer Labs",
      "Science Equipment",
      "Art Supplies",
      "Educational Materials"
    ]
  }
];

export { services, industries };
