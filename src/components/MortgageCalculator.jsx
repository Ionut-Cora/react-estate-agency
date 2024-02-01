import React, {useState} from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { grey } from '@mui/material/colors';

function MortgageCalculator(props) {
    const [fullPrice, setFullPrice] = useState(props.fullPropertyPrice);
    const [deposit, setDeposit] = useState(10);
    const [interest, setInterest] = useState(5.5);
    const [years, setYears] = useState(25);
    const [result, setResult] = useState(0);

    function calculation(event) {
        event.preventDefault();

        let depositPercentage = deposit / 100 * fullPrice;
        let priceDeposit = fullPrice - depositPercentage;
        let monthlyInterest = interest / 100 / 12;
        let numberOfPayments = years * 12;

        let finalResult = (priceDeposit * [monthlyInterest * (1 + monthlyInterest) ** numberOfPayments]) / [(1 + monthlyInterest) ** numberOfPayments - 1];

        setResult(finalResult);
    }

    function reload() {
        window.location.reload();
    }

    window.onload = calculation;

  return (
    <Container sx={{
        marginY: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <Typography 
            variant='h2'
            sx={{
                textTransform: 'capitalize',
                textAlign: 'center',
                fontSize: '3rem',
                marginBottom: '3rem'
            }}
        >
            Mortgage calculator
        </Typography>

        <Box sx={{
            width: { xs: '100%', md: '50%' }
        }}>
            <form 
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
                onSubmit={calculation}
            >
                <TextField
                    id="full-price" 
                    label="Full Price" 
                    variant="outlined" 
                    type='number'
                    value={fullPrice}
                    onChange={(event) => setFullPrice(event.target.value)}
                    sx={{marginBottom: '1rem'}} 
                    required
                    InputProps={{
                        endAdornment: <InputAdornment position="end">£</InputAdornment>,
                    }}
                />
                <TextField
                    id="deposit" 
                    label="Deposit" 
                    variant="outlined" 
                    type='number'
                    value={deposit}
                    onChange={(event) => setDeposit(event.target.value)}
                    sx={{marginBottom: '1rem'}} 
                    required
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    }}
                />
                <TextField
                    id="interest" 
                    label="Interest Rate" 
                    variant="outlined" 
                    type='number'
                    value={interest}
                    onChange={(event) => setInterest(event.target.value)}
                    sx={{marginBottom: '1rem'}} 
                    required
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    }}
                />
                <TextField 
                    id="years" 
                    label="Loan Term" 
                    variant="outlined" 
                    type='number'
                    value={years}
                    onChange={(event) => setYears(event.target.value)}
                    sx={{marginBottom: '1rem'}} 
                    required
                    InputProps={{
                        endAdornment: <InputAdornment position="end">yrs</InputAdornment>,
                    }}
                />

                <Typography 
                    variant='body1'
                    sx={{
                        height: '3rem',
                        backgroundColor: grey[100],
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '5px'
                    }}
                >
                    <Typography 
                        component='span'
                        sx={{
                            fontWeight: 'bold',
                            marginRight: '5px'
                        }}
                    >
                        {result.toFixed(2)}
                    </Typography>
                    per month
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Button
                        variant='contained'
                        color='warning'
                        size='large'
                        type='submit'
                    >
                        Submit
                    </Button>

                    <Button
                        variant='outlined'
                        color='warning'
                        size='large'
                        onClick={reload}
                    >
                        Reload
                    </Button>
                </Box>
            </form>
        </Box>
    </Container>
  )
}

export default MortgageCalculator;