import { Link } from "react-router-dom";

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

// Data
const juice1 = [
  { id: 1, name: "Cranberry Juice", src: Cranberry1 },
  { id: 2, name: "Lemon Juice", src: Lemon1 },
  { id: 3, name: "Guava Juice", src: Guava1 },
  { id: 4, name: "Apple Juice", src: Apple1 },
  { id: 5, name: "Lime Juice", src: Lime1 },
  { id: 6, name: "Lychee Juice", src: Lychee1 },
  { id: 7, name: "Mango Juice", src: Mango1 },
  { id: 8, name: "Soursop Juice", src: Soursop1 },
  { id: 9, name: "Strawberry Juice", src: Strawberry1 },
  { id: 10, name: "Yuzu Juice", src: Yuzu1 },
  { id: 11, name: "Pineapple Juice", src: Pineapple1 },
  { id: 12, name: "Orange Juice", src: Orange1 },
  { id: 13, name: "Tomato Juice", src: Tomato1 },
];

const juice5 = [
  { id: 1, name: "Cranberry Juice", src: Cranberry5 },
  { id: 2, name: "Lemon Juice", src: Lemon5 },
  { id: 3, name: "Guava Juice", src: Guava5 },
  { id: 4, name: "Apple Juice", src: Apple5 },
  { id: 5, name: "Lime Juice", src: Lime5 },
  { id: 6, name: "Pink Grape Fruit Juice", src: PinkGrapeFruit5 },
  { id: 7, name: "Mango Juice", src: Mango5 },
  { id: 8, name: "Soursop Juice", src: Soursop5 },
  { id: 9, name: "Strawberry Juice", src: Strawberry5 },
  { id: 10, name: "Yuzu Juice", src: Yuzu5 },
  { id: 11, name: "Pineapple Juice", src: Pineapple5 },
  { id: 12, name: "Orange Juice", src: Orange5 },
  { id: 13, name: "Tomato Juice", src: Tomato5 },
  { id: 14, name: "Floren Orange Juice", src: FlorenOrange5 },
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
export default function JuiceOnly() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <PageHeader
        title="JUICES ONLY"
        subtitle="View our available juice products by size."
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
    </main>
  );
}
