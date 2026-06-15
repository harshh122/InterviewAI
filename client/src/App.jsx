import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import Home from './pages/Home';
import Auth from './pages/Auth';
import InterviewPage from './pages/InterviewPage';
import InterviewHistory from './pages/InterviewHistory';
import Pricing from './pages/Pricing';
import InterviewReport from './pages/InterviewReport';

import { setUserData } from './redux/userSlice';
import ProtectedRoute from "./ProtectedRoute";

export const ServerUrl = "https://interviewai-0sxf.onrender.com";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(
          ServerUrl + "/api/user/current-user",
          { withCredentials: true }
        );

        dispatch(setUserData(result.data));
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null));
      }
    };

    getUser();
  }, [dispatch]);

  return (
    <Routes>

      {/* Public Routes */}
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />

      {/* Protected Routes */}
      <Route
        path='/interview'
        element={
          <ProtectedRoute>
            <InterviewPage />
          </ProtectedRoute>
        }
      />

      <Route
        path='/history'
        element={
          <ProtectedRoute>
            <InterviewHistory />
          </ProtectedRoute>
        }
      />

      <Route
        path='/pricing'
        element={
          <ProtectedRoute>
            <Pricing />
          </ProtectedRoute>
        }
      />

      <Route
        path='/report/:id'
        element={
          <ProtectedRoute>
            <InterviewReport />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
