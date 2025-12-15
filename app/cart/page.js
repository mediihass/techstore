"use client";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.prix * item.quantity, 0);

  return (
    <div className="min-h-screen w-screen  p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.nom}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold">{item.nom}</h2>
                  <p className="text-gray-500">
                    Quantité :
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="mx-2 bg-gray-300 text-black px-2 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="mx-2 bg-gray-300 text-black px-2 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                    <span className="ml-4">
                      x <span className="mx-4">{item.prix} €</span>
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Supprimer
              </button>
            </div>
          ))}
          <div className="text-right">
            <p className="text-xl font-bold">
              Total : {calculateTotal().toFixed(2)} €
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
