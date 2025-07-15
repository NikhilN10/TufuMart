import { Text } from "@mantine/core";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, description, image }: Props) {
  return (
    <div className="relative w-full h-[300px] overflow-hidden rounded-xl group cursor-pointer">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

      {/* Text content at bottom */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-white text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
