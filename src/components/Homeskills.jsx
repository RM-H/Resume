import Grid from "@mui/material/Unstable_Grid2";
import {Chip, Typography, Box} from "@mui/material";


const Homeskills = () => {


    return (
        <Grid className='zindex' xs={12} sx={{height: '100%'}} id={2}>
            <Grid container>
                <Grid xs={12}>
                    <Typography component='article' className='title titleFS clrthreetext zindex'>
                        Skills

                    </Typography>
                </Grid>


                {/*skills items*/}

                <Grid xs={4}>
                    <Typography component='p' className='title subtitleFS clrthreetext zindex'
                                sx={{textAlign: 'center'}}>
                        Languages

                    </Typography>


                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Chip variant="filled" sx={{
                            my: 1,
                            '&.MuiChip-root ': {
                                backgroundColor: 'rgb(45 212 191 / 10%)'

                            }
                        }} label={<span className='clrsixtext  bodyfont--bold'> Javascript</span>}/>
                        <Chip variant="filled"
                              sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> ES6</span>}/>
                        <Chip variant="filled"
                              sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> HTML & CSS</span>}/>
                    </Box>


                </Grid>

                <Grid xs={4}>
                    <Typography component='p' className='title subtitleFS clrthreetext zindex'
                                sx={{textAlign: 'center'}}>
                        Frameworks

                    </Typography>


                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> React JS</span>}/>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> Next JS</span>}/>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> Node JS</span>}/>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> Express JS</span>}/>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> Material UI</span>}/>
                    </Box>
                </Grid>

                <Grid xs={4}>
                    <Typography component='p' className='title subtitleFS clrthreetext zindex'
                                sx={{textAlign: 'center'}}>
                        Tools

                    </Typography>

                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> Redux </span>}/>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> Git</span>}/>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> Insomnia</span>}/>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> MongoDB</span>}/>
                        <Chip variant="filled" sx={{my: 1, '&.MuiChip-root ': {backgroundColor: 'rgb(45 212 191 / 10%)'}}}
                              label={<span className='clrsixtext  bodyfont--bold'> Vite</span>}/>
                    </Box>
                </Grid>


            </Grid>


        </Grid>
    )
}
export default Homeskills;