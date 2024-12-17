"use client"

import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Container, Typography, CircularProgress } from "@mui/material";

const Home: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      router.push('/auth/login');
      return;
    }

    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        if (parsedData.role = "merchant") {
          router.push('/dashboard/merchant');
          return;
        }
        if (parsedData.role = "customrer") {
          router.push('/dashboard/customer');
          return;
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    } else {
      console.log("No user data found in localStorage.");
    }
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
      <CircularProgress />
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
        Loading details...
      </Typography>
    </Container>
  )
}

export default Home;
