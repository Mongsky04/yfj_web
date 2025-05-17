import { Link } from "react-router-dom";

// Import Frozen IQF images
import IQFBlueberry from "../assets/images/products/FrozenIQF/iqf blueberry.jpg";
import IQFMixberry from "../assets/images/products/FrozenIQF/iqf mixberry.jpg";
import IQFPineapple from "../assets/images/products/FrozenIQF/iqf pineapple.jpg";
import IQFStrawberry from "../assets/images/products/FrozenIQF/iqf strawberry.jpg";
import MIQFMango from "../assets/images/products/FrozenIQF/miqf mango.jpg";

// Frozen IQF Data
const frozenIQF = [
  { id: 1, name: "IQF Blueberry", src: IQFBlueberry },
  { id: 2, name: "IQF Mixberry", src: IQFMixberry },
  { id: 3, name: "IQF Pineapple", src: IQFPineapple },
  { id: 4, name: "IQF Strawberry", src: IQFStrawberry },
  { id: 5, name: "MIQF Mango", src: MIQFMango },
];

// Components
const PageHeader = ({ title, subtitle }) => (
  <header className="text-center mb-16">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="mt-2 text-gray-600">{subtitle}</p>
  </header>
);

const Section = ({ title, children }) => (
  <section>
    <div className="flex items-center justify-center mb-4">
      <h2 className="text-2xl font-bold uppercase hover:text-yellow-500 cursor-pointer">
        {title}
      </h2>
    </div>
    <hr className="border-t border-gray-500 mb-8" />
    {children}
  </section>
);

const ProductCard = ({ id, name, src, onSale, type }) => (
  <Link to={`/product/${type}/${id}`} className="block">
    <div className="relative group">
      {onSale && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
          Sale
        </span>
      )}
      <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
        <img
          src={src}
          alt={name}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform"
        />
      </div>
      <p className="mt-4 text-center font-bold text-gray-500 uppercase group-hover:text-yellow-500">
        {name}
      </p>
    </div>
  </Link>
);

// Main component export
export default function FrozenIQF() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <PageHeader
        title="FROZEN IQF"
        subtitle="Browse our Individually Quick Frozen fruit collection."
      />

      <Section title="Frozen IQF">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {frozenIQF.map((product) => (
            <ProductCard key={product.id} {...product} type="frozenIQF" />
          ))}
        </div>
      </Section>
    </main>
  );
}
