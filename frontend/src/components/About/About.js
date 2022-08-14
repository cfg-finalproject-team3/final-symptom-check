import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Email, GitHub, Launch, LinkedIn} from '@mui/icons-material';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import { border, borderColor } from '@mui/system';


export default function About() {
  return (
  
  <div className='all'>
    <div>
    <>
      <Box
        sx={{
          minHeight: "100%",
          position: "fixed",
          zIndex: -1,
          inset: 0,
          display: { xs: "none", sm: "block" },
          backgroundPosition: 'top left',
          backgroundImage:
            "url(https://res.cloudinary.com/dl6pfjd5w/image/upload/v1660085941/symptom%20checker/background-1_kptzse.png)",
        }}>
      </Box></>
      <Typography margin={3} marginTop={10} align="center" variant="h3" fontFamily="Montserrat" fontWeight={600}>
        Who We Are
      </Typography>
    </div>
    
    <Grid2 margin={3} container rowSpacing={10} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2>
          <Card sx={{ maxWidth: 345, boxShadow: 10, border: 2, borderColor: 'white', minHeight: 550, display:'flex-grid', flexDirection:'column', justifyContent: 'space-between'}}>
            <CardMedia
              component="img"
              height="300"
              image="https://res.cloudinary.com/gemmabee/image/upload/v1660405331/Profile%20Pictures/gemma_kv4flx.jpg"
              alt="Picture of Gemma" />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div" fontFamily="Montserrat" fontWeight={600}>
                Gemma Baldock
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Montserrat" fontWeight={500}>
                Gemma is a First-Class Masters of Biological Sciences graduate from the University of Liverpool. During the day she works as an Account Manager for a large technology company. However, after work you can find Gemma at her desk coding!
              </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-evenly'}}>
              
          
              <Button onClick={() => window.open("https://www.linkedin.com/in/gemmabaldock/")}
                variant="contained" endIcon={<LinkedIn />} size="small" sx={{borderRadius: 20, minWidth: 108 }}>LinkedIn</Button>
              <Button onClick={() => window.open("https://github.com/GemmaBaldock")} variant="contained" endIcon={<GitHub />} size="small" sx={{ borderRadius: 20, minWidth: 108, }}>GitHub</Button>
              <Button onClick={() => window.open('mailto:gemmalouisebaldock@gmail.com?subject=Symptom Checker')} variant="contained" endIcon={<Email />} size="small" sx={{ borderRadius: 20, minWidth: 108}}>Email</Button>
            
              

            </CardActions>
          </Card>

        </Grid2>

        <Grid2>
          <Card sx={{ maxWidth: 345, boxShadow: 10,  border: 2, borderColor: 'white', minHeight: 550, display:'flex-grid', flexDirection:'column', justifyContent: 'space-between'}}>
            <CardMedia
              component="img"
              height="300"
              image="https://res.cloudinary.com/gemmabee/image/upload/v1660405342/Profile%20Pictures/paopic_xrwktn.png"
              alt="Picture of Paula" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily="Montserrat" fontWeight={600}>
                Paula Manese
              </Typography>
              <Typography variant="body2" color="text.secondary"fontFamily="Montserrat" fontWeight={500}>
                Paula is an experienced, university-educated English language assistant. She is currently completing a Full Stack CFGDegree and has a strong desire to transition into software development roles!
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-evenly'}}>
         
              <Button onClick={() => window.open("https://www.linkedin.com/in/paula-manese-b32a64197/")} variant="contained" endIcon={<LinkedIn />} size="small" sx={{ borderRadius: 20, minWidth: 108}}>LinkedIn</Button>
              <Button onClick={() => window.open("https://github.com/PaulaManese")} variant="contained" endIcon={<GitHub />} size="small"sx={{ borderRadius: 20, minWidth: 108}}>GitHub</Button>
              <Button onClick={() => window.open('mailto:paulamanese@gmail.com?subject=Symptom Checker')} variant="contained" endIcon={<Email />} size="small"sx={{ borderRadius: 20, minWidth: 108}}>Email</Button>
              
            </CardActions>
          </Card>
        </Grid2>

        <Grid2>
          <Card sx={{ maxWidth: 345, boxShadow: 10, border: 2, borderColor: 'white', minHeight: 550, display:'flex-grid', flexDirection:'column', justifyContent: 'space-between' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://res.cloudinary.com/gemmabee/image/upload/v1660405334/Profile%20Pictures/favour_q2tk9u.png"
              alt="Picture of Favour" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily="Montserrat" fontWeight={600}>
                Ihuoma Favour Agbaru
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Montserrat" fontWeight={500}>
                Favour is a front-end developer skilled in HTML, CSS and JavaScript. She is currently completing the Full Stack CFGdegree at Code First: Girls. She is open to new career opportunities and learning experiences, including internships and junior roles.
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-evenly'}}>
              <Button onClick={() => window.open("https://www.linkedin.com/in/ihuoma-agbaru-6775041ba/")} variant="contained" endIcon={<LinkedIn />} size="small" sx={{ borderRadius: 20, minWidth: 108}}>LinkedIn</Button>
              <Button onClick={() => window.open("https://github.com/fynefav3")} variant="contained" endIcon={<GitHub />} size="small" sx={{ borderRadius: 20, minWidth: 108}}>GitHub</Button>
              <Button onClick={() => window.open('https://www.ihuomafavour.netlify.app/')} variant="contained" endIcon={<Launch />} size="small" sx={{ borderRadius: 20, minWidth:108}}>Portfolio</Button>
            </CardActions>
          </Card>
        </Grid2>

        <Grid2>
          <Card sx={{ maxWidth: 345, boxShadow: 10, border: 2, borderColor: 'white', minHeight: 550, display:'flex-grid', flexDirection:'column', justifyContent: 'space-between' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://res.cloudinary.com/gemmabee/image/upload/v1660467327/Profile%20Pictures/elizabethphoto_lugibz.png"
              alt="Picture of Elizabeth" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily="Montserrat" fontWeight={600}>
                Elizabeth Awosode
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Montserrat" fontWeight={500}>
                Elizabeth is an Android Software Developer who loves Python and Java. She is completing a Full Stack CFGDegree at Code First: Girls, and has some previous web development experience. When she's not behind a computer screen, you'll catch her baking the odd wedding cake!
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-evenly'}}>
              <Button onClick={() => window.open("https://www.linkedin.com/in/elizabeth-awosode-563a3a1a1")} variant="contained" endIcon={<LinkedIn />} size="small" sx={{ borderRadius: 20, alignItems: 'center', minWidth: 108}}>LinkedIn</Button>
              <Button onClick={() => window.open("hhttps://github.com/elizabethawosode")} variant="contained" endIcon={<GitHub />} size="small" sx={{ borderRadius: 20, minWidth: 105}}>GitHub</Button>
              <Button onClick={() => window.open('mailto:elizabeth.awosode@gmail.com?subject=Symptom Checker')} variant="contained" endIcon={<Email />} size="small" sx={{ borderRadius: 20, minWidth: 108}}>Email</Button>
            </CardActions>
          </Card>
        </Grid2>

        <Grid2>
          <Card sx={{ maxWidth: 345, boxShadow: 10, border: 2, borderColor: 'white', minHeight: 550, display:'flex-grid', flexDirection:'column', justifyContent: 'space-between' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://res.cloudinary.com/gemmabee/image/upload/v1660473911/Profile%20Pictures/IMG_7449_ddprxj.jpg"
              alt="Picture of Daniela" />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily="Montserrat" fontWeight={600}>
                Daniela Tripon
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Montserrat" fontWeight={500}>
                Daniela is a BSc Computing graduate with a passion for creating beautiful, functional websites. She is currently completing the Code First: Girls Full Stack CFGDegree. Moreover, Daniela was one of 100 people selected globally to attend a 4 month mentoring program with Cajigo.
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-between'}}>
              <Button onClick={() => window.open("https://www.linkedin.com/in/danielatripon/")}
                variant="contained" endIcon={<LinkedIn />} size="small" sx={{ borderRadius: 20}} >LinkedIn</Button>
              <Button onClick={() => window.open("https://github.com/danielatripon")} variant="contained" endIcon={<GitHub />} size="small" sx={{ borderRadius: 20, minWidth: 105}}>GitHub</Button>
              <Button onClick={() => window.open('mailto:daniela.tripon29@gmail.com?subject=Symptom Checker')} variant="contained" endIcon={<Email />} size="small" sx={{ borderRadius: 20, minWidth: 105}}>Email</Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>

      </div>
  );}