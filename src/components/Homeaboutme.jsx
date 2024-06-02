import Grid from "@mui/material/Unstable_Grid2";
import { ReactTyped } from "react-typed";
import {Typography, Divider} from "@mui/material";
import {HomeIcons , HomeSkills} from './index.js'


const Homeaboutme = () => {
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
              <Grid container sx={{overflow:'auto' , height:'35rem' ,px:3 }}>
                  <Grid className=' zindex' xs={12} id={1} sx={{mb:2 , height:'100%' }}>
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



                      <Typography component='article' sx={{ textAlign:'justify' , mt:2 }} className='bodyfont bodyFS--lineheight clrfourtext zindex'>
                          Back in 2013, I won an award from <strong className='clrthreetext'>
                          Samsung Electronics </strong>   & <strong className='clrthreetext'>  Sharif University of Technology</strong>
                          in the field of best ideas.
                          I didnt have the privilege to educate in the field of technology until 2018, when I started my <strong className='clrthreetext'> master's degree</strong>  education in the field of Technology Management and Innovation at <strong className='clrthreetext'>Shahid Beheshti University </strong> , during which I worked as a part-time researcher in the field of Technology in a private institute.
                          After graduation, I started as a front-end development intern and learned more about Front-end development. Technologies like Javascript made much sense to me. So my time and effort has been dedicated to learning Javascript related technologies such as <strong className='clrthreetext'>React JS </strong>   and <strong className='clrthreetext'>  Node JS  </strong> ever since. Fast-forward to today, and I’ve had the privilege of building software for an <strong className='clrthreetext'>advertising agency & many of their clients </strong> , a <strong className='clrthreetext'>start-up </strong> ,a <strong className='clrthreetext'>factory </strong> and a <strong className='clrthreetext'>digital product studio </strong> .

                          When I’m not at the computer, I’m usually cycling, woodworking, or just walking by myself.



                      </Typography>

                  </Grid>


                  <HomeSkills/>


              </Grid>

          </Grid>

      </>
  )
}
export default Homeaboutme;