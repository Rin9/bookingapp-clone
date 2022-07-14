import { Link } from "react-router-dom";
import BlankLayout from "../../components/layout/blank-layout.component";

const NotFound = () => {
  return (
    <BlankLayout>
      <div className="flex justify-center items-center mt-20">
        <div className="flex flex-col justify-center items-center gap-20 w-[50%] h-[500px] min-w-[300px] max-h-[400px] bg-white text-main-blue text-2xl">
          Oops...Nothing Here...
          <Link
            to={"/"}
            className="border border-solid rounded-2xl px-5 py-5 border-main-blue"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </BlankLayout>
  );
};

export default NotFound;
