import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";

const Navigation = () => {
  const links = [
    {
      path: "/",
      title: "Home",
      icon: <i className="fa-solid fa-house"></i>,
    },
    {
      path: "/about",
      title: "About",
      icon: <i className="fa-solid fa-user"></i>,
    },
    {
      path: "/projects",
      title: "Projects",
      icon: <i className="fa-solid fa-folder-open"></i>,
    },
    {
      path: "/contact",
      title: "Contact",
      icon: <i className="fa-solid fa-envelope"></i>,
    },
  ];

  return (
    <ul className="px-2 py-4 space-y-2">
      {links.map(({ path, title, icon }) => (
        <li key={path} className="">
          <NavLink
            to={path}
            className={({ isActive }) =>
              `p-2 flex items-center gap-4 rounded-sm transition-colors ${
                isActive
                  ? " bg-primary text-light"
                  : "hover:bg-secondary dark:hover:text-dark"
              }`
            }
          >
            <i className="aspect-square w-4 flex items-center">{icon}</i>
            <span>{title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsMenuOpened(false);
  }, [location]);

  const { isDarkMode, switchTheme } = useDarkMode();

  return (
    <header className="flex items-center justify-between px-4 border-b border-stone-300 dark:border-primary shadow-sm col-span-3">
      <p className=" font-bold font-accent text-lg">Logo.</p>
      <div className="hidden md:flex gap-4 items-center text-xl">
        <div
          className={`flex justify-start bg-stone-200 dark:bg-primary p-[2px] border border-stone-400 dark:border-white w-12 rounded-full cursor-pointer ${
            isDarkMode ? "justify-end" : "justify-start"
          }`}
          onClick={() => switchTheme()}
        >
          <motion.div
            layout
            transition={{ type: "spring", duration: 0.4 }}
            className="flex justify-center items-center aspect-square w-6 bg-white dark:bg-dark rounded-full border border-stone-400 dark:border-white"
          >
            {isDarkMode ? (
              <i className="fa-solid fa-moon text-sm"></i>
            ) : (
              <i className="fa-regular fa-sun text-sm"></i>
            )}
          </motion.div>
        </div>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <button
        className="md:hidden text-lg"
        onClick={() => setIsMenuOpened(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <AnimatePresence>
        {isMenuOpened && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.1 }}
              className="fixed inset-0 bg-black/30"
              onClick={() => setIsMenuOpened(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", duration: 0.4 }}
              className="fixed bg-light dark:bg-dark top-0 bottom-0 right-0 w-[15rem]"
            >
              <motion.button
                className="text-lg block ml-auto p-4"
                onClick={() => setIsMenuOpened(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </motion.button>
              <Navigation />
              <hr />
              <div className="flex gap-4 justify-center text-xl mt-4">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

const Layout = () => {
  return (
    <div className="font-main text-dark dark:text-light bg-light dark:bg-dark h-screen grid grid-cols-1 md:grid-cols-[15rem_1fr] lg:grid-cols-[15rem_1fr_15rem] grid-rows-[4rem_1fr_1.4rem] transition-colors">
      <Header />
      <aside className=" hidden md:block">
        <Navigation />
      </aside>
      <main className="p-4 overflow-y-scroll border-x border-stone-300 dark:border-primary">
        <div className=" max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
      <footer className="col-span-3 bg-dark dark:bg-primary text-light flex items-center justify-center text-sm">
        Copyright
      </footer>
    </div>
  );
};

export default Layout;
