import {Box , Chip} from '@mui/material'
import {GitHub,EmailOutlined,Instagram,LinkedIn} from '@mui/icons-material'


const Homecontacticons = () => {
  return(
      <>
          <Box sx={{ mt:'auto'}} className='cursor'>
              <a target='_blank' href='https://www.linkedin.com/in/rm-h/'>
                  <Chip clickable className='cursor' sx={{mx:0.6}}  icon={<LinkedIn className='iconhover' />}/>
              </a>

              <a href='mailto:raminhp1374@gmail.com'>
                  <Chip clickable className='cursor' sx={{mx:0.6}}  icon={<EmailOutlined className='iconhover' />}/>
              </a>


              <a href="https://www.instagram.com/ra_m_inn/?hl=en" target='+blank'>
                  <Chip clickable className='cursor' sx={{mx:0.6}}  icon={<Instagram className='iconhover' />}/>
              </a>

              <a href="https://github.com/RM-H" target='_blank'>

                  <Chip clickable className='cursor' sx={{mx:0.6}}  icon={<GitHub className='iconhover' />}/>
              </a>



          </Box>


      </>
  )
}
export default Homecontacticons;