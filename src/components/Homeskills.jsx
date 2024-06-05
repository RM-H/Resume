import Grid from "@mui/material/Unstable_Grid2";
import {Chip, Typography, Box,Button} from "@mui/material";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {changeNav} from "../slices/navigationSlice.js";


const Homeskills = () => {




    // changing active page when component comes into view
    const dispatch = useDispatch()
    useEffect(() => {
        let el = document.getElementById(2)
        const intersectionObserver = new IntersectionObserver((entries) => {
            // If intersectionRatio is 0, the target is out of view
            // and we do not need to do anything.
            if (entries[0].intersectionRatio <= 0) {
                return;
            }else {
                dispatch(changeNav(2))
            }


            // console.log("Loaded new items");
            console.log(entries)
        });
// start observing
        intersectionObserver.observe(el);
    }, []);





    return (
        <Grid className='zindex' id={2} xs={12} sx={{height: '100%'}} >
            <Grid container>
                <Grid xs={12}  sx={{mb:3}}>
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



                {/*resume button*/}
                <Grid xs={12} sx={{ mt:3}}>
                    <Button className='clrthreetext'>
                        View Full Résumé
                    </Button>
                </Grid>


            </Grid>


        </Grid>
    )
}
export default Homeskills;