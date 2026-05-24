import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/NavbBar";
import Footer from "./components/Footer";
import PrivacyBanner from "./components/PrivacyBanner";
import { Helmet } from "react-helmet";

const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Eusébio em Movimento | Programa de Mobilidade Urbana",
  },
];

import { Bike } from "lucide-react";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] overflow-hidden bg-[#06110D]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,101,52,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.10),transparent_32%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      {/* Glow */}
      <motion.div
        className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-[#22C55E]/12 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center */}
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative flex w-[320px] flex-col items-center">
          {/* Bike area */}
          <div className="relative h-32 w-full overflow-hidden">
            {/* Road */}
            <div className="absolute bottom-7 left-0 h-[2px] w-full bg-white/10" />

            {/* Moving lines */}
            <motion.div
              className="absolute bottom-7 left-0 flex gap-6"
              animate={{
                x: [0, -86],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[2px] w-10 rounded-full bg-[#4ADE80]"
                />
              ))}
            </motion.div>

            {/* Bike */}
            <motion.div
              className="absolute bottom-[22px]"
              animate={{
                x: [-40, 300],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-[#22C55E]/20 blur-xl" />

                <Bike className="relative h-8 w-8 text-[#BBF7D0]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.42em] text-[#BBF7D0]/70">
              Eusébio em Movimento
            </p>
          </motion.div>

          {/* Dots */}
          <div className="mt-8 flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-2 w-2 rounded-full bg-[#4ADE80]"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1800);

    return () => window.clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#F2F2F2]"
      style={{ WebkitTextSizeAdjust: "100%" }}
    >
      <ToastContainer />

      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <nav className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto flex w-full items-center justify-between">
          <Navbar />
        </div>
      </nav>

      <Routes>
        {routes.map(({ path, element, title }) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                <Helmet>
                  <title>{title}</title>
                </Helmet>

                {element}
              </>
            }
          />
        ))}

        {/* Redireciona qualquer rota inválida */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <PrivacyBanner />
    </div>
  );
};

export default App;