import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Layout;
