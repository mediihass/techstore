export default function Header() {
  return (
    <header className="w-full py-6 bg-gray-100 text-center flex flex-col items-center gap-2">
      {/* Nom du site */}
      <h1 className="text-3xl font-bold text-gray-900 font-poppins">
        TechStore
      </h1>

      {/* Mini-slogan */}
      <p className="text-sm text-gray-600 font-poppins">
        High-Tech & Innovation
      </p>
    </header>
  );
}
