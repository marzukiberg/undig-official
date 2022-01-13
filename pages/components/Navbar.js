import { useEffect, useRef } from 'react';

const Navbar = () => {
  const sidebarRef = useRef();
  const navbarRef = useRef();

  useEffect(() => {
    toggleNavbar();
  }, []);

  const toggleNavbar = () => {
    let lastScrollTop = 0;

    window.addEventListener(
      'scroll',
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = navbarRef.current;
        if (navbar) {
          if (st > lastScrollTop) {
            if (navbar.classList.contains('-translate-y-full')) {
              setTimeout(() => {
                navbar.classList.remove('-translate-y-full');
              }, 300);
            }
          } else {
            if (!navbar.classList.contains('-translate-y-full')) {
              navbar.classList.add('-translate-y-full');
            }
          }
          lastScrollTop = st <= 0 ? 0 : st;
        }
      },
      false
    );
  };

  const toggleSidebar = () => {
    const sidebar = sidebarRef.current;
    if (!sidebar.classList.contains('-translate-x-full')) {
      sidebar.classList.add('-translate-x-full');
    } else {
      sidebar.classList.remove('-translate-x-full');
    }
  };
  return (
    <nav
      className="bg-white p-2 shadow-lg fixed transform -translate-y-full top-0 left-0 w-full z-50 duration-300"
      ref={navbarRef}
    >
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <a href="#" className="p-2 rounded font-greatvb text-xl font-bold">
          Undig.id
        </a>

        <div>
          <a
            href="#"
            onClick={toggleSidebar}
            className="inline-flex w-11 h-11 rounded items-center justify-center lg:hidden"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>

          <div
            ref={sidebarRef}
            className="sidebar fixed left-0 top-0 h-screen w-3/4 shadow-lg bg-white space-y-3 p-3 transform -translate-x-full duration-300 lg:static lg:p-0 lg:space-y-0 lg:h-auto lg:min-w-full lg:translate-x-0 lg:shadow-none"
          >
            <div className="text-center space-y-2 p-3 lg:hidden">
              <span className="text-3xl font-bold font-greatvb">Undig.id</span>
              <span className="text-gray-500 font-quicksand block capitalize">
                Buat Undangan Pernikahanmu Spesial bersama kami
              </span>
            </div>

            <div className="font-quicksand font-bold space-y-2 lg:space-y-0">
              {Object.entries({
                '/': 'Home',
                alur: 'Alur',
                paket: 'Paket',
                template: 'Template',
                contact: 'Kontak',
              }).map((entry, index) => (
                <a
                  key={index}
                  onClick={toggleSidebar}
                  href={`#${entry[0]}`}
                  className="block p-3 px-6 text-center text-pink-700 hover:bg-pink-500 hover:shadow-lg hover:text-white duration-300 lg:inline-block lg:w-28"
                >
                  {entry[1]}
                </a>
              ))}
              <a
                onClick={toggleSidebar}
                href={`#`}
                className="block p-3 text-center text-gray-700 bg-gray-100 duration-300 lg:hidden"
              >
                Tutup
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
