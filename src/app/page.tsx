export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/worldtree-website2/logo.png" alt="WorldTree.ai" className="h-12 w-12" />
          <span className="ml-2 text-2xl font-bold">worldtree.ai</span>
        </div>
        <div className="space-x-8">
          <a href="#" className="text-white hover:text-gray-300">Company</a>
          <a href="#" className="text-blue-500 hover:text-blue-400">Solutions</a>
          <a href="#" className="text-blue-500 hover:text-blue-400">Team</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-8">
          WORLDTREE SECURITY
        </h1>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          We specialize in safeguarding AI and machine learning systems with tailored security solutions.
        </p>
        <p className="text-xl max-w-4xl mx-auto">
          From architecture reviews and threat modeling to compliance advisory and training, we help organizations mitigate risks, align with industry standards, and build trust in their technology.
        </p>
      </main>

      {/* Network Image Section */}
      <div className="relative mt-16">
        <div className="h-[400px] bg-[url('/worldtree-website2/network.jpg')] bg-cover bg-center">
          <div className="absolute bottom-8 left-8 text-5xl font-bold">
            Enhanced Assurance
          </div>
        </div>
      </div>
    </div>
  )
}