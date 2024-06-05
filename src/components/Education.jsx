import Grid from "@mui/material/Unstable_Grid2";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {changeNav} from "../slices/navigationSlice.js";
import {Typography} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';



const Education = () => {

    // changing active page when component comes into view
    const dispatch = useDispatch()
    useEffect(() => {
        let el = document.getElementById(4)
        const intersectionObserver = new IntersectionObserver((entries) => {
            // If intersectionRatio is 0, the target is out of view
            // and we do not need to do anything.
            if (entries[0].intersectionRatio <= 0) {
                return;
            } else {
                dispatch(changeNav(4))
            }


            // console.log("Loaded new items");
            console.log(entries)
        });
// start observing
        intersectionObserver.observe(el);
    }, []);
    return (
        <>
            <Grid className='zindex' xs={12} id={4} sx={{minHeight: '80vh'}}>
                <Grid container>


                    <Grid xs={12} sx={{mb: 3}}>
                        <Typography component='article' className='title titleFS clrthreetext zindex'>
                            Education

                        </Typography>
                    </Grid>


                    <Grid xs={12} >
                        <Timeline>
                            <TimelineItem position='left'>
                                <TimelineSeparator>
                                    <TimelineDot className='clrsix'/>
                                    <TimelineConnector  className='clrsix' />

                                </TimelineSeparator>
                                <TimelineContent className='card'>
                                    <Typography component='h4' className='title clrthreetext subtitleFS'>
                                        Technology Management & Innovation (Master of Science)
                                    </Typography>
                                    <Typography component='span' className='title clrfourtext menuitemFS' sx={{backgroundColor: 'rgb(45 212 191 / 10%)'}}>
                                        Shahid Beheshti University
                                    </Typography>
                                    <Typography component='p' className='bodyfont clrsixtext bodyFS'>
                                      2018-2020
                                    </Typography>

                                </TimelineContent>
                            </TimelineItem>



                            <TimelineItem position='right'>

                                <TimelineSeparator>
                                    <TimelineDot className='clrsix'/>

                                </TimelineSeparator>
                                <TimelineContent className='card'>
                                    <Typography component='h4' className='title clrthreetext subtitleFS'>
                                        English Language and Literature (Bachelor of Art)
                                    </Typography>
                                    <Typography component='span' className='title clrfourtext menuitemFS' sx={{backgroundColor: 'rgb(45 212 191 / 10%)' }}>
                                        Urmia State University
                                    </Typography>
                                    <Typography component='p' className='bodyfont clrsixtext bodyFS'>
                                        2012-2016
                                    </Typography>

                                </TimelineContent>


                            </TimelineItem>

                        </Timeline>


                    </Grid>



                </Grid>


            </Grid>


        </>
    )
}
export default Education;