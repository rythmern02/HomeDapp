import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>About HomeDapp</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-purple-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Welcome to HomeDapp</h1>
          <p className="text-lg mt-4">Your Trusted Homeownership Companion</p>
          <a
            href="#learn-more"
            className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg font-semibold transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* What is HomeDapp? Section */}
      <section id="learn-more" className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold">What is HomeDapp?</h2>
              <p className="text-gray-600 mt-4">
                HomeDapp is your one-stop solution for all your homeownership needs. We are committed to making
                homeownership accessible and hassle-free.
              </p>
              {/* Add more detailed content here */}
            </div>
            <div>
              {/* Add colorful graphics or icons here */}
            </div>
          </div>
        </div>
      </section>

      {/* How HomeDapp Works Section */}
      <section className="bg-yellow-400 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Add step-by-step guide and features */}
            </div>
            <div>
              {/* Add video tutorial */}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-green-400 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-semibold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add team member details, headshots, and bios */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-pink-400 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-semibold mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Add contact information */}
            </div>
            <div>
              {/* Add contact form */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
