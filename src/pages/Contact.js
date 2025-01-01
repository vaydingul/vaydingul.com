import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  IconButton,
  useTheme,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Contact = () => {
  const theme = useTheme();

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      url: "https://www.linkedin.com/in/volkan-ayding%C3%BCl-5a516117a/",
      label: "LinkedIn",
      description: "Connect with me professionally",
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      url: "https://github.com/vaydingul",
      label: "GitHub",
      description: "Check out my code repositories",
    },
    {
      icon: <TwitterIcon sx={{ fontSize: 40 }} />,
      url: "https://twitter.com/vaydingul",
      label: "Twitter",
      description: "Follow me for updates",
    },
    {
      icon: <InstagramIcon sx={{ fontSize: 40 }} />,
      url: "https://www.instagram.com/vaydingul/",
      label: "Instagram",
      description: "Follow my personal journey",
    },
  ];

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 30 }} />,
      label: "Email",
      value: "volkanaydingul@gmail.com",
      description: "Best way to reach me",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
      label: "Location",
      value: "Frankfurt am Main, Germany",
      description: "Current location",
    },
    {
      icon: <WorkIcon sx={{ fontSize: 30 }} />,
      label: "Work",
      value: "Research Engineer",
      description: "Current position",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 30 }} />,
      label: "Education",
      value: "MSc Computational Science",
      description: "Current academic status",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          py: 8,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <Typography
          component={motion.h1}
          variants={itemVariants}
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            background: "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let's Connect
        </Typography>

        <Typography
          component={motion.div}
          variants={itemVariants}
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
        >
          I'm always interested in new opportunities, collaborations, and
          connecting with fellow researchers and engineers.
        </Typography>

        {/* Contact Information Cards */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={itemVariants}
        >
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  background:
                    "linear-gradient(145deg, rgba(26,32,39,0.9) 0%, rgba(10,25,41,0.9) 100%)",
                  borderRadius: 2,
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ color: theme.palette.primary.main }}>
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {info.label}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                      {info.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Social Links Section */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Social Media
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {socialLinks.map((link, index) => (
              <Tooltip key={index} title={link.description} arrow>
                <IconButton
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  sx={{
                    color: "text.secondary",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      transform: "scale(1.2)",
                      backgroundColor: "rgba(33, 150, 243, 0.1)",
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
