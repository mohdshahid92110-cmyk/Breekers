import { Capabilities } from "@/components/capabilities";
import { ChatDemo } from "@/components/chat-demo";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Why } from "@/components/why";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Capabilities />
        <ChatDemo />
        <Why />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
