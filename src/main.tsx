import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';
import DashboardLoader from './screens/adminPage/dashboard/components/DashboardLoader.tsx';
import ProfileLoader from './screens/adminPage/Profile/ProfileLoader.tsx';
import UsersLoader from './screens/adminPage/userManagement/UsersLoader.tsx'
import FeedbackLoader from './screens/adminPage/others/Feedbacks/FeedbackLoader.tsx';
import AuditLoader from './screens/adminPage/auditTrail/auditLoader.tsx';
import LoaderChild from './components/loader/loaderChild.tsx';

const Developers= lazy(() =>
  wait(1300).then(() => import("./screens/developersPage/Developers.tsx"))
);


const AdminPage= lazy(() =>
  wait(1300).then(() => import("./screens/adminPage/AdminPage.tsx"))
);
const AdminDashboard= lazy(() =>
  wait(500).then(() => import("./screens/adminPage/dashboard/Dashboard.tsx"))
);
const AdminUsers= lazy(() =>
  wait(1300).then(() => import("./screens/adminPage/userManagement/Users/Users.tsx"))
)
const Deactivated= lazy(() =>
  wait(500).then(() => import("./screens/adminPage/userManagement/Deactivation/Deactivated.tsx"))
);

const Offices= lazy(() =>
  wait(500).then(() => import("./screens/adminPage/officeManagement/Offices/Offices.tsx"))
);

const AdminProfile= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/Profile/Profile.tsx"))
)

const Feedback= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/others/Feedbacks/Feedback.tsx"))
)

const AdminAudit= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/auditTrail/auditTrail.tsx"))
)

const UpdateUsers= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/userManagement/Users/UpdateUser.tsx"))
)

const AddUsers= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/userManagement/Users/AddUser.tsx"))
)

const UpdateOffice= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/officeManagement/Offices/updateOffice.tsx"))
)

const AddOffice= lazy(() =>
  wait(1300).then(() => import ("./screens/adminPage/officeManagement/Offices/AddOffice.tsx"))
)


const LoginPage= lazy(() =>
  wait(1300).then(() => import("./screens/authentication/loginPage/LoginPage.tsx"))
);
const  Activation= lazy(() =>
  wait(1300).then(() => import("./screens/authentication/loginPage/Activation.tsx"))
);
const ForgotPasswordPage= lazy(() =>
  wait(1300).then(() => import("./screens/authentication/forgotPass/forgotPass.tsx"))
);
const ResetPassword= lazy(() =>
  wait(1300).then(() => import("./screens/authentication/forgotPass/ResetPass.tsx"))
);
const RegistrationPage= lazy(() =>
  wait(1300).then(() => import("./screens/authentication/registration/registrationPage.tsx"))
);

const HomePage= lazy(() =>
  wait(1300).then(() => import("./screens/homePage/HomePage.tsx"))
);
const Dashboard= lazy(() =>
  wait(1300).then(() => import("./screens/homePage/dashboard/Dashboard.tsx"))
);

const Account= lazy(() =>
  wait(1300).then(() => import("./screens/homePage/account/Account.tsx"))
);

const Document= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/Document.tsx"))
);

const Track= lazy(() =>
  wait(300).then(() => import("./screens/homePage/document/track/Track.tsx"))
);

const InProgress= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/inprogess/InProgress.tsx"))
);

const InProgressForm= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/inprogess/Form.tsx"))
);
const Completed= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/completed/Completed.tsx"))
);


const CompletedForm= lazy(() =>
  wait(500).then(() => import("./screens/homePage/document/completed/Form.tsx"))
);



const Gpass= lazy(() =>
  wait(500).then(() => import("./screens/homePage/gpasss/Gpass.tsx"))
);

const GTrack= lazy(() =>
  wait(300).then(() => import("./screens/homePage/gpasss/track/Track.tsx"))
);

const GInProgress= lazy(() =>
  wait(500).then(() => import("./screens/homePage/gpasss/inprogess/InProgress.tsx"))
);

const GInProgressForm= lazy(() =>
  wait(500).then(() => import("./screens/homePage/gpasss/inprogess/Form.tsx"))
);
const GCompleted= lazy(() =>
  wait(500).then(() => import("./screens/homePage/gpasss/completed/Completed.tsx"))
);


const GCompletedForm= lazy(() =>
  wait(500).then(() => import("./screens/homePage/gpasss/completed/Form.tsx"))
);




const UserAudit= lazy(() =>
  wait(500).then(() => import("./screens/homePage/audit/auditTrail.tsx"))
);







const router = createBrowserRouter([
  {
    path: "/dts/",
    element: <Navigate to="/dts/login" />,
  },
  {
    path: "/dts/developers",
    element:  <>
    <Suspense fallback={<Loader />}>
      <Developers />
    </Suspense>
  </>,
  },
  {
    path: "/dts/login",
    element:  <>
    <Suspense fallback={<Loader />}>
      <LoginPage />
    </Suspense>
  </>,
  }, 
  {
    path: "/dts/activation/:uid/:token",
    element:  <>
    <Suspense fallback={<Loader />}>
      <Activation  />
    </Suspense>
  </>,
  },
  
  {
    path: "/dts/forgot_password",
    element:  <>
    <Suspense fallback={<Loader />}>
      <ForgotPasswordPage />
    </Suspense>
  </>,
  },
  {
    path: "/dts/reset-password/:uid/:token",
    element:  <>
    <Suspense fallback={<Loader />}>
      <ResetPassword  />
    </Suspense>
  </>,
  },

  {
    path: "/dts/registration",
    element:  <>
    <Suspense fallback={<Loader />}>
      <RegistrationPage />
    </Suspense>
  </>,
  },

  {
    path: "/dts/home",
    element: <>
    <Suspense fallback={<Loader />}>
      <HomePage />
    </Suspense>
  </>,
    children: [
    {
      path: "/dts/home/", 
      element: <Navigate to="/dts/home/dashboard/" />, 
    },
    {
      path: "/dts/home/dashboard/",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <Dashboard />
      </Suspense>
    </>
    },

    {
      path: "/dts/home/account/",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <Account/>
      </Suspense>
    </>
    },



    {
      path: "/dts/home/audit_trail/",
      element:  <>
      <Suspense >
        <UserAudit/>
      </Suspense>
    </>
    },


    {
      path: "/dts/home/document/",
      element:  <>
      <Suspense fallback={<LoaderChild />}>
       <Document />
      </Suspense>
    </>,
     
    },
    {
      path: "/dts/home/document/track/",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <Track />
      </Suspense>
    </>
    },
    {
      path: "/dts/home/document/process/",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <InProgress />
      </Suspense>
    </>,
    },
    {
      path: "/dts/home/document/process/form",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <InProgressForm/>
      </Suspense>
    </>,
    },

    {
      path: "/dts/home/document/completed/",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <Completed />
      </Suspense>
    </>,
    },
    {
      path: "/dts/home/document/completed/form",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <CompletedForm/>
      </Suspense>
    </>,
    },


    {
      path: "/dts/home/gpass/",
      element:  <>
      <Suspense fallback={<LoaderChild />}>
       <Gpass />
      </Suspense>
    </>,
     
    },
    {
      path: "/dts/home/gpass/track/",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <GTrack />
      </Suspense>
    </>
    },
    {
      path: "/dts/home/gpass/process/",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <GInProgress />
      </Suspense>
    </>,
    },
    {
      path: "/dts/home/gpass/process/form",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <GInProgressForm/>
      </Suspense>
    </>,
    },

    {
      path: "/dts/home/gpass/completed/",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <GCompleted />
      </Suspense>
    </>,
    },
    {
      path: "/dts/home/gpass/completed/form",
      element:  <>
      <Suspense fallback={<LoaderChild/>}>
        <GCompletedForm/>
      </Suspense>
    </>,
    },
   
   


  ]
  ,
  },

  {
    path: "/dts/admin/",
    element: <>
    <Suspense fallback={<Loader />}>
      <AdminPage />
    </Suspense>
  </>,
    children: [
    {
      path: "/dts/admin/", 
      element: <Navigate to="/dts/admin/dashboard/" />, 
    },
    {
      path: "/dts/admin/dashboard/", 
      element: <Suspense fallback={<DashboardLoader />}>
      <AdminDashboard />
    </Suspense>, 
    },
    {
      path: "/dts/admin/user/", 
      element: <Suspense fallback={<UsersLoader />}>
      <AdminUsers />
    </Suspense>, 
    },
    {
      path: "/dts/admin/user/update/", 
      element: <Suspense fallback={<UsersLoader />}>
      <UpdateUsers />
    </Suspense>, 
    },
    {
      path: "/dts/admin/user/add/", 
      element: <Suspense fallback={<UsersLoader />}>
      <AddUsers />
    </Suspense>, 
    },
    {
      path: "/dts/admin/deactivate", 
      element: <Suspense fallback={<UsersLoader />}>
      <Deactivated />
    </Suspense>, 
    },
    {
      path: "/dts/admin/offices", 
      element: <Suspense fallback={<UsersLoader />}>
      <Offices />
    </Suspense>, 
    },
    {
      path: "/dts/admin/offices/update", 
      element: <Suspense fallback={<UsersLoader />}>
      <UpdateOffice />
    </Suspense>, 
    },
    {
      path: "/dts/admin/offices/add", 
      element: <Suspense fallback={<UsersLoader />}>
      <AddOffice />
    </Suspense>, 
    },
    {
      path: "/dts/admin/profile", 
      element: <Suspense fallback={<ProfileLoader />}>
      <AdminProfile />
    </Suspense>, 
    },
    {
      path: "/dts/admin/feedbacks", 
      element: <Suspense fallback={<FeedbackLoader />}>
      <Feedback />
    </Suspense>, 
    },
    {
      path: "/dts/admin/audit_trail", 
      element: <Suspense fallback={<AuditLoader />}>
      <AdminAudit />
    </Suspense>, 
    },
 
  
  
  ]
  },

  {
    path: "*",
    element:  <>
    <Suspense fallback={<Loader />}>
      <NotFound />
    </Suspense>
  </>,
  }
]);

function wait( time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
