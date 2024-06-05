import Grid from "@mui/material/Unstable_Grid2";
import { ReactTyped } from "react-typed";
import {Typography, } from "@mui/material";
import {HomeIcons , HomeSkills,Homeprojects,Education,Linguistics} from './index.js'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {changeNav} from "../slices/navigationSlice.js";


const Homeaboutme = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        let el = document.getElementById(1)
        const intersectionObserver = new IntersectionObserver((entries) => {
            // If intersectionRatio is 0, the target is out of view
            // and we do not need to do anything.
            console.log(entries)
            if (entries[0].intersectionRatio <= 0) {
                return;
            }else {
                dispatch(changeNav(1))
            }


            // console.log("Loaded new items");
            console.log(entries)
        });
// start observing
        intersectionObserver.observe(el);
    }, []);




  return(
      <>

          <Grid xs={4} className='zindex' sx={{display:'flex', flexDirection:'column' }} >



              <Typography component='article' className='title titleFS clrthreetext zindex'  sx={{ fontWeight:'bold'}}>
             Ramin Hasani

              </Typography>

              <Typography component='article'  className='title subtitleFS clrfourtext zindex'>
                  front-end software engineer

              </Typography>
              <Typography component='article'  className='title menuitemFS  clrfivetext zindex' >

                  I build pixel-perfect, engaging digital experiences.
              </Typography>




              <HomeIcons/>

          </Grid>


          <Grid xs={8}>
              <Grid container sx={{overflow:'auto' ,maxHeight:'81vh' ,px:3 }}>
                  <Grid className=' zindex' xs={12} id={1} sx={{mb:2 , minHeight:'80vh' }}>
                      <ReactTyped
                          backSpeed={50}
                          startWhenVisible
                          showCursor={false}


                          strings={[
                              'Hello World,'
                          ]}
                          typeSpeed={196}
                          style={{color:"white"}}
                          className='typewriter zindex titleFS'

                      />



                      <Typography  component='article' sx={{ textAlign:'justify' , mt:2 }} className='bodyfont bodyFS--lineheight clrfourtext zindex'>
                          Back in 2013, I won an award from <strong className='clrsixtext'>
                          Samsung Electronics </strong>   & <strong className='clrsixtext'>  Sharif University of Technology</strong>
                          in the field of best ideas.
                          I didnt have the privilege to educate in the field of technology until 2018, when I started my <strong className='clrsixtext'> master's degree</strong>  education in the field of Technology Management and Innovation at <strong className='clrsixtext'>Shahid Beheshti University </strong> , during which I worked as a part-time researcher in the field of Technology in a private institute.
                          After graduation, I started as a front-end development intern and learned more about Front-end development. Technologies like Javascript made much sense to me. So my time and effort has been dedicated to learning Javascript related technologies such as <strong className='clrsixtext'>React JS </strong>   and <strong className='clrsixtext'>  Node JS  </strong> ever since. Fast-forward to today, and I’ve had the privilege of building software for an <strong className='clrsixtext'>advertising agency & many of their clients </strong> , a <strong className='clrsixtext'>start-up </strong> ,a <strong className='clrsixtext'>factory </strong> and a <strong className='clrsixtext'>digital product studio </strong> .

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