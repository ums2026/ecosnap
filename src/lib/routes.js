import { createBrowserRouter } from "react-router-dom";

import Login from "components/auth/Login";
import Register from "components/auth/Register";
import Layout from "components/layout";
import Dashboard from "components/dashboard";
import Comments from "components/comments";
import Profile from "components/profile";
import Scanner from "components/scanner/scanner";
import Users from "components/users";
import Chatbot from "components/chatbot";
import AwarenessAssistant from "components/awarenessassistant/awarenessassistant"


export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";
export const SCANNER = "/protected/scanner/";
export const CHATBOT = "/protected/chatbot/";
export const AWARENESSASSISTANT = "/protected/awarenessassistant";

export const router = createBrowserRouter([
  { path: ROOT, element: "Public Root" },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: USERS,
        element: <Users />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
      {
        path: COMMENTS,
        element: <Comments />,
      },
      {
        path: SCANNER,
        element: <Scanner/>
      },
      {
        path: CHATBOT,
        element: <Chatbot/>
      },
      {
        path: AWARENESSASSISTANT,
        element: <AwarenessAssistant/>
      },


    ],
  },

]);
