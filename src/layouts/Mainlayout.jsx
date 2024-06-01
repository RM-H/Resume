import {Outlet} from "react-router-dom";
import {Nav, Footer} from '../components/index.js'
import Cursor from '../components/Cursor.jsx'

import Grid from '@mui/material/Unstable_Grid2';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {useState} from 'react'


const Mainlayout = () => {


    // handle active section
    const [active,setActive] = useState(1)
    const handleactivechange = (page) => {
      setActive(page)
    }




    return (
        <>
            <Cursor/>
            <Grid container
                  className="container clrtwo "

                  style={{
                      minHeight: "100vh",
                      marginRight: "auto",
                      marginLeft: "auto",


                  }}
            >

                <Grid xs={2} className='clrthreetext zindex' sx={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
                    <List className='w100'>
                        <ListItem onClick={()=>handleactivechange(1)} >
                            <ListItemButton className='menuindicator '>
                                <span className='indicator' style={{width:active===1 && "5rem"}} />
                                <ListItemText  primary={<span className={`title menuitemFS  ${active===1 ? 'clrthreetext':"clrfivetext"}`}>About</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem onClick={()=>handleactivechange(2)}>
                            <ListItemButton className='menuindicator '>
                                <span className='indicator'  style={{width:active===2 && "5rem"}}/>
                                <ListItemText  primary={<span className={`title menuitemFS  ${active===2 ? 'clrthreetext':"clrfivetext"}`}>Skills</span>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem  onClick={()=>handleactivechange(3)}>
                            <ListItemButton className='menuindicator '>
                                <span className='indicator'  style={{width:active===3 && "5rem"}}/>
                                <ListItemText  primary={<span className={`title menuitemFS  ${active===3? 'clrthreetext':"clrfivetext"}`}>Select Projects</span>} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>

                <Grid xs={10} sx={{overflow:'auto'}}>
                    {/*<Nav/>*/}

                    <main>
                        <Outlet/>
                    </main>

                </Grid>


            </Grid>
            <Footer/>

        </>
    );
};
export default Mainlayout;
