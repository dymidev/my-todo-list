import { FormControl, OutlinedInput, Typography, Box } from '@mui/material';

function App() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography variant='h3'>
         My Todo List 
      </Typography>

      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        
      </FormControl>
    </Box>
  );
}

export default App;
