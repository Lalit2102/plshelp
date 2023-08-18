import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Desktop10 = ({ formData, setFormData }) => {
  return (
    <div className="desktop-9-resp">
      <nav className="nav-container" id="navContainer">
        <div className="nav-items relative">
          <div className="absolute left-[8rem]">
            <Link className="circle [text-decoration:none]" to="/">
              <div className="text-black ml-[-2rem] mt-[0.6rem]">1</div>
              <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                Customer Info
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[752px] w-[82px] h-[83px] text-tomato"
              to="/license-details"
            >
              <div className="circle">
                <div className="text-black ml-[-2rem] mt-[0.6rem]">3</div>
                <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                  License Details
                </div>
              </div>
            </Link>

            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[384px] w-[82px] h-[83px] text-tomato"
              to="/license-type"
            >
              <div className="red circle">
                <div className="text-black ml-[-2rem] mt-[0.6rem]">2</div>
                <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                  License Type
                </div>
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[1119px] w-[82px] h-[83px] text-tomato"
              to="/preview"
            >
              <div className="circle">
                <div className="text-black ml-[-2rem] mt-[0.6rem]">4</div>
                <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                  Preview
                </div>
              </div>
            </Link>
            <img
              className="absolute top-[40.5px] left-[138px] w-[220px] h-[3px]"
              alt=""
              src="/line-11.svg"
            />
            <img
              className="absolute top-[40.5px] left-[499px] w-[220px] h-[3px]"
              alt=""
              src="/line-11.svg"
            />
            <img
              className="absolute top-[40.5px] left-[866px] w-[220px] h-[3px]"
              alt=""
              src="/line-11.svg"
            />
          </div>
        </div>
      </nav>

      <div className="grid w-[70%] m-auto gap-5 mt-10">
        <div className="font-bold text-21xl" id="pageTwoSubheading">
          License Type:
        </div>

        <div className="text-6xl" id="pageTwoHeading">
          Pick the type of Subscription
        </div>

        <div className="grid grid-cols-2 grid-flow-row gap-10">
          <Link
            className="cursor-pointer [border:none] p-0 bg-[transparent]"
            autoFocus
            onClick={() => {
              setFormData({
                ...formData,
                licenseType: "Demo",
                noOfDays: 7,
                endDate: formData.startDate.getDate + 7,
              });
            }}
            id="demoLicenseButton"
            to="/license-details"
          >
            <div className=" relative rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px]  button-hover">
              <div className="absolute left-14 top-3 text-xl font-hp-simplified-jpan text-black ">
                <div className="text-21xl">Demo License</div>
                <div className="font-light">All Modules Enabled</div>
                <div className="font-light">7 Days</div>
              </div>
            </div>
          </Link>

          <Link
            className="cursor-pointer [border:none] p-0 bg-[transparent]"
            autoFocus
            onClick={() => {
              setFormData({
                ...formData,
                licenseType: "Production",
                noOfDays: 1,
              });
            }}
            id="productionLicenseButton"
            to="/license-details"
          >
            <div className=" relative rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px] button-hover">
              <div className="absolute left-10 top-3 text-xl font-hp-simplified-jpan text-black ">
                <div className="text-21xl">Production License</div>
                <div className="font-light">Custom Modules Enabled</div>
                <div className="font-light">Custom Days</div>
              </div>
            </div>
          </Link>

          <Link
            className="cursor-pointer [border:none] p-0 bg-[transparent] "
            autoFocus
            onClick={() => {
              setFormData({ ...formData, licenseType: "Trial", noOfDays: 30 });
            }}
            id="trialLicenseButton"
            to="/license-details"
          >
            <div className=" relative rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px] button-hover">
              <div className="absolute left-10 top-3 text-xl font-hp-simplified-jpan text-black ">
                <div className="text-21xl">Trial License</div>
                <div className="font-light">All Modules Enabled</div>
                <div className="font-light">30 Days</div>
              </div>
            </div>
          </Link>

          <Link
            className="cursor-pointer [border:none] p-0 bg-[transparent]  [&_.all-modules-enabled-container]:hover:text-white [&_.demo-license]:hover:text-white [&_.rectangle-div]:hover:bg-tomato"
            autoFocus
            onClick={() => {
              setFormData({
                ...formData,
                licenseType: "Perpetual",
                noOfDays: 1,
              });
            }}
            id="perpetualLicenseButton"
            to="/license-details"
          >
            <div className=" relative rounded-31xl bg-whitesmoke-200 shadow-[5px_5px_7px_2px_rgba(0,_0,_0,_0.25)] w-[382px] h-[143px]">
              <div className="absolute left-10 top-3 text-xl font-hp-simplified-jpan text-black ">
                <div className="text-21xl">Perpetual License</div>
                <div className="font-light">Custom Modules</div>
                <div className="font-light">Unlimited Days</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Desktop10;
