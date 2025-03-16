import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-white">getDocs, fine tuning your beloved AI in a few clicks!</h1>
      <Button>Get Started</Button>
    </div>
  );
}
