import Home from "./src/Page/Home/Home";
import Services from './src/Page/Services/Services'
import SampleWork from './src/Page/SampleWork/SampleWork'
import Article from './src/Page/Article/Article'
import Contact from './src/Page/SampleWork/SampleWork'


const routes = [
    {path: "/" , element:<Home/>},
    {path: "/Services" , element:<Services/>},
    {path: "/SampleWork" , element:<SampleWork/>},
    {path: "/Article" , element:<Article/>},
    {path: "/Contact" , element:<Contact/>},
]

export default routes