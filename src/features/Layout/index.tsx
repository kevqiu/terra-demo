import { ReactNode } from "react";

const Layout = ({ children }: Props) => {
  return (
    <div className="shadow bg-primary-focus">
      <div className="h-screen p-6 flex-auto justify-center">{children}</div>
    </div>
  );
};

export default Layout;

interface Props {
  children: ReactNode;
}
