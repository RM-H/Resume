import Grid from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {changeNav} from "../slices/navigationSlice.js";
import {Languagechart} from '../components/index.js'


const Homelinguistics = () => {
    // changing active page when component comes into view
    const dispatch = useDispatch()
    useEffect(() => {
        let el5 = document.getElementById(5)
        const intersectionObserver = new IntersectionObserver((entries) => {
            // If intersectionRatio is 0, the target is out of view
            // and we do not need to do anything.
            if (entries[0].intersectionRatio <= 0) {
                return;
            } else {
                dispatch(changeNav(5))
            }


            // console.log("Loaded new items");

        },{
            root: null, // relative to document viewport
            rootMargin: '0px',
            threshold: 0.7// trigger callback when 10% of the target is visible
        });
// start observing
        intersectionObserver.observe(el5);
    }, []);
    return (
        <>
            <Grid className='zindex' xs={12} id={5} sx={{minHeight: '100dvh' }}>


                <Grid container>


                    <Grid xs={12} sx={{mb: 3}}>
                        <Typography component='article' className='title titleFS clrthreetext zindex'>
                            Linguistic Skills

                        </Typography>
                    </Grid>
                    <Grid xs={12} sx={{mb:2}}>
                        <Typography component='article' className='bodyfont clrfourtext bodyFS'>
                            I'm a multilingual INTJ!
                            Azeri is my mother tongue, and I'm fluent in English and Farsi. I may not be able to utter
                            Turkish as fluently, but I sure can converse in Turkish as well. A limited working
                            proficiency is my current level in French, but who knows, maybe one day I'll speak a fluent
                            French as well.

                        </Typography>
                    </Grid>

                    <Grid xs={12} sx={{maxHeight: '29vh' , pt:6}}>
                        <Languagechart/>
                    </Grid>


                    <Grid xs={12} sx={{mt:5 }}>


                        <Typography component='p' className='signature clrthreetext' style={{textAlign: 'center' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>

                           Ramin Hasani
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>


        </>
    )
}
export default Homelinguistics