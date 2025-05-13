import { Link } from "react-router-dom";

//Import IF
import AppleFuji from "../assets/images/products/importfruit/apple fuji.jpg";
import GreenApple from "../assets/images/products/importfruit/green apple.jpeg";
import LemonKarton from "../assets/images/products/importfruit/lemon karton.jpg";
import OrangeKarton from "../assets/images/products/importfruit/orange karton.jpg";
import RedApple from "../assets/images/products/importfruit/red apple.jpg";

// Imported Fruits Data
const importFruits = [
  { id: 1, name: "Apple Fuji", src: AppleFuji },
  { id: 2, name: "Green Apple", src: GreenApple },
  { id: 3, name: "Lemon in Carton", src: LemonKarton },
  { id: 4, name: "Orange in Carton", src: OrangeKarton },
  { id: 5, name: "Red Apple", src: RedApple },
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
export default function ImportedFruits() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <PageHeader
        title="IMPORTED FRUITS"
        subtitle="Explore our range of fresh imported fruit products."
      />

      <Section title="Imported Fruits">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {importFruits.map((product) => (
            <ProductCard key={product.id} {...product} type="importFruits" />
          ))}
        </div>
      </Section>
    </main>
  );
}