import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DashboardMain from "@/pages/DashboardMain";

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <DashboardMain />
    </div>
  );
};

export default Layout;
