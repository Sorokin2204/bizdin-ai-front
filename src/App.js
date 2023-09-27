import { useRoutes } from 'react-router';
import HomePage from './pages/site/HomePage/HomePage';
import SiteLayout from './pages/site/SiteLayout/SiteLayout';
import ChatPage from './pages/site/ChatPage/ChatPage';
import FilesPage from './pages/site/FilesPage/FilesPage';
import BrainstormingPage from './pages/site/BrainstormingPage/BrainstormingPage';
import SmartToolsPage from './pages/site/SmartToolsPage/SmartToolsPage';
import DashboardPage from './pages/site/DashboardPage/DashboardPage';
import LoginPage from './pages/site/LoginPage/LoginPage';

function App() {
  let routes = useRoutes([
    {
      path: '/',
      element: (
        <SiteLayout>
          <HomePage />
        </SiteLayout>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <SiteLayout>
          <DashboardPage />
        </SiteLayout>
      ),
    },
    {
      path: '/chats',
      element: (
        <SiteLayout>
          <ChatPage />
        </SiteLayout>
      ),
    },
    {
      path: '/files',
      element: (
        <SiteLayout>
          <FilesPage />
        </SiteLayout>
      ),
    },
    {
      path: '/brainstorming',
      element: (
        <SiteLayout>
          <BrainstormingPage />
        </SiteLayout>
      ),
    },
    {
      path: '/smart-tools',
      element: (
        <SiteLayout>
          <SmartToolsPage />
        </SiteLayout>
      ),
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  return routes;
}

export default App;
