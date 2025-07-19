
interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

function IndustryCard({ title, description, image, onClick }: IndustryCardProps) {
  return (
    <div 
      className="relative h-80 rounded-xl overflow-hidden cursor-pointer group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
        
        <div className="mt-4 text-blue-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view products →
        </div>
      </div>
    </div>
  );
}
export default IndustryCard;