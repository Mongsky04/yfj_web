// src/pages/ProductDetail.jsx

import { useParams } from "react-router-dom";
import { juice1, juice5, puree, concentrate } from "../components/data/products";

export default function ProductDetail() {
  const { type, id } = useParams();
  const productLists = { juice1, juice5, puree, concentrate };
  const productArray = productLists[type];
  const product = productArray?.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-600 mt-10">Product not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <img src={product.src} alt={product.name} className="rounded shadow-lg" />
      </div>

      <div>
        <span className="bg-yellow-300 text-yellow-900 px-3 py-1 text-sm font-semibold uppercase">
          Sale
        </span>

        <h1 className="text-3xl font-bold mt-4 mb-2 leading-tight">
          {product.name.toUpperCase()}
        </h1>

        <div className="mb-2">
          <span className="text-green-600 font-semibold text-xl">$35.70</span>
          <span className="line-through text-gray-500 ml-2">$42.00</span>
        </div>

        <div className="text-green-700 font-medium mb-2">You save: 15% ($6.30)</div>


        <p className="mb-4 text-gray-700">
            {product.name} is made with pure mountain spring water, cold-pressed, and adaptogens, to reduce stress and inflammation.
        </p>


        <ul className="mb-4 text-sm text-gray-700 space-y-1">
          <li>Size: {product.size}</li>
        </ul>

        <p className="text-xs italic text-gray-500 mb-6">
          *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>


        <p className="text-sm text-gray-600">
          Sparkling Mountain Spring Water, Cold-Pressed Juice,* Cold-Pressed Ginger Juice,* Cold-Pressed Turmeric Juice,* Coconut Nectar,* Ashwagandha,* Cayenne Pepper,* Black Pepper*
        </p>

        <p className="text-sm text-gray-400 mt-1">*Certified Organic Ingredients</p>

        <div className="flex gap-6 mt-8">
          <img src="/icons/sf.svg" alt="Made in SF" className="h-10" />
          <img src="/icons/pickup.svg" alt="Pickup" className="h-10" />
          <img src="/icons/recycle.svg" alt="Recycle" className="h-10" />
          <img src="/icons/spring.svg" alt="Spring Water" className="h-10" />
          <img src="/icons/shipping.svg" alt="Shipping" className="h-10" />
        </div>
      </div>
    </div>
  );
}