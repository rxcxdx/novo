import ClipLoader from "react-spinners/ClipLoader";
import FadeLoader from "react-spinners/FadeLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import Skeleton from "react-loading-skeleton";





export default function Sandbox() {
  return (
    <div>
      <h1>Sandbox</h1>


      <div>
        <ClipLoader />
      </div>

      <div>
        <FadeLoader />
      </div>

      <div>
        <ScaleLoader />
      </div>

      <div>
        <Skeleton count={5} width={300} baseColor="cyan" />
      </div>
    </div>
  );
}
