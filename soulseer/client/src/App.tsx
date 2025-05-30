import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./components/ui/theme-provider"
import { Toaster } from "./components/ui/toaster"
import { AuthProvider } from "./contexts/AuthContext"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Layout } from "./components/Layout"
import { useEffect } from "react"

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard"
import AdminReaders from "./pages/admin/Readers"
import AdminClients from "./pages/admin/Clients"
import AdminSessions from "./pages/admin/Sessions"
import AdminFinances from "./pages/admin/Finances"
import AdminShop from "./pages/admin/Shop"

// Reader Pages
import ReaderDashboard from "./pages/reader/Dashboard"
import ReaderProfile from "./pages/reader/Profile"
import ReaderCalendar from "./pages/reader/Calendar"
import ReaderSessions from "./pages/reader/Sessions"
import ReaderMessages from "./pages/reader/Messages"
import ReaderLivestream from "./pages/reader/Livestream"
import ReaderEarnings from "./pages/reader/Earnings"

// Client Pages
import ClientDashboard from "./pages/client/Dashboard"
import ClientReaders from "./pages/client/Readers"
import ClientBook from "./pages/client/Book"
import ClientSessions from "./pages/client/Sessions"
import ClientMessages from "./pages/client/Messages"
import ClientLivestreams from "./pages/client/Livestreams"
import ClientWallet from "./pages/client/Wallet"
import ClientOrders from "./pages/client/Orders"

// Public Pages
import Shop from "./pages/Shop"
import Community from "./pages/Community"
import About from "./pages/About"
import Help from "./pages/Help"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import Apply from "./pages/Apply"
import JoinSession from "./pages/JoinSession"
import LivestreamView from "./pages/LivestreamView"
import ProductDetail from "./pages/ProductDetail"
import NotFound from "./pages/NotFound"

function App() {
  // Set dark mode as the default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <Router>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><Layout /></ProtectedRoute>}>
              <Route index element={<AdminDashboard />} />
              <Route path="readers" element={<AdminReaders />} />
              <Route path="clients" element={<AdminClients />} />
              <Route path="sessions" element={<AdminSessions />} />
              <Route path="finances" element={<AdminFinances />} />
              <Route path="shop" element={<AdminShop />} />
            </Route>
            
            {/* Reader Routes */}
            <Route path="/reader" element={<ProtectedRoute requiredRole="reader"><Layout /></ProtectedRoute>}>
              <Route index element={<ReaderDashboard />} />
              <Route path="profile" element={<ReaderProfile />} />
              <Route path="calendar" element={<ReaderCalendar />} />
              <Route path="sessions" element={<ReaderSessions />} />
              <Route path="messages" element={<ReaderMessages />} />
              <Route path="livestream" element={<ReaderLivestream />} />
              <Route path="earnings" element={<ReaderEarnings />} />
            </Route>
            
            {/* Client Routes */}
            <Route path="/client" element={<ProtectedRoute requiredRole="client"><Layout /></ProtectedRoute>}>
              <Route index element={<ClientDashboard />} />
              <Route path="readers" element={<ClientReaders />} />
              <Route path="book" element={<ClientBook />} />
              <Route path="sessions" element={<ClientSessions />} />
              <Route path="messages" element={<ClientMessages />} />
              <Route path="livestreams" element={<ClientLivestreams />} />
              <Route path="wallet" element={<ClientWallet />} />
              <Route path="orders" element={<ClientOrders />} />
            </Route>
            
            {/* Public Routes with Layout */}
            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route path="shop" element={<Shop />} />
              <Route path="shop/product/:id" element={<ProductDetail />} />
              <Route path="community" element={<Community />} />
              <Route path="about" element={<About />} />
              <Route path="help" element={<Help />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="apply" element={<Apply />} />
            </Route>
            
            {/* Special Routes */}
            <Route path="/session/:id" element={<ProtectedRoute><JoinSession /></ProtectedRoute>} />
            <Route path="/live/:id" element={<ProtectedRoute><LivestreamView /></ProtectedRoute>} />
            
            {/* Redirects */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App