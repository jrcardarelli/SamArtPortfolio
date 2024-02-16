import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-row min-h-screen bg-gradient-to-b from-eggshell from-60% to-background to-90%">
          <div className="flex flex-col min-h-screen w-1/5 bg-eggshell sticky">
              <h2 className="text-normal-text">HELLO I AM HERE NOW</h2>
          </div>
          <div className="line w-2 min-h-screen bg-background"></div>
          <div className="flex flex-col min-h-screen w-4/5">
              <h2 className="text-normal-text">HI IM HERE TOO</h2>
          </div>
      </main>
  );
}
