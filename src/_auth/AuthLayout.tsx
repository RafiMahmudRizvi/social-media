import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 items-center justify-center">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover object-center bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
