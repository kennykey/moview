import Footer from "@/component/fragment/Footer";
import Sidebar from "@/component/fragment/Sidebar";
type PropsType = {
    children: React.ReactNode;
};

const sideIcon = [
    {
        title: "Movie List",
        url: "/",
        icon: "bxs-movie",
    },
    {
        title: "Data",
        url: "/form",
        icon: "bxs-data",
    },
    {
        title: "Chart",
        url: "/chart",
        icon: "bx-bar-chart-alt",
    },
]

export default function DashboarLayout(props:PropsType){
    const {children} = props;
    return(
        <div className="flex">
            <Sidebar lists={sideIcon}/>
            <div className="w-full text-center">
                {children}
                <Footer/>
            </div>
        </div>
    )
}