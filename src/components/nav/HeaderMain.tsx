import { MenuIcon, XIcon } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import Logo from "./../../assets/images/DICT-Banner-Logo.webp";
import DTS from "./../../assets/logo/DTS_logo.png";
import NotifIcon from "./../../assets/icons/notificationBlue.png";
import Notif2Icon from "./../../assets/icons/notif.png";

import OutIcon from "./../../assets/icons/out.png";
import { useEffect, useState } from "react";
import Dropdown from "./dropdown/DropdownUser";
import { useLocation } from "react-router-dom";
import axios from "./../../plugin/axios";

import Message from "./../../assets/icons/Message.png";

const Header = ({ navActive, setActive }: any) => {
  const [Notif, setnotifAlert] = useState(false);

  const navigate = useNavigate();

  const [notif, setNotif] = useState([]);

  function getOffices() {
    axios
      .get(`office/all/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("keys")} `,
        },
      })
      .then((e: any) => {
        localStorage.setItem("offices", JSON.stringify(e.data));
      })
      .catch((e: any) => {
        console.log(e.data);
      });
  }

  function hasUnreadNotifications(notifications: any) {
    // Assuming 'notifications' is an array of notification objects
    // Each notification object should have a 'read' property (true or false)

    // Check if any notification has 'read' set to false
    return notifications.some((notification: any) => !notification.read);
  }

  function getNotifs() {
    axios
      .get(`notif/by_office/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("keys")} `,
        },
      })
      .then((e: any) => {
        setNotif(e.data);
        setnotifAlert(hasUnreadNotifications(e.data));
      })
      .catch((e: any) => {
        console.log(e.data);
      });
  }

  useEffect(() => {
    localStorage.getItem('keys')==null?navigate('dts/login'):""
    getOffices();
    let intervalId = setInterval(getNotifs, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const location = useLocation();
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    const currentPath: any = location.pathname.split("/").pop();
    setActivePage(currentPath);
  }, [location]);

  return (
    <header className="    flex-col  w-full justify-end z-50 animate__animated animate__slideInDown">
      <div className=" animate__animated animate__slideInDow bg-white flex justify-between items-center w-full  py-5 border-b-[0px] border-accent h-[90px]  ">
        <Link
          className=" ml-10 sm:ml-3"
          onClick={() => {
            localStorage.setItem("nav", "");
          }}
          to="/dts/home/dashboard"
        >
          <img
            src={DTS}
            className="  h-12  sm:h-10 object-contain "
            alt="Vite logo"
          />
        </Link>
        <nav className=" relative lg:hidden mr-10  h-full  text-accent-foreground flex gap-20 uppercase items-center">
          <div className="hover:cursor-pointer relative group  font-fbold h-full flex items-center justify-center  text-xs transition-all  duration-75">
            {" "}
            {/* Dropdown Container */}
            <div className=" flex items-center gap-2 h-full hover:font-semibold  text-xs font-semibold transition-all duration-75 text-blue">
              <div className=" relative">
                <div
                  className={
                    Notif
                      ? " absolute right-0 h-[10px] text-accent flex items-center justify-center w-[10px] rounded-full bg-red-600 text-[9px] p-1 top-0"
                      : " hidden"
                  }
                ></div>
                <img
                  className=" h-5 object-contain"
                  alt="NotifIcon"
                  src={NotifIcon}
                />
              </div>
              Notifications
            </div>
            <div className="hidden w-[300px]  z-20 group-hover:flex flex-col absolute top-full right-0 bg-accent text-accent-foreground border rounded-sm overflow-hidden shadow-lg">
              <div className=" font-fmedium capitalize px-3 py-2  tracking-wider bg-background  text-start text-lg font-bold">
                Notifications
              </div>
              <div className=" max-h-[300px] overflow-y-scroll">
                {notif.length != 0 ? (
                  notif.map((e: any, key: any) => (
                    <div
                      key={key}
                      onClick={async () => {
                        await axios
                          .patch(
                            `notif/${e.id}/mark_as_read/`,
                            {},
                            {
                              headers: {
                                Authorization: `Token ${localStorage.getItem(
                                  "keys"
                                )}`,
                              },
                            }
                          )
                          .then((e: any) => {
                            console.log(e.data.status);
                            getNotifs();
                          });

                        e.document
                          ? await axios
                              .get(`document/${e.document}`, {
                                headers: {
                                  Authorization: `Token ${localStorage.getItem(
                                    "keys"
                                  )} `,
                                },
                              })
                              .then((e: any) => {
                                localStorage.setItem("nav", "1");
                                localStorage.setItem(
                                  "selected",
                                  JSON.stringify(e.data)
                                );

                                if (e.data.status == "Received") {
                                  navigate("/dts/home/document/completed/form");
                                } else {
                                  navigate("/dts/home/document/process/form");
                                }
                              })
                              .catch((e) => {
                                console.log(e);
                              })
                          : await axios
                              .get(`gpass/${e.gpass}`, {
                                headers: {
                                  Authorization: `Token ${localStorage.getItem(
                                    "keys"
                                  )} `,
                                },
                              })
                              .then((e: any) => {
                                localStorage.setItem("nav", "2");
                                localStorage.setItem(
                                  "selected2",
                                  JSON.stringify(e.data)
                                );
                                if (e.data.status == "Received") {
                                  navigate("/dts/home/gpass/completed/form");
                                } else {
                                  navigate("/dts/home/gpass/process/form");
                                }
                              })
                              .catch((e) => {
                                console.log(e);
                              });

                        // console.log(e)
                      }}
                      className=" font-fmedium flex items-center capitalize px-3 py-4 text-sm  tracking-wider bg-background hover:bg-blue2/5 gap-2"
                    >
                      <img
                        src={Message}
                        className=" h-[30px] object-contain"
                        alt=""
                      />

                      <div className=" flex flex-col gap-0">
                        <h1
                          className={
                            !e.read ? "  font-extrabold" : " font-semibold"
                          }
                        >
                          {e.document ? "Documents" : "Gatepass"}
                        </h1>
                        <p className=" w-full text-xs font-semibold truncate ">{e.by}</p>
                        <p className=" text-xs ">{JSON.parse(e.message)[0]}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className=" font-fmedium flex items-center justify-center capitalize px-3 py-4 text-sm  tracking-wider bg-[#80808005] gap-2">
                    <p>No Notification</p>
                  </div>
                )}
              </div>

              {/* <div onClick={getNotifs}  className=" font-fmedium capitalize px-3 py-2  tracking-wider bg-background   text-sm text-center">

Refresh  

</div> */}
            </div>
          </div>

          <Dropdown navActive={navActive} setActive={setActive} />

          {/* <Link to="/dts/" className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-blue"  >
          
          
          <img className=" h-5 object-contain" alt="OutIcon" src={OutIcon}/>
            Log Out
          </Link> */}
        </nav>
        <div className=" right-0 top-0 absolute mr-10 sm:mr-4 lg:flex flex-col hidden items-end  justify-end mt-5 pointer-events-none ">
          {!navActive ? (
            <MenuIcon
              onClick={() => {
                setActive(!navActive);
              }}
              className=" pointer-events-auto  mt-3  sm:h-5 sm:w-5  h-8 w-8 text-blue hidden lg:flex cursor-pointer"
            />
          ) : (
            <XIcon
              onClick={() => {
                setActive(!navActive);
              }}
              className=" pointer-events-auto mt-3  sm:h-5 sm:w-5   h-8 w-8 text-blue hidden lg:flex cursor-pointer"
            />
          )}

          <nav
            className={
              navActive
                ? "  relative  z-50 lg:flex flex-col pointer-events-auto transition-all duration-500 text-accent-foreground ml-0  uppercase items-start self-end mt-12 bg-blue3 py-5 w-[300px]  backdrop-blur-md translate-y-[0px]   rounded-md "
                : " translate-y-[-20px] opacity-0  pointer-events-none   z-50 lg:flex flex-col  transition-all duration-500 text-accent-foreground  ml-20  uppercase items-start self-end mt-12 bg-blue3 py-5 w-[300px]  backdrop-blur-md   rounded-md "
            }
          >
            <Link
              className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white h-14 w-full pl-10  hover:bg-yellow"
              to=""
            >
              <div className="bg-blue flex items-center justify-center h-5 p-5 w-5 rounded-full">
                <p className=" font-semibold text-base text-white">
                  {JSON.parse(
                    localStorage.getItem("user") || ""
                  ).position.substring(0, 2)}
                </p>
              </div>
              Welcome,{" "}
              {JSON.parse(localStorage.getItem("user") || "").first_name}{" "}
              {JSON.parse(localStorage.getItem("user") || "").last_name} ▼
            </Link>
            <Link
              className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white h-14 w-full pl-10  hover:bg-yellow"
              to=""
            >
              <img
                className=" h-5 object-contain"
                alt="NotifIcon"
                src={Notif2Icon}
              />
              Notifications
            </Link>
            <Link
              to="/dts/"
              onClick={() => {
                localStorage.clear();
              }}
              className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white h-14 w-full pl-10  hover:bg-yellow"
            >
              <img
                className=" h-5 object-contain"
                alt="OutIcon"
                src={OutIcon}
              />
              Log Out
            </Link>
          </nav>
        </div>
      </div>

      <nav className=" relative bg-[#163961] w-full py-2 flex justify-between h-14">
        <Link
          className=" w-[340px] flex  ml-10 sm:ml-3 sm:hidden"
          to="/dts/home/dashboard"
          onClick={() => {
            localStorage.setItem("nav", "");
          }}
        >
          <img
            src={Logo}
            className=" h-full  sm:h-10 object-contain "
            alt="Vite logo"
          />
        </Link>

        <div
          className={
            localStorage.getItem("nav") == "1" ||
            localStorage.getItem("nav") == "2"
              ? " text-white   border-0 w-full flex justify-end  sm:items-center  text-sm    items-center sm:mr-0  mr-20 animate__animated  animate__fadeInLeft "
              : "hidden"
          }
        >
          {(() => {
            let navList: any = [];
            switch (localStorage.getItem("nav")) {
              case "1":
                navList = [
                  {
                    name: "track",
                    to: "/dts/home/document/track",
                  },
                  {
                    name: "process",
                    to: "/dts/home/document/process",
                  },
                  {
                    name: "completed",
                    to: "/dts/home/document/completed",
                  },
                ];
                return navList.map((e: any, key: any) =>
                  e.name == "process" ? (
                    <Link
                      to={e.to}
                      onClick={() => {
                        setActivePage(e.name);
                      }}
                      key={key}
                      className={
                        activePage == e.name
                          ? " capitalize bg-[#2d77ff] px-4 py-2 text-sm text-center cursor-pointer rounded-full   transition-all duration-150"
                          : " capitalize text-sm text-center cursor-pointer px-4 py-2   transition-all duration-150"
                      }
                    >
                      In Process
                    </Link>
                  ) : (
                    <Link
                      to={e.to}
                      onClick={() => {
                        setActivePage(e.name);
                      }}
                      key={key}
                      className={
                        activePage == e.name
                          ? " capitalize bg-[#2d77ff] px-4 py-2 text-sm text-center cursor-pointer rounded-full   transition-all duration-150"
                          : " capitalize text-sm text-center cursor-pointer px-4 py-2   transition-all duration-150"
                      }
                    >
                      {e.name}
                    </Link>
                  )
                );
              case "2":
                navList = [
                  {
                    name: "track",
                    to: "/dts/home/gpass/track",
                  },
                  {
                    name: "process",
                    to: "/dts/home/gpass/process",
                  },
                  {
                    name: "completed",
                    to: "/dts/home/gpass/completed",
                  },
                ];
                return navList.map((e: any, key: any) =>
                  e.name == "process" ? (
                    <Link
                      to={e.to}
                      onClick={() => {
                        setActivePage(e.name);
                      }}
                      key={key}
                      className={
                        activePage == e.name
                          ? " capitalize bg-[#2d77ff] px-4 py-2 text-sm text-center cursor-pointer rounded-full   transition-all duration-150"
                          : " capitalize text-sm text-center cursor-pointer px-4 py-2   transition-all duration-150"
                      }
                    >
                      In Process
                    </Link>
                  ) : (
                    <Link
                      to={e.to}
                      onClick={() => {
                        setActivePage(e.name);
                      }}
                      key={key}
                      className={
                        activePage == e.name
                          ? " capitalize bg-[#2d77ff] px-4 py-2 text-sm text-center cursor-pointer rounded-full   transition-all duration-150"
                          : " capitalize text-sm text-center cursor-pointer px-4 py-2   transition-all duration-150"
                      }
                    >
                      {e.name}
                    </Link>
                  )
                );

              default:
                return <div></div>;
            }
          })()}
        </div>
      </nav>
    </header>
  );
};

export default Header;
