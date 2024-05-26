import { CustomSlider } from '@/components/CustomSlider';
import { TopMenu } from '@/components/TopMenu';
import * as React from 'react';
import { Box, Button, Container, Grid, } from '@mui/material';
import { LatestProduct } from '@/components/LatestProduct';

export default function Home() {
 
  
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <h1>ECC-SHOP</h1>
        <TopMenu />
        <CustomSlider />
        <Box mt={6}>
          <Box mb={4}><h3>Latest Products</h3></Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} mb={4}>
              <Grid item xs={4}>
                <LatestProduct />
              </Grid>
              <Grid item xs={4}>
                <LatestProduct />
              </Grid>
              <Grid item xs={4}>
                <LatestProduct />
              </Grid>
            </Grid>
          </Box>
          <Box display={'flex'} justifyContent={'flex-end'}>
            <Button variant="contained">View All</Button>
          </Box>
        </Box>
      </Container>
      
    </>
  );
}
