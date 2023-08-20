import { useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Desktop15 = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  console.log(formData.moduleSelected);

  const onGroupButtonClick = useCallback(() => {
    navigate("/preview");
  }, [navigate]);

  return (
    <div className="desktop-9-resp">
      <div className="bg-tomato h-[120px]">
        <Button
          className="cursor-pointer m-10"
          sx={{ width: 330 }}
          variant="contained"
          color="primary"
          href="/preview"
        >{`< Go Back`}</Button>
      </div>

      <div className="mt-5">
        <div className="h-[25rem] flex flex-col flex-wrap text-5xl gap-1 w-[90%] m-auto overflow-x-scroll">
          {formData.moduleSelected.map((module, index) => (
            <div className="text-5xl" key={index}>
              {module}
            </div>
          ))}
        </div>

        <div className="h-screen flex items-center justify-center">
          <div className="grid gap-2">
            {formData.moduleSelected.map((module, index) => (
              <h1 className="text-3xl" key={index}>
                {module}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop15;
