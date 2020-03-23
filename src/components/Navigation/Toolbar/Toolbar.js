import React ,{useState} from 'react'
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Sidedrawer from '../Sidedrawer/Sidedrawer/Sidedrawer';
import Backdrop from "../../../UI/Backdrop/Backdrop";
const Toolbar = (props) => {
    const [showDrawer,setShowDrawer] = useState({
        showDrawer:false
    });
    const drawerHandler = (type)=>{
        if(type === "menu"){
            setShowDrawer({
                showDrawer:true
            });
        }
        else{
            setShowDrawer({
                showDrawer:false
            })
        }
    }
    return (
        <header className={classes.toolbar}>
            <div 
                className={classes.onlyMobile} 
                style={{cursor:"pointer"}}
                onClick={()=>drawerHandler("menu")}
            >
                Menu
            </div>
            <Sidedrawer status={showDrawer.showDrawer} close={drawerHandler}/>
            <div>logo</div>
            <nav className={classes.navigationItemsWrapper}>
                <NavigationItems desktopOnly={classes.desktopOnly}/>
            </nav>
            <Backdrop show={showDrawer.showDrawer} click={drawerHandler}/>
        </header>
    )
}

export default Toolbar
