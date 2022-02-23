import { FormControl, OutlinedInput, Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Typography variant='h3'align='center'>
         My Todo List 
      </Typography>;

      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        
      </FormControl>
    </div>
  );
}

export default App;
