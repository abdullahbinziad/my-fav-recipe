import image from "../../src/assets/imgs/error.gif";

const Page404 = () => {
  return (
    <div className="w-100">
      <h1 className="text-6xl text-center font-semibold mt-10">404! Page Not Found </h1>

      <div className="w-3/4 mx-auto flex justify-center">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Page404;
