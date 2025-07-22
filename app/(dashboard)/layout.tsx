import Sidebar from "./_components/sidebar";
import { Navbar } from "./_components/navbar";

const DasborardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-50 mixed inset-y-0 w-full z-50">
        <Navbar></Navbar>
      </div>
      <div className="md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default DasborardLayout;
