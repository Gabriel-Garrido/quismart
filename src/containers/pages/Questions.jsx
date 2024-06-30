import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Questions() {
  return (
    <Layout>
      <Navbar />
      <div className="bg-dark-bg text-light-text min-h-screen flex items-center justify-center">
        <div className="bg-dark-secondary p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-primary-blue mb-4">
           ---------- Questions ----------
          </h1>
          <p className="text-secondary-text mb-4">
             ****Text del componente*****
          </p>
          <button className="bg-primary-blue text-dark-bg py-2 px-4 rounded hover:bg-highlight transition duration-300">
            Click 
          </button>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Questions;
