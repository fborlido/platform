import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

const Modal = ({ isOpened, close, children }) => {
  return (
    <AnimatePresence>
      {isOpened && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className=" fixed inset-0 bg-black/50 grid place-items-center p-8 z-10"
            onClick={() => close()}
          >
            <motion.div
              initial={{ opacity: 0, scale: "80%" }}
              animate={{ opacity: 1, scale: "100%" }}
              exit={{ opacity: 0, scale: "80%" }}
              className="relative w-full max-w-2xl p-4 rounded-sm bg-light dark:bg-primary border border-primary dark:border-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-4 border border-dark dark:border-white grid place-items-center aspect-square w-6 rounded-full"
                onClick={() => close()}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
