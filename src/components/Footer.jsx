import {Typography} from '@mui/material'

const Footer = () => {
  return(
      <>
      <footer className=" container" style={{height:'10vh'}} >

          <Typography className='signature'  sx={{color:'white' , fontSize:'6rem' , position:'relative' , zIndex:1}}>
            Designed by:  Ramin Hasani
          </Typography>

      </footer>
      

      </>
  )
}
export default Footer;