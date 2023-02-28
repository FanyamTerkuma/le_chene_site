import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const AppPath = () => {
  const params = useParams();
  const [paths, setpaths] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getPaths = () => {
      let keys = Object.keys(params);

      setpaths(["Home", ...keys]);
    };

    getPaths();
  }, []);

  const handleRouteChange = (path, index) => {
    if (index + 1 === paths.length) return;

    if (index === 0) return navigate("/");

    return navigate("/category/" + params[path]);
  };

  return (
    <div className="flex items-center text-xs text-gray-600 space-x-2">
      {paths?.map((path, index) => {
        return (
          <div className="flex items-center space-x-1">
            <h4
              onClick={() => handleRouteChange(path, index)}
              className={`${
                index + 1 !== paths.length
                  ? "cursor-pointer hover:text-green-500 hover:underline"
                  : "font-semibold text-gray-700"
              }`}
            >
              {params[path] ? params[path] : path}
            </h4>
            {index + 1 !== paths.length && <MdArrowForwardIos />}
          </div>
        );
      })}
    </div>
  );
};

export default AppPath;
