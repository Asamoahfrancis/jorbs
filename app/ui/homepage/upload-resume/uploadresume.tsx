import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdLibraryBooks } from "react-icons/md";
import { PiListDashesFill } from "react-icons/pi";
import { SiOnlyoffice } from "react-icons/si";
import { HiMiniBellAlert } from "react-icons/hi2";
import { AiFillMessage } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import Renderlogos from "./renderlogos/renderlogos";
const data = [
  { id: "1", logo: <BiSolidDashboard size="1.5em" />, title: "Dashboard" },
  { id: "2", logo: <CgProfile size="1.5em" />, title: "Profile" },
  { id: "3", logo: <MdLibraryBooks size="1.5em" />, title: "Resumes" },
  { id: "5", logo: <PiListDashesFill size="1.5em" />, title: "My Applied" },
  { id: "6", logo: <SiOnlyoffice size="1.5em" />, title: "Resumes" },
  { id: "7", logo: <HiMiniBellAlert size="1.5em" />, title: "Saved Jobs" },
  { id: "8", logo: <HiMiniBellAlert size="1.5em" />, title: "Alert Jobs" },
  { id: "9", logo: <AiFillMessage size="1.5em" />, title: "Messages" },
  { id: "10", logo: <LuLogOut size="1.5em" />, title: "Log Out" },
];

const Uploadresume = () => {
  return data.map((datum) => (
    <Renderlogos key={datum.id} logo={datum.logo} title={datum.title} />
  ));
};

export default Uploadresume;
