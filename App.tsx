
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Contribute from './pages/Contribute';
import CreatePool from './pages/CreatePool';
import PoolAgreement from './pages/PoolAgreement';
import PoolDetails from './pages/PoolDetails';
import Manifesto from './pages/Manifesto';
import TrustGraph from './pages/TrustGraph';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/trust-graph" element={<TrustGraph />} />
          <Route path="/create-pool" element={<CreatePool />} />
          <Route path="/agreement/:poolId" element={<PoolAgreement />} />
          <Route path="/contribute/:id" element={<Contribute />} />
          <Route path="/pool/:id" element={<PoolDetails />} />
          <Route path="/join" element={<div className="p-8 text-center bg-white rounded-xl border border-slate-200">Join Pool Interface (Placeholder)</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
