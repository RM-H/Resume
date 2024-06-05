import Grid from "@mui/material/Unstable_Grid2";
import {Typography} from '@mui/material'



const Experincecard = () => {
  return(
      <>
          <Grid xs={12} >

              <Grid container  className='card' sx={{p:2}}>
                  <Grid xs={3} >
                    <img src='/assets/images/bilitim.svg' width='60%' alt='project bilitm' />
                  </Grid>
                  <Grid xs={9}>
                      <Typography component='h3' className='title menuitemFS clrthreetext' sx={{mb:2}}>
                          A platform for (events) seat reservation.
                      </Typography>

                      <Typography component='article' className='bodyfont bodyFS clrfourtext'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at cumque dolorum eligendi enim, exercitationem expedita explicabo in nihil odio provident, quia quibusdam, recusandae reiciendis reprehenderit tenetur unde voluptas? A ab animi assumenda atque
                      </Typography>
                  </Grid>


              </Grid>

          </Grid>



      </>
  )
}
export default  Experincecard;