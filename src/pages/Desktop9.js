import { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
//import { useScroll } from "framer-motion";

const Desktop9 = ({ formData, setFormData }) => {
  let [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName }),
    })
      .then((response) => response.json())
      .then((data) => console.log("user info", data))
      .catch((error) => console.error("Error fetching user data:", error));
  };
  return (
    <div className=" desktop-9-resp">
      <nav className="nav-container" id="navContainer">
        <div className="nav-items relative">
          {/* circle 1 */}
          <div className="absolute left-[9rem]">
            <div className="red circle">
              <div className="text-black ml-[-2rem] mt-[0.6rem]">1</div>
              <div className="mt-5 text-xl w-32 text-black ml-[-1rem]">
                Customer Info
              </div>
            </div>
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
              <div className="circle">
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
      <div className=" page-one-items">
        <p className=" font-bold " id="pageOneHeading">
          Customer Info:
        </p>
        <p
          className="m-0 relative text-6xl font-medium text-dimgray-100 inline-block w-[299px]"
          id="pageOneSubHeading"
        >
          Let us get to know you!
        </p>
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[91.08px] h-[35.74px] shrink-0"
          id="nameLabel"
        >
          Name
        </p>
        <TextField
          className="page1-textbox"
          // sx={{ width: 600 }}
          color="secondary"
          variant="outlined"
          type="text"
          id="nameInput"
          placeholder="Enter your Name"
          size="medium"
          margin="none"
          required
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[91.08px] h-[35.74px] shrink-0"
          id="emailLabel"
        >
          Email
        </p>
        <TextField
          className="page1-textbox"
          // sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="email"
          id="emailInput"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          placeholder="Enter your Email"
          size="medium"
          margin="none"
          required
        />

        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[250.08px] h-[35.74px] shrink-0"
          id="contactLabel"
        >
          Contact Number
        </p>
        <TextField
          className="page1-textbox"
          // sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="tel"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
          id="phoneInput"
          placeholder="Enter your Phone Number"
          size="medium"
          margin="none"
          required
        />
        <p
          className="m-0 relative text-xl font-inter text-black text-left inline-block w-[250.08px] h-[35.74px] shrink-0"
          id="orgsLabel"
        >
          Organization
        </p>
        <TextField
          className="page1-textbox"
          // sx={{ width: 724 }}
          color="secondary"
          variant="outlined"
          type="text"
          id="orgsInput"
          placeholder="Enter Organization Name"
          size="medium"
          value={formData.organization}
          onChange={(e) => {
            setFormData({ ...formData, organization: e.target.value });
          }}
          margin="none"
          required
        />

        <Link
          className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato m-auto my-10 rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
          to="/license-type"
        >
          <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Next Step  ->`}</div>
        </Link>
      </div>
    </div>
  );
};

export default Desktop9;
