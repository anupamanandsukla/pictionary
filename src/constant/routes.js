
import Card from "../elements/Cards";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import RouteNames from "./RouteNames";


const routes =
    [{
        path: '/*',
        element: <Layout />,
        children: [

            {
                path: `${RouteNames.HOME}`,
                element: <Home />,
            },
            {
                element: <Card className="h-screen text-red-800">not a permitted page</Card>,
                path: '*',
            },
        ]
    }]

export default routes