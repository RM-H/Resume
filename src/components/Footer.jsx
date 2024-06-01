import {Typography} from '@mui/material'

const Footer = () => {
  return(
      <>
      <footer className=" clrtwo container" style={{minHeight:'20rem'}} >

          <Typography className='signature'  sx={{color:'white' , fontSize:'6rem' , position:'relative' , zIndex:1}}>
              Ramin Hasani
          </Typography>

      </footer>
      

      </>
  )
}
export default Footer;