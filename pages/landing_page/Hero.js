const Hero = () => {
  return (
    <section className="hero bg-white bg-opacity-75">
      <img
        src="images/wedding-table.jpg"
        alt="Hero"
        className="absolute left-0 top-0 w-full h-full object-cover -z-1"
      />
      <div className="container mx-auto min-h-screen table">
        <div className="text-center space-y-6 wow fadeIn table-cell align-middle">
          <h1 className="text-4xl font-redressed lg:text-6xl">Undig.id</h1>
          <p className="font-roboto max-w-lg mx-auto leading-6 lg:text-lg">
            Buat undangan pernikahanmu spesial menggunakan layanan online kami,
            cukup dengan satu link, undang semua kerabat dan teman dekatmu
            dengan mudah.
          </p>
          <a
            href="#mengapa_kami"
            className="font-poppins inline-block px-12 py-2 rounded-full bg-white  border border-pink-500 shadow-lg text-pink-500 hover:bg-pink-500 focus:bg-pink-500  transform hover:scale-105 focus:scale-105 duration-300 hover:text-white focus-within:text-white"
          >
            MULAI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
