import { Grid, GridItem } from '@chakra-ui/react';
import { Header } from '../components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Grid
      templateAreas={`"header"
                  "main"`}
      gridTemplateRows={'60px 1fr'}
      gridTemplateColumns={'1fr'}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      className="overflow-hidden"
    >
      <GridItem pl="2" area={'header'}>
        <Header />
      </GridItem>

      <GridItem pl="2" className="pr-2" area={'main'}>
        {/* main */}
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
