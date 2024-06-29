import FeatureCard from "components/home/FeatureCard";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import logo from "../../assets/img/Logo_Quismart.png";
import AdvantageCard from "components/home/AdvantageCard";

function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="bg-dark-bg text-light-text min-h-screen mt-8">
        <div className="container mx-auto py-16 px-4 text-center">
          <img src={logo} alt="Logo Quismart" className="mx-auto mb-8 h-24 w-24 md:h-32 md:w-32" />
          <h1 className="text-4xl font-bold text-primary-blue mb-12">
            Bienvenido a Quismart
          </h1>
          <p className="text-lg text-secondary-text mb-12">
            La solución digital para la evaluación clínica objetiva estructurada (ECOE).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <FeatureCard
              title="Estadísticas"
              description="Visualiza y analiza estadísticas detalladas de tus datos."
              link="/plots"
            />
            <FeatureCard
              title="Preguntas"
              description="Gestiona y responde preguntas de manera eficiente."
              link="/questions"
            />
            <FeatureCard
              title="Estaciones"
              description="Monitorea y gestiona las estaciones de manera efectiva."
              link="/stations"
            />
            <FeatureCard
              title="Estudiantes"
              description="Administra y apoya a los estudiantes con facilidad."
              link="/students"
            />
          </div>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-blue mb-8">Ventajas de Digitalizar la ECOE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AdvantageCard
                title="Eficiencia"
                description="Reduce el tiempo y los recursos necesarios para la evaluación."
              />
              <AdvantageCard
                title="Precisión"
                description="Mejora la precisión y consistencia en la evaluación de los estudiantes."
              />
              <AdvantageCard
                title="Accesibilidad"
                description="Acceso fácil a los resultados y análisis desde cualquier lugar."
              />
              <AdvantageCard
                title="Seguridad"
                description="Garantiza la seguridad y confidencialidad de los datos."
              />
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-blue mb-8">Testimonios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-secondary p-6 rounded-lg shadow-lg">
                <p className="text-secondary-text mb-4">"Quismart ha transformado la manera en que gestionamos nuestras ECOE. La eficiencia y precisión son incomparables."</p>
                <h3 className="text-xl font-bold text-secondary-green">Dr. Juan Pérez</h3>
                <p className="text-secondary-text">Universidad de Salud</p>
              </div>
              <div className="bg-dark-secondary p-6 rounded-lg shadow-lg">
                <p className="text-secondary-text mb-4">"La accesibilidad y seguridad que ofrece Quismart son esenciales para nuestra institución."</p>
                <h3 className="text-xl font-bold text-secondary-green">Dra. Ana Gómez</h3>
                <p className="text-secondary-text">Instituto de Ciencias Médicas</p>
              </div>
              <div className="bg-dark-secondary p-6 rounded-lg shadow-lg">
                <p className="text-secondary-text mb-4">"Los resultados y análisis detallados nos ayudan a mejorar continuamente nuestros programas."</p>
                <h3 className="text-xl font-bold text-secondary-green">Dr. Carlos Martínez</h3>
                <p className="text-secondary-text">Facultad de Medicina</p>
              </div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-blue mb-8">Comienza Hoy</h2>
            <p className="text-lg text-secondary-text mb-8">Únete a las universidades que ya están beneficiándose de la digitalización de la ECOE con Quismart.</p>
            <button className="bg-primary-blue text-dark-bg py-3 px-6 rounded hover:bg-highlight transition duration-300">
              Empezar
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
