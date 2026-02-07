import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-red-600">Pokémon Marketplace</h1>

      <Button>Browse Cards</Button>
    </main>
  );
}
