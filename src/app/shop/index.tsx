import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';


export default function Home() {
 
  
  return (
    <>
      <h1>Here</h1>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <Link>
          Home
        </Link>
        <Link>
          Shop
        </Link>
        <Link>
          Why Us
        </Link>
        <Link>
          Contact
        </Link>
        <Button>
          Login
        </Button>
      </Stack>


      {/* Slider */}

      
    </>
  );
}
