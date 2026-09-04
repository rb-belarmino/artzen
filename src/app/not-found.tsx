import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6] text-[#28231E] p-4 text-center">
      <h1 className="text-6xl font-serif font-bold text-[#B58F48] mb-4">404</h1>
      <h2 className="text-2xl font-serif font-semibold mb-2">Página não encontrada</h2>
      <p className="text-sm text-[#736B63] max-w-md mb-8">
        O ambiente que você procura não está disponível ou foi movido.
      </p>
      <Button asChild variant="default">
        <Link href="/">Voltar para o Início</Link>
      </Button>
    </div>
  );
}
