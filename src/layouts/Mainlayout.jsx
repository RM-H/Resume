import {Outlet} from "react-router-dom";
import { Footer} from '../components/index.js'
import Cursor from '../components/Cursor.jsx'

import Grid from '@mui/material/Unstable_Grid2';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import {useSelector , useDispatch} from "react-redux";
import {activeSelector,changeNav} from '../slices/navigationSlice.js'


const Mainlayout = () => {


    const dataNeeded = useSelector(activeSelector)

    const dispatch = useDispatch()


    // // handle active section

    const handleactivechange = (page) => {
      dispatch(changeNav(page))
        const element = document.getElementById(page);
     element.scrollIntoView({ behavior: "smooth"})
    }




    return (
        <>
            <Cursor/>
            <Grid container
                  className="container clrtwo "

                  style={{
                      height: "100vh",
                      marginRight: "auto",
                      marginLeft: "auto",


                  }}
            >

                <Grid xs={2} className='clrthreetext zindex' sx={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
                    <List className='w100'>
                        <ListItem onClick={()=>handleactivechange(1)} >
                            <ListItemButton className='menuindicator '>
                                <span className='indicator' style={{width:dataNeeded===1 && "5rem"  , borderColor:dataNeeded===1 && "rgb(94 234 212) "}} />
                                <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===1 ? 'clrsixtext':"clrfivetext"}`}>About</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem onClick={()=>handleactivechange(2)}>
                            <ListItemButton className='menuindicator '>
                                <span className='indicator'  style={{width:dataNeeded===2 && "5rem"  , borderColor:dataNeeded===2 && "rgb(94 234 212) "}}/>
                                <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===2 ? 'clrsixtext':"clrfivetext"}`}>Skills</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem  onClick={()=>handleactivechange(3)}>
                            <ListItemButton className='menuindicator '>
                                <span className='indicator'  style={{width:dataNeeded===3 && "5rem"  , borderColor:dataNeeded===3 && "rgb(94 234 212) "}}/>
                                <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===3? 'clrsixtext':"clrfivetext"}`}>Select Projects</span>} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem  onClick={()=>handleactivechange(4)}>
                            <ListItemButton className='menuindicator '>
                                <span className='indicator'  style={{width:dataNeeded===4 && "5rem" , borderColor:dataNeeded===4 && "rgb(94 234 212) "}}/>
                                <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===4? 'clrsixtext':"clrfivetext"}`}> Relevant Education</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem  onClick={()=>handleactivechange(5)}>
                            <ListItemButton className='menuindicator '>
                                <span className='indicator'  style={{width:dataNeeded===5 && "5rem"  , borderColor:dataNeeded===5 && "rgb(94 234 212) "}}/>
                                <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===5? 'clrsixtext':"clrfivetext"}`}> linguistic skills :)</span>} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>

                <Grid xs={10} sx={{height:'90vhvh'}} >
                    {/*<Nav/>*/}

                    <main >
                        <Outlet/>
                    </main>

                </Grid>


                <Footer/>
            </Grid>


        </>
    );
};
export default Mainlayout;
