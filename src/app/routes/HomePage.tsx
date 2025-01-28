import Layout from "../../components/layouts/Layout";

const HomePage = () => {
   return (
      <Layout>
         <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full mt-52 mb-52">
            <h1 className="text-3xl font-bold">Welcome to Energica</h1>
            <p className="mt-4 text-gray-700">
               Your trusted partner in energy solutions.
            </p>
         </div>
      </Layout>
   );
};

export default HomePage;
