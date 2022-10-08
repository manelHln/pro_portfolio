import {CgSpinner} from "react-icons/cg"

const Spinner = () => {
  
  return (
    <div className="app__flex app__container">
      <div>
        <div className="spinner"><CgSpinner size={50} /></div>
      </div>
    </div>
  );
};

export default Spinner;
