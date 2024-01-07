import { CiMenuFries } from "react-icons/ci";

function LandingPage() {
  return (
    <>
      <div className="h-svh w-full bg-[url(/static/images/hero-cover.jpg)] bg-center bg-cover bg-no-repeat relative overflow-hidden">
        <div className="h-svh bg-black bg-opacity-60 -z-10"></div>
        <header className="min-h-20 bg-transparent w-full fixed z-[100] top-0 left-0">
          <nav className="min-h-20 flex items-center w-full max-w-5xl justify-between px-5 mx-auto">
            <a href="#" className="text-white font-bold text-2xl">
              GlobeX
            </a>
            <CiMenuFries className="md:hidden text-white text-2xl" fontWeight={700}/>
            <div className="hidden md:flex gap-6 text-white">
              <a href="#">Home</a>
              <a href="#">Product</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </div>
            <div className="hidden md:flex gap-5">
              <button className="text-white px-4 py-2 font-semibold">
                Login
              </button>
              <button className="flex items-center justify-center text-center font-semibold text-white px-4 py-2 bg-primary rounded-md">
                Become a member
              </button>
            </div>
          </nav>
        </header>

        <main className="z-20 absolute top-0 left-0 w-full">
          <section className="h-svh flex items-center justify-center md:justify-start w-full max-w-5xl mx-auto px-5">
            <div className="text-white text-center">
              <h1 className="text-3xl md:text-5xl font-bold md:text-start text-center">
                International <br />
                Network
              </h1>
              <p className="mt-5 md:text-xl md:text-start text-center text-base">
                We know how large objects will act, <br />
                but things on a small scale.
              </p>
              <div className="mt-10 flex gap-4 md:flex-row flex-col">
                <button className="flex items-center justify-center text-center font-semibold text-white px-4 py-2  bg-primary rounded-full">
                  Get Quote Now
                </button>
                <button className="flex items-center justify-center text-center font-semibold text-white px-4 py-2 rounded-full border-white border-2">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default LandingPage;
