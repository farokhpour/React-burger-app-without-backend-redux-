import React from 'react'
import Toolbar from "../Navigation/Toolbar/Toolbar";
const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <main style={{marginTop:86}}>
                { props.children }
            </main>
        </React.Fragment>
    )
}

export default Layout
