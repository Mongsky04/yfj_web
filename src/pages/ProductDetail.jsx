// src/pages/ProductDetail.jsx
import TokpedLogo from "../assets/images/tokped.png"
import Shopeelogo from "../assets/images/shoepe.png"
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
          <span className="text-green-600 font-semibold text-xl">Rp.{product.price},00</span>
        </div>


        <p className="mb-4 text-gray-700">
            {product.description}
        </p>


        <ul className="mb-4 text-sm text-gray-700 space-y-1">
          <li>Size: {product.size}</li>
        </ul>

        <p className="text-xs italic text-gray-500 mb-6">
          *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>


        <p className="text-sm text-gray-600">
          Formulated using quality fruit ingredients and processed for consistent taste and versatility in beverages, desserts, and cooking.
        </p>

          <div className="flex gap-10 mt-8 justify-center items-center">
            <a
              href="https://www.tokopedia.com/yulianafreshjuic/etalase/yuliana-fresh-juice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={TokpedLogo}
                alt="Tokopedia"
                className="w-[120px] h-auto hover:opacity-80 transition-opacity"
              />
            </a>

            <a
              href="https://shopee.co.id/yfj1883?is_from_login=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Shopeelogo}
                alt="Shopee"
                className="w-[120px] h-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

      </div>
    </div>
  );
}