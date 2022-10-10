import {BsFillGearFill} from "react-icons/bs"

const Spinner = () => {
  return (
    <div className="app__flex app__container">
      <div>
        <div className="spinner">
          <BsFillGearFill size={50} />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
