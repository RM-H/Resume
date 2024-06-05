import Grid from "@mui/material/Unstable_Grid2";
import {Chip, Typography} from '@mui/material'



const Experincecard = () => {
  return(
      <>
          <Grid xs={12}>


              {/*bilitim*/}

              <a href='https://bilitim.net/' rel='nofollow noreferrer' target='_blank' style={{textDecoration:'none'}}>
                  <Grid container className='card' sx={{p: 2}}>
                      <Grid xs={3} sx={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                          <img src='/assets/images/bilitim.svg' width='60%' alt='project bilitm'/>
                      </Grid>
                      <Grid xs={9}>
                          <Typography component='h3' className='title menuitemFS clrthreetext' sx={{mb: 2}}>
                              A web-app for (events) seat reservation with a custom admin panel.
                          </Typography>

                          <Typography component='article' className='bodyfont bodyFS clrfourtext'>
                              In this platform the user can see the available seats and select his/her desired ones and
                              pay for it.
                              The platforms admin can creat events for different theatres that have varying seating
                              areas or structures.
                          </Typography>
                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'> React JS</span>}/>

                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'> Redux</span>}/>


                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'>Javascript / ES6</span>}/>





                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'> Material UI</span>}/>


                      </Grid>


                  </Grid>
              </a>


              {/*ressonance*/}
              <a href='https://ressonance.co/' rel='nofollow noreferrer' target='_blank' style={{textDecoration:'none'}}>
                  <Grid container className='card' sx={{p: 2}}>
                      <Grid xs={3} sx={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                          <img src='/assets/images/ress.png' width='60%' alt='project bilitm'/>
                      </Grid>
                      <Grid xs={9}>
                          <Typography component='h3' className='title menuitemFS clrthreetext' sx={{mb: 2}}>
                              An international advertisement agency webpage.
                          </Typography>

                          <Typography component='article' className='bodyfont bodyFS clrfourtext'>
                              Introducing this advertisement agency's services which are mostly digital.
                          </Typography>

                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'>Vanilla JS</span>}/>
                      </Grid>


                  </Grid>
              </a>


              {/*Safiran*/}
              <a href='https://safirannoavari.com/' rel='nofollow noreferrer' target='_blank' style={{textDecoration:'none'}}>
                  <Grid container className='card' sx={{p: 2}}>
                      <Grid xs={3} sx={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                          <img src='/assets/images/safir.png' width='60%' alt='project bilitm'/>
                      </Grid>
                      <Grid xs={9}>
                          <Typography component='h3' className='title menuitemFS clrthreetext' sx={{mb: 2}}>
                              A cultural institutes webpage
                          </Typography>

                          <Typography component='article' className='bodyfont bodyFS clrfourtext'>
                              this website is used to book seminars and educational events, purchasing the archived videos or watch them live.

                          </Typography>

                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'> React JS</span>}/>




                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'>Javascript / ES6</span>}/>




                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'> Material UI</span>}/>
                      </Grid>


                  </Grid>
              </a>

              {/*satar*/}
              <a href='https://clinicdrsattarzadeh.com/' rel='nofollow noreferrer' target='_blank' style={{textDecoration:'none'}}>
                  <Grid container className='card' sx={{p: 2}}>
                      <Grid xs={3} sx={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                          <img src='/assets/images/clinic.svg' width='60%' alt='project bilitm'/>
                      </Grid>
                      <Grid xs={9}>
                          <Typography component='h3' className='title menuitemFS clrthreetext' sx={{mb: 2}}>
                              web for an allergy clinic and Lab and custom admin panel.
                          </Typography>

                          <Typography component='article' className='bodyfont bodyFS clrfourtext'>
                              Allergy clinics introduction with the ability to book times for examination and see the results of tests.
                              admin can choose if a blog post has a sensitive picture so that it will not be shown by efault.


                          </Typography>


                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'> React JS</span>}/>




                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'>Javascript / ES6</span>}/>





                          <Chip variant="filled"
                                sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                                label={<span className='clrsixtext  bodyfont--bold'> Material UI</span>}/>
                      </Grid>


                  </Grid>
              </a>




          </Grid>


      </>
)
}
export default  Experincecard;