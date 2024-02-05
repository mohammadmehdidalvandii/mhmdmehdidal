import Home from "./src/Page/Home/Home";
import Resume from "./src/Page/Resume/Resume";
import Services from './src/Page/Services/Services'
import SampleWork from './src/Page/SampleWork/SampleWork'
import Article from './src/Page/Article/Article'
import Contact from './src/Page/Contact/Contact'
import ArticleDetails from "./src/Page/ArticleDetails/ArticleDetails";
import SampleWorkDetails from "./src/Page/SampleWorkDetails/SampleWorkDetails";


const routes = [
    {path: "/" , element:<Home/>},
    {path: "/Resume" , element:<Resume/>},
    {path: "/Services" , element:<Services/>},
    {path: "/SampleWork" , element:<SampleWork/>},
    {path: "/Article" , element:<Article/>},
    {path: "/Contact" , element:<Contact/>},
    {path: "/Article-d" , element:<ArticleDetails/>},
    {path: "/Sample-d" , element:<SampleWorkDetails/>},
]

export default routes