import Grid from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {changeNav} from "../slices/navigationSlice.js";
import {Experiencecard} from '../components/index.js'


const Homeprojects = () => {

    // changing active page when component comes into view
    const dispatch = useDispatch()
    useEffect(() => {
        let el3 = document.getElementById(3)
        const intersectionObserver = new IntersectionObserver((entries) => {
            // If intersectionRatio is 0, the target is out of view
            // and we do not need to do anything.
            if (entries[0].intersectionRatio <= 0) {
                return;
            } else {
                dispatch(changeNav(3))
            }


            // console.log("Loaded new items");

        },{
            root: null, // relative to document viewport
            rootMargin: '0px',
            threshold: 0.5 // trigger callback when 10% of the target is visible
        });
// start observing
        intersectionObserver.observe(el3);
    }, []);


    return (
        <>
            <Grid className='zindex' xs={12} id={3} sx={{minHeight: '100vh'}}>
                <Grid container>


                    <Grid xs={12} sx={{mb: 3}}>
                        <Typography component='article' className='title titleFS clrthreetext zindex'>
                            Select Projects

                        </Typography>
                    </Grid>


                    {/*experience cards*/}


                    <Experiencecard/>


                </Grid>
            </Grid>


        </>
    )
}
export default Homeprojects;