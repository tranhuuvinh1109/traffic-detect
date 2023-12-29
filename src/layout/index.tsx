import { Grid, GridItem } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { sideBar } from '../constant/options';
import { Header } from '../components';
const Layout = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "sidebar main"`}
      gridTemplateRows={'60px 1fr'}
      gridTemplateColumns={'250px 1fr'}
      h="100vh"
      gap="1"
      className="bg-zinc-800 text-white"
    >
      <GridItem area={'sidebar'} className="border-r border-zinc-600">
        <div>
          <ul className="px-1">
            {sideBar.map((option) => {
              const Icon = option.icon;
              return (
                <li key={option.id}>
                  <NavLink
                    to={option.url}
                    className={({ isActive }) =>
                      isActive
                        ? 'active text-orange-300 flex gap-1 items-center texl-2xl px-4 py-2 mb-2 border-l-4 font-semibold border-red-500 bg-zinc-600'
                        : 'flex gap-1 items-center texl-2xl px-4 py-2 mb-2 hover:border-l-4 font-semibold hover:border-red-500 hover:bg-zinc-600'
                    }
                  >
                    <Icon fontSize={20} fontWeight={600} />
                    <span>{option.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </GridItem>
      <GridItem area={'header'}>
        <Header />
      </GridItem>
      <GridItem className=" overflow-hidden" area={'main'}>
        {/* main */}
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
