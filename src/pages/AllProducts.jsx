import React from "react";
import Cranberry from "../assets/images/Cranberry.png";
import Lemon from "../assets/images/Lemon.png";
import Guava from "../assets/images/Guava.png";
import Apple from "../assets/images/Apple.png";
import Lime from "../assets/images/Lime.png";
import Lychee from "../assets/images/Lychee.png";
import Manggo from "../assets/images/Manggo.png";
import Soursop from "../assets/images/Soursop.png";
import Strawberry from "../assets/images/Strawberry.png";
import Yuzu from "../assets/images/Yuzu.png";
import Pineapple from "../assets/images/Pineapple.png";
import Orange from "../assets/images/Orange.png";
import Tomato from "../assets/images/Tomato.png";

// Product data array
const products = [
  { id: 1, name: "Cranberry Juice", src: Cranberry, onSale: true },
  { id: 2, name: "Lemon Juice", src: Lemon, onSale: true },
  { id: 3, name: "Guava Juice", src: Guava, onSale: true },
  { id: 4, name: "Apple Juice", src: Apple, onSale: true },
  { id: 5, name: "Lime Juice", src: Lime, onSale: true },
  { id: 6, name: "Lychee Juice", src: Lychee, onSale: true },
  { id: 7, name: "Mango Juice", src: Manggo, onSale: true },
  { id: 8, name: "Soursop Juice", src: Soursop, onSale: true },
  { id: 9, name: "Strawberry Juice", src: Strawberry, onSale: true },
  { id: 10, name: "Yuzu Juice", src: Yuzu, onSale: true },
  { id: 11, name: "Pineapple Juice", src: Pineapple, onSale: true },
  { id: 12, name: "Orange Juice", src: Orange, onSale: true },
  { id: 13, name: "Tomato Juice", src: Tomato, onSale: true },
];

// Page header component
const PageHeader = ({ title, subtitle }) => (
  <header className=" text-center mb-16">
    <h1 className=" text-3xl font-bold">{title}</h1>
    <p className=" mt-2 text-gray-600">{subtitle}</p>
  </header>
);

// Section wrapper with a title and divider
const Section = ({ title, children }) => (
  <section>
    <div className=" flex items-center justify-center">
      <h2 className=" text-2xl font-bold text-center mb-4 uppercase cursor-pointer inline-block hover:text-yellow-500">
        {title}
      </h2>
    </div>
    <hr className=" border-t border-gray-500 mb-8" />
    {children}
  </section>
);

// Individual product card
const ProductCard = ({ name, src, onSale }) => (
  <div className=" relative group">
    {onSale && (
      <span className=" absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
        Sale
      </span>
    )}
    <div className=" overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
      <img
        src={src}
        alt={name}
        className=" w-full h-auto object-contain group-hover:scale-105 transition-transform cursor-pointer"
      />
    </div>
    <p className=" mt-4 text-center font-bold text-gray-500 uppercase cursor-pointer hover:text-yellow-500">
      {name} – 1 Litre
    </p>
  </div>
);

// Main AllProducts page
export default function AllProducts() {
  return (
    <main className=" max-w-7xl mx-auto px-6 py-12">
      <PageHeader
        title="ALL PRODUCTS"
        subtitle="All products are categorized into sections."
      />

      <Section title="Juices">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              src={product.src}
              onSale={product.onSale}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
