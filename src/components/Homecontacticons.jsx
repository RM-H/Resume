import {Box , Chip} from '@mui/material'
import {GitHub,EmailOutlined,Instagram,LinkedIn} from '@mui/icons-material'


const Homecontacticons = () => {
  return(
      <>
          <Box sx={{ mt:'auto'}}>
              <Chip clickable  sx={{mx:0.6}}  icon={<LinkedIn className='iconhover'/>}/>
              <Chip clickable  sx={{mx:0.6}}  icon={<EmailOutlined className='iconhover' />}/>
              <Chip clickable  sx={{mx:0.6}}  icon={<Instagram className='iconhover' />}/>
              <Chip clickable  sx={{mx:0.6}}  icon={<GitHub className='iconhover' />}/>

          </Box>


      </>
  )
}
export default Homecontacticons;