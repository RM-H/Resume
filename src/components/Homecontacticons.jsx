import {Box , Chip} from '@mui/material'
import {GitHub,EmailOutlined,Instagram,LinkedIn} from '@mui/icons-material'


const Homecontacticons = () => {
  return(
      <>
          <Box >
              <Chip icon={<LinkedIn/>}/>
              <Chip icon={<EmailOutlined/>}/>
              <Chip icon={<Instagram/>}/>
              <Chip icon={<GitHub/>}/>

          </Box>


      </>
  )
}
export default Homecontacticons;