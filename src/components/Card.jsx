import React from "react";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

//Option 2
const Card = ({
  id,
  title = "No title given",
  workplace = "No workplace given",
  description = "No description given",
  date = "No date given",
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("hello");
    window.open(`/job/${id}`, "_blank");
    // navigate(`/job/${id}`);
  };

  const handleMouseEnter = (params) => {
    console.log(params);
  };
  return (
    <div className="border border-gray-600 w-[400px] p-4 rounded-md">
      <h6>{title}</h6>
      <p>{workplace}</p>
      <p>{description}</p>
      <p>{date}</p>
      {/* Option 1: function without paramaters */}
      {/* <Button
        variant="ghost"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        View Job
      </Button> */}

      {/* Option 2: function with paramaters */}
      <Button
        variant="solid"
        onClick={handleClick}
        onMouseEnter={() => handleMouseEnter("Yahoo!")}
      >
        View Job
      </Button>
    </div>
  );
};

//Option 1
// const Card = (props) => {
//   return (
//     <div className="border border-gray-600 w-[400px] p-4 rounded-md">
//       <h6>{props?.title}</h6>
//       <p>{props?.workplace}</p>
//       <p>{props?.description || "No description given"}</p>
//       <p>{props?.date}</p>
//     </div>
//   );
// };

export default Card;
