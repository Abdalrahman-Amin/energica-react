import { ReactNode } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

interface LayoutProps {
   children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
   return (
      <div className="flex flex-col min-h-screen">
         {/* Navbar at the top */}
         <Navbar />

         {/* Main content */}
         <main className="flex-grow">{children}</main>

         {/* Footer at the bottom */}
         <Footer />
      </div>
   );
};

export default Layout;
