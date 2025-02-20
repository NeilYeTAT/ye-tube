import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HomeLayout>
      <div>Layout in app layout</div>
      {children}
    </HomeLayout>
  );
};

export default Layout;
