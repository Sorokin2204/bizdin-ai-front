import { useRoutes } from 'react-router';
import HomePage from './pages/site/HomePage/HomePage';
import SiteLayout from './pages/site/SiteLayout/SiteLayout';
import GamePage from './pages/site/GamePage/GamePage';
import AuthPage from './pages/site/AuthPage/AuthPage';
import ProfilePage from './pages/site/ProfilePage/ProfilePage';
import OrdersPage from './pages/site/OrdersPage/OrdersPage';
import CouponPage from './pages/site/CouponPage/CouponPage';
import WalletPage from './pages/site/WalletPage/WalletPage';
import TouUpPage from './pages/site/TouUpPage/TouUpPage';
import CartPage from './pages/site/CartPage/CartPage';
import DepositPage from './pages/site/DepositPage/DepositPage';
import ReviewsPage from './pages/site/ReviewsPage/ReviewsPage';
import SupportPage from './pages/site/SupportPage/SupportPage';
import SupportSinglePage from './pages/site/SupportSinglePage/SupportSinglePage';

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
      path: '/login',
      element: (
        <SiteLayout>
          <AuthPage />
        </SiteLayout>
      ),
    },
    {
      path: '/profile',
      element: (
        <SiteLayout>
          <ProfilePage />
        </SiteLayout>
      ),
    },
    {
      path: '/support-single',
      element: (
        <SiteLayout>
          <SupportSinglePage />
        </SiteLayout>
      ),
    },
    {
      path: '/support',
      element: (
        <SiteLayout>
          <SupportPage />
        </SiteLayout>
      ),
    },
    {
      path: '/reviews',
      element: (
        <SiteLayout>
          <ReviewsPage />
        </SiteLayout>
      ),
    },
    {
      path: '/deposit',
      element: (
        <SiteLayout>
          <DepositPage />
        </SiteLayout>
      ),
    },
    {
      path: '/cart',
      element: (
        <SiteLayout>
          <CartPage />
        </SiteLayout>
      ),
    },
    {
      path: '/topup',
      element: (
        <SiteLayout>
          <TouUpPage />
        </SiteLayout>
      ),
    },
    {
      path: '/wallet',
      element: (
        <SiteLayout>
          <WalletPage />
        </SiteLayout>
      ),
    },
    {
      path: '/coupon',
      element: (
        <SiteLayout>
          <CouponPage />
        </SiteLayout>
      ),
    },
    {
      path: '/orders',
      element: (
        <SiteLayout>
          <OrdersPage />
        </SiteLayout>
      ),
    },
    {
      path: '/game/:id',
      element: (
        <SiteLayout>
          <GamePage />
        </SiteLayout>
      ),
    },
  ]);

  return routes;
}

export default App;
