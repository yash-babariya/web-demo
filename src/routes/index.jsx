import { createBrowserRouter } from "react-router-dom";
import DefaultLyout from "./DefaultLyout";
import Home from "../webApp/pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLyout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default router;