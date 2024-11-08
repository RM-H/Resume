import Grid from "@mui/material/Unstable_Grid2";
import {ReactTyped} from "react-typed";
import {Typography,IconButton} from "@mui/material";
import {HomeIcons, HomeSkills, Homeprojects, Education, Linguistics,} from './index.js'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {activeSelector, changeNav} from "../slices/navigationSlice.js";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {LunchDining} from '@mui/icons-material'


const Homeaboutme = () => {

    const dataNeeded = useSelector(activeSelector)

    // drawer
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    // for navigation
    const handleactivechange = (page) => {
        dispatch(changeNav(page))
        const element = document.getElementById(page);
        element.scrollIntoView({ behavior: "smooth"})
    }

    const DrawerList = (
        <Box sx={{ width: '12rem' }} role="presentation" onClick={toggleDrawer(false)}>
            <List className='w100' >
                <ListItem onClick={()=>handleactivechange(1)} disablePadding >
                    <ListItemButton className='menuindicator '>
                        <span className='indicator' style={{width:dataNeeded===1 && "5rem"  , borderColor:dataNeeded===1 && "rgb(94 234 212) "}} />
                        <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===1 ? 'clrsixtext':"clrfivetext"}`}>About</span>} />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={()=>handleactivechange(2)} disablePadding>
                    <ListItemButton className='menuindicator '>
                        <span className='indicator'  style={{width:dataNeeded===2 && "5rem"  , borderColor:dataNeeded===2 && "rgb(94 234 212) "}}/>
                        <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===2 ? 'clrsixtext':"clrfivetext"}`}>Skills</span>} />
                    </ListItemButton>
                </ListItem>
                <ListItem  onClick={()=>handleactivechange(3)} disablePadding>
                    <ListItemButton className='menuindicator '>
                        <span className='indicator'  style={{width:dataNeeded===3 && "5rem"  , borderColor:dataNeeded===3 && "rgb(94 234 212) "}}/>
                        <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===3? 'clrsixtext':"clrfivetext"}`}> Projects</span>} />
                    </ListItemButton>
                </ListItem>

                <ListItem  onClick={()=>handleactivechange(4)} disablePadding>
                    <ListItemButton className='menuindicator '>
                        <span className='indicator'  style={{width:dataNeeded===4 && "5rem" , borderColor:dataNeeded===4 && "rgb(94 234 212) "}}/>
                        <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===4? 'clrsixtext':"clrfivetext"}`}>  Education</span>} />
                    </ListItemButton>
                </ListItem>
                <ListItem  onClick={()=>handleactivechange(5)} disablePadding>
                    <ListItemButton className='menuindicator '>
                        <span className='indicator'  style={{width:dataNeeded===5 && "5rem"  , borderColor:dataNeeded===5 && "rgb(94 234 212) "}}/>
                        <ListItemText  primary={<span className={`title menuitemFS  ${dataNeeded===5? 'clrsixtext':"clrfivetext"}`}> linguistics :)</span>} />
                    </ListItemButton>
                </ListItem>
            </List>


        </Box>
    );


    // ----------------------------------------------------------------------












    const dispatch = useDispatch()


    useEffect(() => {
        const el1 = document.getElementById(1)


        const intersectionObserver = new IntersectionObserver((entries) => {

            if (entries[0].intersectionRatio <= 0) {

            } else {
                dispatch(changeNav(1))
            }

        }, {
            root: null, // relative to document viewport
            rootMargin: '0px',
            threshold: 0.7 // trigger callback when 10% of the target is visible
        });

        intersectionObserver.observe(el1);


    }, []);


    return (
        <>

            <Grid xs={12} sm={4} className='zindex' sx={{display: 'flex', flexDirection: 'column', p: {xs: 4, sm: 0}}}>


                <Typography component='article' className='title titleFS clrthreetext zindex' sx={{fontWeight: 'bold'}}>

                    Ramin Hasani

                    {/*drawer for mobile*/}
                    <IconButton onClick={toggleDrawer(true)}
                                sx={{float: 'right', my: 'auto', display: {md: 'none'}}}><LunchDining
                        className='clrsixtext'/></IconButton>
                    <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} sx={{
                        '& .MuiDrawer-paper': {
                            backgroundColor: 'rgb(15 23 42)'
                        }
                    }}>
                        {DrawerList}
                        <Typography component='p' className='title clrfourtext'
                                    sx={{mt: 'auto', mb: 2, textAlign: 'center', p: 2}}>
                            designed with <i className='hearteffect'> ❤️</i>
                        </Typography>
                    </Drawer>


                </Typography>


                <Typography component='article' className='title subtitleFS clrfourtext zindex'>
                    front-end software engineer

                </Typography>
                <Typography component='article' className='title menuitemFS  clrfivetext zindex'>

                    I build pixel-perfect, engaging digital experiences.
                </Typography>


                <HomeIcons/>

            </Grid>


            <Grid xs={12} sm={8} sx={{overflow:'scroll'}}>
                <Grid container className='containerheight' sx={{ px: 3}}>
                    <Grid className=' zindex' xs={12} id={1} sx={{mb: 2, minHeight: '100dvh'}}>
                        <ReactTyped
                            backSpeed={50}
                            startWhenVisible
                            showCursor={false}


                            strings={[
                                'Hello World,'
                            ]}
                            typeSpeed={196}
                            style={{color: "white"}}
                            className='typewriter zindex titleFS'


                        />


                        <Typography component='article' sx={{textAlign: 'justify', mt: 2}}
                                    className='bodyfont bodyFS--lineheight clrfourtext zindex'>
                            Back in 2013, I won an award from <strong className='clrsixtext'>
                            Samsung Electronics </strong> & <strong className='clrsixtext'> Sharif University of
                            Technology </strong>
                            in the field of best ideas.
                            I didnt have the privilege to educate in the field of technology until 2018, when I started
                            my <strong className='clrsixtext'> master's degree</strong> education in the field of
                            Technology Management and Innovation at <strong className='clrsixtext'>Shahid Beheshti
                            University </strong> , during which I worked as a part-time researcher in the field of
                            Technology in a private institute.
                            After graduation, I started as a front-end development intern and learned more about
                            Front-end development. Technologies like Javascript made much sense to me. So my time and
                            effort have been dedicated to learning Javascript related technologies such as <strong
                            className='clrsixtext'>React JS </strong> and <strong className='clrsixtext'> Node
                            JS </strong> ever since. Fast-forward to today and I’ve had the privilege of building
                            software for an <strong className='clrsixtext'>advertising agency & many of their
                            clients </strong> , a <strong className='clrsixtext'>start-up </strong> ,a <strong
                            className='clrsixtext'>factory </strong> and a <strong className='clrsixtext'>digital
                            product studio </strong> .

                            When I’m not at the computer, I’m usually cycling, woodworking, or just walking by myself.


                        </Typography>

                    </Grid>


                    <HomeSkills/>


                    <Homeprojects/>

                    <Education/>

                    <Linguistics/>


                </Grid>

            </Grid>


        </>
    )
}
export default Homeaboutme;