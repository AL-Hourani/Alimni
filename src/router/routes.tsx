

import React from "react";
import { lazy } from "react";

// const Home = lazy(() => import("."));
// const Dashboard = lazy(() => import("./pages/Dashboard"));
// const NotFound = lazy(() => import("./pages/NotFound"));

const Register = lazy(()=> import("../auth/Register"))
const Login = lazy(()=> import("../auth/Login"))
const OTPCheck = lazy(()=> import("../auth/CheckOTP"))
const Home = lazy(()=> import("../Home/Home"))
const Community = lazy(()=> import("../community/Community"))
const Courses = lazy(()=> import("../courses/Courese"))
const Questions = lazy(()=> import("../questions/Questions"))
const Articles = lazy(()=> import("../Articles/Article"))
const Participants = lazy(()=> import("../participants/Participants"))
const Teachers = lazy(()=> import("../teachers/Teachers"))
const Payments = lazy(()=> import("../Payments/Payment"))
const Contatus = lazy(()=> import("../contact/ConatcUS"))
const Notifations = lazy(()=> import("../notifations/NotifyPage"))
const Displer = lazy(()=> import("../courses/Displer"))
// const abhas = lazy(()=> import("../"))

const routes = [
  { path: "/Register", element: <Register/> },
  { path: "/Login", element: <Login/> },
  { path: "/checkEmail", element: <OTPCheck/> },
  { path: "/", element: <Home/> },
  { path: "/Community", element: <Community/> },
  { path: "/Courses", element: <Courses/> },
  { path: "/Questions", element: <Questions/> },
  { path: "/Articles", element: <Articles/> },
  { path: "/Participants", element: <Participants/> },
  { path: "/Teachers", element: <Teachers/> },
  { path: "/Payment", element: <Payments/> },
  { path: "/Contactus", element: <Contatus/> },
  { path: "/Notifations", element: <Notifations/> },
  { path: "/Courses/displer", element: <Displer/> },
];

export default routes;
