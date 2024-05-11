const Custom404: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-2">
      <h1 className="text-gray-200 text-6xl ">404</h1>
      <h1 className="text-gray-200 text-2xl">Page Not Found</h1>

      <p className="text-gray-200 text-sm">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="text-gray-200 border rounded-lg p-4 bg-transparent hover:bg-gray-200 hover:text-neutral-900 mt-4"
      >
        Go back home
      </a>
    </div>
  );
};

export default Custom404;
