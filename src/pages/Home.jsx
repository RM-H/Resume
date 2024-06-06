import Grid from '@mui/material/Unstable_Grid2';
import {Homeabout} from '../components/index.js'


const Home = () => {
    return (
        <>
            <Grid container sx={{pt: {xs:2, sm:15} , maxHeight:'100vh' }} >
                <Homeabout/>



            </Grid>


        </>
    )
}
export default Home;