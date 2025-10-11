import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="dark bg-[#121212] text-white min-h-screen">
      <Header />
      <main className="container mx-auto p-4 pt-24">
        <section id="features" className="min-h-[80vh] py-20">
          <h1 className="text-5xl font-bold text-center">Features</h1>
          <p className="text-center mt-4 text-lg text-gray-400">Discover what Loomtask can do for you.</p>
          {/* Placeholder Content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-700/50">
              <h3 className="text-2xl font-bold text-[#156193]">Feature One</h3>
              <p className="mt-2 text-gray-400">Detailed description of the first amazing feature.</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-700/50">
              <h3 className="text-2xl font-bold text-[#156193]">Feature Two</h3>
              <p className="mt-2 text-gray-400">Detailed description of the second amazing feature.</p>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-700/50">
              <h3 className="text-2xl font-bold text-[#156193]">Feature Three</h3>
              <p className="mt-2 text-gray-400">Detailed description of the third amazing feature.</p>
            </div>
          </div>
        </section>
        <section id="pricing" className="min-h-[80vh] py-20">
          <h1 className="text-5xl font-bold text-center">Pricing</h1>
          <p className="text-center mt-4 text-lg text-gray-400">Simple and transparent pricing.</p>
           {/* Placeholder Content */}
           <div className="mt-16 max-w-lg mx-auto bg-[#1A1A1A] p-8 rounded-lg border border-gray-700/50">
              <h3 className="text-3xl font-bold text-center text-[#156193]">Pro Plan</h3>
              <p className="mt-4 text-center text-5xl font-bold">$10<span className="text-lg font-normal text-gray-400">/month</span></p>
              <p className="mt-6 text-gray-400">Includes access to all features, priority support, and more.</p>
            </div>
        </section>
        <section id="about" className="min-h-[80vh] py-20">
          <h1 className="text-5xl font-bold text-center">About Us</h1>
          <p className="text-center mt-4 text-lg text-gray-400 max-w-2xl mx-auto">We are a team of passionate developers building tools to improve productivity and collaboration.</p>
        </section>
        <section id="contact" className="min-h-[80vh] py-20">
          <h1 className="text-5xl font-bold text-center">Contact</h1>
          <p className="text-center mt-4 text-lg text-gray-400">Get in touch with us.</p>
           {/* Placeholder Content */}
           <div className="mt-16 max-w-lg mx-auto bg-[#1A1A1A] p-8 rounded-lg border border-gray-700/50">
              <p className="text-center">For any inquiries, please email us at <a href="mailto:contact@loomtask.com" className="text-[#156193] hover:underline">contact@loomtask.com</a>.</p>
            </div>
        </section>
      </main>
    </div>
  );
}
