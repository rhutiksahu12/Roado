import { MoreVert, Notifications, NotificationsNoneOutlined, Search } from "@mui/icons-material"
import { Box, Container, CssBaseline, Divider, Icon, Stack, Typography } from "@mui/material"
import NavBar from "./Components/NavBar"
import CardContainer from "./Components/CardContainer"
import QuickActionSection from "./Components/QuickActionSection"
import HighPriorityAlerts from "./Components/HighPriorityAlerts"
import MainLayout from "./Layout/MainLayout"
import SideBar from "./Components/SideBar"


function App() {

  return (
    <>
      <CssBaseline />
      {/* <MainLayout> */}
        <Container maxWidth="xl" disableGutters sx={{ height: '100vh', display: 'flex', width: '100vw' }}>
          <SideBar />
          <Stack direction='row' justifyContent='space-between' sx={{ flex: 1 }}>
            <Box sx={{ backgroundColor: '#f8faff' }} flex={5} p={2} >
              <NavBar />
              <CardContainer />
              <QuickActionSection />
              <HighPriorityAlerts />
            </Box>
            <Box bgcolor='white' flex={2} p={2} >
            </Box>
          </Stack>
        </Container>
      {/* </MainLayout> */}
    </>
  )
}

export default App
