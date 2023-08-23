import { useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div>
      <h1 className="title">
        Welcome, <span className=" text-accent">Username</span>.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum
        praesentium itaque optio natus perferendis commodi dolores ipsa aperiam
        provident alias explicabo architecto et vitae eligendi, aspernatur eum.
        Maiores explicabo neque sint eaque porro quisquam quia, nisi
        consequuntur debitis deserunt reiciendis, non animi illo, voluptatum
        quae temporibus magnam architecto provident.
      </p>

      <button className="mt-8 button" onClick={() => setModalOpened(true)}>
        Learn more
      </button>
      <Modal isOpened={modalOpened} close={() => setModalOpened(false)}>
        <h2 className=" font-bold text-lg mb-4">Modal test</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          veritatis aliquid ipsam doloremque laboriosam modi quae dolorem
          adipisci tempore vero!
        </p>
      </Modal>
    </div>
  );
};

export default Home;
