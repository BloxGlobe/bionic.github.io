"use client";

  import Navbar from "./navbar";
  import Hero from "./hero";
  import Testimonials from "./testimonials";
  import Footer from "./footer";

  export default function Home() {
    return (
      <>
        <Navbar />
        <Hero />
        <Testimonials />
        <Footer />
      </>
    );
  }