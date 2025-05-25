import { Link } from "react-router-dom";
import { importFruits, frozenIQF} from "../components/data/products";

// Import Juice 1 Litre
import Cranberry1 from "../assets/images/products/juice1ltr/Cranberry.png";
import Lemon1 from "../assets/images/products/juice1ltr/Lemon.png";
import Guava1 from "../assets/images/products/juice1ltr/Guava.png";
import Apple1 from "../assets/images/products/juice1ltr/Apple.png";
import Lime1 from "../assets/images/products/juice1ltr/Lime.png";
import Lychee1 from "../assets/images/products/juice1ltr/Lychee.png";
import Mango1 from "../assets/images/products/juice1ltr/Manggo.png";
import Soursop1 from "../assets/images/products/juice1ltr/Soursop.png";
import Strawberry1 from "../assets/images/products/juice1ltr/Strawberry.png";
import Yuzu1 from "../assets/images/products/juice1ltr/Yuzu.png";
import Pineapple1 from "../assets/images/products/juice1ltr/Pineapple.png";
import Orange1 from "../assets/images/products/juice1ltr/Orange.png";
import Tomato1 from "../assets/images/products/juice1ltr/Tomato.png";

// Import Juice 5 Litre
import Cranberry5 from "../assets/images/products/juice5ltr/Cranberry.png";
import Lemon5 from "../assets/images/products/juice5ltr/Lemon.png";
import Guava5 from "../assets/images/products/juice5ltr/Guava.png";
import Apple5 from "../assets/images/products/juice5ltr/Apple.png";
import Lime5 from "../assets/images/products/juice5ltr/Lime.png";
import PinkGrapeFruit5 from "../assets/images/products/juice5ltr/PinkGrapeFruit.png";
import Mango5 from "../assets/images/products/juice5ltr/Mango.png";
import Soursop5 from "../assets/images/products/juice5ltr/Soursop.png";
import Strawberry5 from "../assets/images/products/juice5ltr/Strawberry.png";
import Yuzu5 from "../assets/images/products/juice5ltr/Yuzu.png";
import Pineapple5 from "../assets/images/products/juice5ltr/Pineapple.png";
import Orange5 from "../assets/images/products/juice5ltr/Orange.png";
import Tomato5 from "../assets/images/products/juice5ltr/Tomato.png";
import FlorenOrange5 from "../assets/images/products/juice5ltr/FlorenOrange.png";
import FlorenMango5 from "../assets/images/products/juice5ltr/FlorenMango.png";
import FlorenApple5 from "../assets/images/products/juice5ltr/FlorenApple.png";
import FlorenPineapple5 from "../assets/images/products/juice5ltr/FlorenPineapple.png";
import FlorenGuava5 from "../assets/images/products/juice5ltr/FlorenGuava.png";
import Lychee5 from "../assets/images/products/juice5ltr/Lychee.png";


// Import Concentrate
import AppleConce from "../assets/images/products/concentrate/AppleConcentrate.png";
import OrangeConce from "../assets/images/products/concentrate/OrangeConcentrate.png";

// Import Puree
import StrawberryPuree from "../assets/images/products/puree/StrawberryPuree.png";
import MangoPuree from "../assets/images/products/puree/MangoPuree.png";

// Product data arrays
const juice1 = [
  { id: 1, name: "Cranberry Juice", src: Cranberry1, onSale: true },
  { id: 2, name: "Lemon Juice", src: Lemon1, onSale: true },
  { id: 3, name: "Guava Juice", src: Guava1, onSale: true },
  { id: 4, name: "Apple Juice", src: Apple1},
  { id: 5, name: "Lime Juice", src: Lime1, onSale: true },
  { id: 6, name: "Lychee Juice", src: Lychee1},
  { id: 7, name: "Mango Juice", src: Mango1},
  { id: 8, name: "Soursop Juice", src: Soursop1},
  { id: 9, name: "Strawberry Juice", src: Strawberry1},
  { id: 10, name: "Yuzu Juice", src: Yuzu1},
  { id: 11, name: "Pineapple Juice", src: Pineapple1},
  { id: 12, name: "Orange Juice", src: Orange1, onSale: true },
  { id: 13, name: "Tomato Juice", src: Tomato1},
];

const juice5 = [
  { id: 1, name: "Cranberry Juice", src: Cranberry5, onSale: true },
  { id: 2, name: "Lemon Juice", src: Lemon5, onSale: true },
  { id: 3, name: "Guava Juice", src: Guava5, onSale: true },
  { id: 4, name: "Apple Juice", src: Apple5, onSale: true },
  { id: 5, name: "Lime Juice", src: Lime5, onSale: true },
  { id: 6, name: "Pink Grape Fruit Juice", src: PinkGrapeFruit5},
  { id: 7, name: "Mango Juice", src: Mango5},
  { id: 8, name: "Soursop Juice", src: Soursop5},
  { id: 9, name: "Strawberry Juice", src: Strawberry5},
  { id: 10, name: "Yuzu Juice", src: Yuzu5},
  { id: 11, name: "Pineapple Juice", src: Pineapple5},
  { id: 12, name: "Orange Juice", src: Orange5, onSale: true},
  { id: 13, name: "Tomato Juice", src: Tomato5},
  { id: 14, name: "Floren Orange Juice", src: FlorenOrange5},
  { id: 15, name: "Floren Apple Juice", src: FlorenApple5},
  { id: 16, name: "Floren Mango Juice", src: FlorenMango5},
  { id: 17, name: "Floren Pineapple Juice", src: FlorenPineapple5},
  { id: 18, name: "Floren Guava Juice", src: FlorenGuava5},
  { id: 19, name: "Lychee Juice", src: Lychee5}
];

const puree = [
  { id: 1, name: "Strawberry Puree", src: StrawberryPuree},
  { id: 2, name: "Mango Puree", src: MangoPuree},
];

const concentrate = [
  { id: 1, name: "Apple Concentrate", src: AppleConce},
  { id: 2, name: "Orange Concentrate", src: OrangeConce},
];

// Page header component
const PageHeader = ({ title, subtitle }) => (
  <header className="text-center mb-16">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="mt-2 text-gray-600">{subtitle}</p>
  </header>
);

// Section wrapper
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

// Product Card with dynamic link
const ProductCard = ({ id, name, src, onSale, type }) => (
  <Link to={`/product/${type}/${id}`} className="block">
    <div className="relative group">
      {onSale && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
          Best Seller
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

// Main Page
export default function AllProducts() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <PageHeader
        title="ALL PRODUCTS"
        subtitle="All products are categorized into sections."
      />

      <Section title="Juices – 1 Litre">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {juice1.map((product) => (
            <ProductCard key={product.id} {...product} type="juice1" />
          ))}
        </div>
      </Section>

      <Section title="Juices – 5 Litre">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {juice5.map((product) => (
            <ProductCard key={product.id} {...product} type="juice5" />
          ))}
        </div>
      </Section>

      <Section title="Purees">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {puree.map((product) => (
            <ProductCard key={product.id} {...product} type="puree" />
          ))}
        </div>
      </Section>

      <Section title="Concentrates">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {concentrate.map((product) => (
            <ProductCard key={product.id} {...product} type="concentrate" />
          ))}
        </div>
      </Section>

      <Section title="Imported Fruits">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {importFruits.map((product) => (
            <ProductCard key={product.id} {...product} type="importFruits" />
          ))}
        </div>
      </Section>

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
