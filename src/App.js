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
import AdminLayout from './pages/admin/AdminLayout/AdminLayout';
import AdminGameCreate from './pages/admin/AdminGameCreate/AdminGameCreate';
import AdminGameList from './pages/admin/AdminGameList/AdminGameList';
import AdminGameUpdate from './pages/admin/AdminGameUpdate/AdminGameUpdate';
import AdminParentGameCreate from './pages/admin/AdminParentGameCreate/AdminParentGameCreate';
import AdminParentGameList from './pages/admin/AdminParentGameList/AdminParentGameList';
import AdminParentGameUpdate from './pages/admin/AdminParentGameUpdate/AdminParentGameUpdate';
import AdminSupportUpdate from './pages/admin/AdminSupportUpdate/AdminSupportUpdate';
import AdminSupportCreate from './pages/admin/AdminSupportCreate/AdminSupportCreate';
import AdminSupportList from './pages/admin/AdminSupportList/AdminSupportList';
import AdminBannerList from './pages/admin/AdminBannerList/AdminBannerList';
import AdminBannerCreate from './pages/admin/AdminBannerCreate/AdminBannerCreate';
import AdminBannerUpdate from './pages/admin/AdminBannerUpdate/AdminBannerUpdate';
import NotFound from './components/site/NotFound/NotFound';
import LoginAttempt from './pages/site/LoginAttempt/LoginAttempt';
import CartAttempt from './pages/site/CartAttempt/CartAttempt';
import Do from './pages/site/Do/Do';
import CreateReviewPage from './pages/site/CreateReviewPage/CreateReviewPage';
import ThankComment from './pages/site/ThankComment/ThankComment';

function App() {
  let routes = useRoutes([
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/admin/banner/update/:slug',
      element: (
        <AdminLayout>
          <AdminBannerUpdate />
        </AdminLayout>
      ),
    },

    {
      path: '/admin/banner/create',
      element: (
        <AdminLayout>
          <AdminBannerCreate />
        </AdminLayout>
      ),
    },

    {
      path: 'admin/banners',
      element: (
        <AdminLayout>
          <AdminBannerList />
        </AdminLayout>
      ),
    },

    {
      path: '/admin/support/update/:slug',
      element: (
        <AdminLayout>
          <AdminSupportUpdate />
        </AdminLayout>
      ),
    },

    {
      path: '/admin/support/create',
      element: (
        <AdminLayout>
          <AdminSupportCreate />
        </AdminLayout>
      ),
    },

    {
      path: 'admin/support-list',
      element: (
        <AdminLayout>
          <AdminSupportList />
        </AdminLayout>
      ),
    },

    {
      path: '/admin/parent-game/update/:slug',
      element: (
        <AdminLayout>
          <AdminParentGameUpdate />
        </AdminLayout>
      ),
    },

    {
      path: '/admin/parent-game/create',
      element: (
        <AdminLayout>
          <AdminParentGameCreate />
        </AdminLayout>
      ),
    },

    {
      path: 'admin/parent-games',
      element: (
        <AdminLayout>
          <AdminParentGameList />
        </AdminLayout>
      ),
    },

    {
      path: '/admin/game/update/:slug',
      element: (
        <AdminLayout>
          <AdminGameUpdate />
        </AdminLayout>
      ),
    },

    {
      path: '/admin/game/create',
      element: (
        <AdminLayout>
          <AdminGameCreate />
        </AdminLayout>
      ),
    },

    {
      path: 'admin/games',
      element: (
        <AdminLayout>
          <AdminGameList />
        </AdminLayout>
      ),
    },
    {
      path: '/',
      element: (
        <SiteLayout>
          <HomePage />
        </SiteLayout>
      ),
    },
    {
      path: '/admin',
      element: (
        <AdminLayout>
          <HomePage />
        </AdminLayout>
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
      path: '/support/:slug',
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
      path: '/feedback/create',
      element: (
        <SiteLayout>
          <CreateReviewPage />
        </SiteLayout>
      ),
    },
    {
      path: '/feedback/created',
      element: (
        <SiteLayout>
          <ThankComment />
        </SiteLayout>
      ),
    },
    {
      path: '/deposit/:id',
      element: <DepositPage />,
    },
    {
      path: '/login/attempt',
      element: (
        <SiteLayout>
          <LoginAttempt />
        </SiteLayout>
      ),
    },
    {
      path: '/do',
      element: <Do />,
    },
    {
      path: '/order/attempt',
      element: (
        <SiteLayout>
          <CartAttempt />
        </SiteLayout>
      ),
    },
    {
      path: '/order/checkout',
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
      path: '/profile/orders',
      element: (
        <SiteLayout>
          <OrdersPage />
        </SiteLayout>
      ),
    },
    {
      path: '/:slug',
      element: <GamePage />,
    },
    {
      path: '/:parentSlug/:slug',
      element: <GamePage />,
    },
  ]);

  return routes;
}

export default App;
