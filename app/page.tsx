import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import sucursales from "@/utils/sucursales";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ backgroundColor: "#3a4b5aAA" }}>
        <div className="min-h-screen font-sans flex flex-col items-center px-4 py-10">
          <div className="flex flex-col items-center mb-8">
            <Image
              src={"/logo.png"}
              alt="SushiMaki Logo"
              width={512}
              height={512}
              className="w-24 h-24 object-contain"
            />
            <h1 className="font-bold text-3xl text-white">SushiMaki</h1>
            <p className="text-white/90 mt-2 text-center">
              ¿A qué sucursal quieres ordenar?
            </p>
            <p className="text-white/70 text-sm text-center max-w-md mt-1">
              Selecciona la sucursal correcta para que tu pedido se prepare en el
              lugar indicado.
            </p>
          </div>

          <div className="grid gap-6 w-full max-w-4xl md:grid-cols-2">
            {sucursales.map((sucursal) => (
              <div
                key={sucursal.id}
                className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <iframe
                  src={sucursal.embedded}
                  width="100%"
                  height="200"
                  loading="lazy"
                  className="w-full"
                />
                <div className="flex flex-col gap-2 p-4 flex-1">
                  <h2 className="font-bold text-xl text-gray-800">
                    {sucursal.name}
                  </h2>
                  <p className="flex items-start gap-1 text-sm text-gray-600">
                    <MapPin size={16} className="mt-0.5 shrink-0" />
                    {sucursal.address}
                  </p>
                  <Link
                    href={`/${sucursal.id}`}
                    className="mt-auto w-full text-center bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow"
                  >
                    Ordenar en esta sucursal
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
