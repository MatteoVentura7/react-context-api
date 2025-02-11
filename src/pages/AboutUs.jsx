export default function AboutUs() {
  return (
    <>
      <div className="container max-w-7xl pt-10 mx-auto about-us">
        <h1>Passione per la pizza</h1>
        <p>
          La passione per la pizza è un legame profondo con la semplicità e la
          bellezza del cibo. Ogni morso racconta una storia di tradizione,
          creatività e convivialità, con ingredienti genuini che si uniscono in
          un'armonia perfetta. È un piatto che riesce a mettere tutti d'accordo,
          adattandosi ai gusti più diversi e trasformandosi in un momento di
          condivisione unico, che sia attorno a un forno a legna o in una serata
          tra amici. La pizza non è solo cibo, è un’esperienza che unisce e fa
          sognare.
        </p>
        <div>
          <h1>Il nostro Team</h1>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                src="public\img\DALL·E 2025-02-10 17.42.55 - A cheerful pizzeria owner standing proudly in front of a traditional wood-fired oven inside a cozy, Italian-style pizzeria. The owner is wearing a whi.webp"
                alt=""
              />
              <h2>
                <strong>Titolare</strong>
              </h2>
              <p>Matteo</p>
            </div>
            <div>
              <img
                src="public\img\DALL·E 2025-02-10 17.48.04 - A friendly waiter standing in a cozy, Italian-style pizzeria, holding a tray with a freshly baked pizza. The waiter is dressed in a crisp white shirt,.webp"
                alt=""
              />
              <h2>
                <strong>Cameriere</strong>
              </h2>
              <p>Giuseppe</p>
            </div>
            <div>
              <img
                src="public\img\DALL·E 2025-02-11 08.39.44 - A cheerful waitress in a vibrant pizzeria setting, wearing a traditional red and white checkered apron, holding a pizza tray with a fresh pizza. The b.webp"
                alt=""
              />
              <h2>
                <strong>Cameriera</strong>
              </h2>
              <p>Alice</p>
            </div>
            <div>
              <img
                src="public\img\DALL·E 2025-02-10 18.00.12 - A hardworking dishwasher in the kitchen of a cozy Italian pizzeria, standing near a sink filled with soapy water and dishes. The dishwasher is wearing.webp"
                alt=""
              />
              <h2>
                <strong>Lavapiatti</strong>
              </h2>
              <p>Marco</p>
            </div>
            <div>
              <img
                src="public\img\DALL·E 2025-02-11 08.40.30 - A friendly cashier in a cozy pizzeria, standing behind a wooden counter with a cash register. The cashier is wearing a casual uniform with a red and w.webp"
                alt=""
              />
              <h2>
                <strong>Cassiere</strong>
              </h2>
              <p>Antonio</p>
            </div>
          </div>
        </div>
        <div className="marchi">
          <h1>I nostri marchi</h1>
          <div className="grid grid-cols-6 gap-6">
            <div>
              <img
                className="img-prod"
                src="public\img\logo-latteria-sorrentina.png"
                alt=""
              />
            </div>
            <div>
              <img className="img-prod" src="public\img\logo.webp" alt="" />
            </div>
            <div>
              <img
                className="img-prod"
                src="public\img\logo_landscape.webp"
                alt=""
              />
            </div>
            <div>
              <img
                className="img-prod"
                src="public\img\logo-mulinocaputo-2024-dark.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="img-prod"
                src="public\img\logo-header-new.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="img-prod"
                src="public\img\logo.d4f34bd5.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
