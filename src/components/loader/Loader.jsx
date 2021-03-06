import "./Loader.css";

export default function Loader(props) {
  return (
    <div>
      <div className="overlay-loader"></div>
      <div className="absolute w-1/4 top-50 p-3 text-center left-50 bg-white  border-gray-400">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>Loading</div>
      </div>
    </div>
  );
}
