import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import Sidebar from './Sidebar'


export default function ParentNavAndSideBar() {
    return(
        <div>
            <Navbar/> 
            <SubNavbar/>
            <Sidebar/>
        </div>
    )
}