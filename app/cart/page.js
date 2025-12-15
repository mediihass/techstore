"use client";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.prix * item.quantity, 0);

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">
        Panier
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Votre panier est vide.</p>
      ) : (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={item.image}
                  alt={item.nom}
                  className="w-full max-w-20 h-auto object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.nom}</h2>
                  <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-4 text-gray-700">
                    <span>Quantité :</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="px-2 py-1 bg-gray-500 rounded hover:bg-gray-400  "
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="px-2 py-1 bg-gray-500 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                    <span className="ml-2 sm:ml-4">
                      x <strong>{item.prix} €</strong>
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline self-start sm:self-auto"
              >
                Supprimer
              </button>
            </div>
          ))}

          <div className="text-right border-t border-gray-200 pt-4">
            <p className="text-xl font-bold">
              Total : {calculateTotal().toFixed(2)} €
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
