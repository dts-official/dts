import Profile from "./../../../assets/icons/totalUsers.png";
import ActiveUsers from "./../../../assets/icons/activeUsers.png";
import Office from "./../../../assets/icons/officesPc.png";
import Check from "./../../../assets/icons/check2.png";
import Calendar from "./../../../assets/icons/calendar.png";

import ChartUI from "./components/ChartUI";
import NumberEffect from "@/components/animation/numbers";

import axios from "./../../../plugin/axios";
import { useEffect, useState } from "react";

  function Dashboard() {

  const [data, setData]=useState({
    TotalUsers: 0,
    ActiveUsers: 0,
    Offices: 0,
    TotalTrans: 0,
  })

  const [transDoc, setTransDoc]=useState({
    jan: 0,feb: 0,mar: 0,apr: 0,may: 0,jun: 0,jul: 0,aug: 0,sep: 0,oct: 0,nov: 0,dec: 0
  })

  const [transGpass, setTransGpass]=useState({
    jan: 0,feb: 0,mar: 0,apr: 0,may: 0,jun: 0,jul: 0,aug: 0,sep: 0,oct: 0,nov: 0,dec: 0
  })

  const fetchDashboardData = async () => {
    try {
      // ===============================Get total unique users and active users=============================
      const totalUsersResponse = await axios.get('users/all',{
        headers: {
          Authorization: `Token ${localStorage.getItem('keys')}`
        }
      });
      const totalUsers = totalUsersResponse.data.length;
      const activeUsers = totalUsersResponse.data.filter((user:any) => user.is_active === true).length;
      console.log("total users", totalUsers)
      console.log("total activated users", activeUsers)


      // ======================================Get total offices================================================
      const officesResponse = await axios.get('office/all',{
        headers: {
          Authorization: `Token ${localStorage.getItem('keys')}`
        }
      });
      const offices = officesResponse.data.length;
      console.log("total offices", offices)
  
      // ===============================================Get total documents==================================================
      const documentsResponse = await axios.get('document/all',{
        headers: {
          Authorization: `Token ${localStorage.getItem('keys')}`
        }
      });
      let docs:any = {jan: 0,feb: 0,mar: 0,apr: 0,may: 0,jun: 0,jul: 0,aug: 0,sep: 0,oct: 0,nov: 0,dec: 0};
      let docs_months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]; //for indexing
      let total_docs = 0;
      for (let item of documentsResponse.data) {
        let date = new Date(item.datesubmitted);
        let month = date.getMonth();
        docs[docs_months[month]]++;
        total_docs++;
      }
      console.log("Total docs trans: ", total_docs)
      setTransDoc(docs);
      console.log("Doc by Month: ", docs)


      // ======================================================Get total gpass=================================================
      const gpassResponse = await axios.get('gpass/all',{
        headers: {
          Authorization: `Token ${localStorage.getItem('keys')}`
        }
      });
      let gpass:any = {jan: 0,feb: 0,mar: 0,apr: 0,may: 0,jun: 0,jul: 0,aug: 0,sep: 0,oct: 0,nov: 0,dec: 0};
      let gpass_months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]; //for indexing
      let total_gpass = 0
      for (let item of gpassResponse.data) {
        let date = new Date(item.datesubmitted);
        let month = date.getMonth();
        gpass[gpass_months[month]]++;
        total_gpass++;
      }
      console.log("Total gpass trans: ", total_gpass)
      setTransGpass(gpass);
      console.log("Gpass by Month: ", gpass)


      // Set the state
      setData({
        TotalUsers: totalUsers,
        ActiveUsers: activeUsers,
        Offices: offices,
        TotalTrans: total_docs+total_gpass,
      });
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(()=>{
    fetchDashboardData()
  },[])

  const sampleData = {
    TotalUsers: data.TotalUsers,
    ActiveUsers: data.ActiveUsers,
    Offices: data.Offices,
    TotalTrans: data.TotalTrans,
    chartData: [
      {
        name: "Number Documents",
        data: [transDoc.jan, transDoc.feb, transDoc.mar, transDoc.apr, transDoc.may, transDoc.jun, transDoc.jul, transDoc.aug, transDoc.sep, transDoc.oct, transDoc.nov, transDoc.dec],
      },
      {
        name: "Number of Gate Pass",
        data: [transGpass.jan, transGpass.feb, transGpass.mar, transGpass.apr, transGpass.may, transGpass.jun, transGpass.jul, transGpass.aug, transGpass.sep, transGpass.oct, transGpass.nov, transGpass.dec],
      },
    ],
  };

  return (
    <div className="  w-full h-screen min-h-screen sm:min-h-screen overflow-x-hidden   md:overflow-y-scroll bg-[#1e4e93] flex  items-center justify-center flex-col">
      <div className=" w-[90%] h-[95%] sm:min-h-[95%]   rounded-md flex flex-col gap-8 sm:gap-3 ">
        <h1 className=" col-span-6 text-2xl row-span-1  text-white font-medium">
          Hello Admin 👋🏼,
        </h1>
        <div className=" min-h-[120px] sm:min-h-[150px] lg:min-h-[250px]  rounded-[30px] justify-center sm:rounded-[20px] w-[60%] md:w-full lg:w-[70%] sm:px-4  px-5  lg:gap-5 sm:gap-2 grid-cols-3 lg:grid-cols-2 grid items-center py-7 sm:py-3  bg-white drop-shadow-glow flex-wrap relative  box-border ">

          <div className="w-full min-h-full flex items-center justify-center lg:justify-start gap-3 sm:gap-1 ">
            <img
              src={Profile}
              className=" h-[50px] sm:h-[30px] object-contain"
              alt="profile-icon"
            />
            <div className=" flex flex-col text-text">
              <p className=" sm:text-[8px] text-xs font-normal">Total Users</p>
              <h1 className=" sm:text-base text-xl font-bold">
                <NumberEffect value={sampleData.TotalUsers} />
              </h1>
            </div>
          </div>

          <div className=" border-border border-x lg:border-0 w-full h-full flex items-center justify-center gap-3 sm:gap-1 lg:col-span-1 lg:justify-start">
            <img
              src={ActiveUsers}
              className=" h-[50px] sm:h-[30px] object-contain"
              alt="profile-icon"
            />
            <div className=" flex flex-col text-text ">
              <p className=" sm:text-[8px] text-xs font-normal">Active Users</p>
              <h1 className=" sm:text-base text-xl font-bold">
                {" "}
                <NumberEffect value={sampleData.ActiveUsers} />
              </h1>
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center lg:justify-start gap-3 sm:gap-1 lg:col-span-1">
            <img
              src={Office}
              className=" h-[50px] sm:h-[30px] object-contain"
              alt="profile-icon"
            />
            <div className=" flex flex-col text-text">
              <p className=" sm:text-[8px] text-xs font-normal">Offices</p>
              <h1 className=" sm:text-base text-xl font-bold">
                <NumberEffect value={  sampleData.Offices} />
              </h1>
            </div>
          </div>
        </div>
        <div className="min-h-[380px]  sm:min-h-[530px] sm:mb-20 rounded-[30px] w-[90%] sm:rounded-lg md:w-full flex px-10 sm:px-3 py-5   bg-white drop-shadow-glow sm:gap-y-5 sm:flex sm:flex-col   ">
          <div className=" col-span-2 sm:col-span-10 w-[300px]  sm:w-full h-full sm:row-span-1 ">
            <div className=" flex flex-col gap-10 sm:gap-1 w-full relative  ">
              <div className=" cursor-pointer flex gap-2 items-center text-xs w-full min-w-[20px] bg-[#F4F7FE] text-[#A3AED0] px-5 py-2 rounded-md">
                <img
                  src={Calendar}
                  className=" h-5 w-5 object-contain"
                  alt=""
                />
                <p>This Year</p>
              </div>
              <div className=" sm:text-center">
                <h1 className=" text-[#2B3674] font-semibold text-4xl  sm:text-lg">
                  <NumberEffect value={sampleData.TotalTrans} />
                </h1>
                <p className=" text-sm text-[#0F5FC2] font-medium">
                  Total Transaction
                </p>
              </div>

              <div className=" flex text-[#05CD99] items-center gap-1 sm:justify-center">
                <img src={Check} className=" h-5 w-5 object-contain" alt="" />
                <p className=" text-base font-semibold sm:text-xs">On track</p>
              </div>
            </div>
          </div>
          <ChartUI
            className="w-full col-span-8 h-[80%]  sm:col-span-10 sm:row-span-3"
            chartData={sampleData.chartData}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
