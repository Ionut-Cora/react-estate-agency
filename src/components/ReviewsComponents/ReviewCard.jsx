import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import reviews from '../../assets/reviews';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

function ReviewCard() {

    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = reviews.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'transparent'
        }}
      >
        <Avatar alt="avatar" src={reviews[activeStep].img} sx={{ width: 56, height: 56, marginRight: '1rem' }} />
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Typography sx={{ color: 'white' }}>{reviews[activeStep].label}</Typography>
            <Rating
                name="text-feedback"
                value={reviews[activeStep].rating}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
        </Box>
      </Paper>
      <Box sx={{ height: 100, p: 2 }}>
        <Typography variant='body1' sx={{ color: 'white' }}>
            "{reviews[activeStep].description}"
        </Typography>
      </Box>

        <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ flexGrow: 1, background: 'transparent' }}
            nextButton={
                <Button size="small" color='warning' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
                </Button>
            }
            backButton={
                <Button size="small" color='warning' onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
                Back
                </Button>
            }
        />

    </Box>
  )
}

export default ReviewCard;