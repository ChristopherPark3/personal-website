const Custom404: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-gray-200 text-4xl">404</h1>
      <h1 className="text-gray-200">Page Not Found</h1>

      <p className="text-gray-200">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="text-gray-200">
        Go back home
      </a>
    </div>
  );
};

export default Custom404;
