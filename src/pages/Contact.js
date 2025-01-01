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
import { contentConfig } from "../config/content";

const iconComponents = {
  EmailIcon: EmailIcon,
  LocationOnIcon: LocationOnIcon,
  SchoolIcon: SchoolIcon,
  WorkIcon: WorkIcon,
  TwitterIcon: TwitterIcon,
  LinkedInIcon: LinkedInIcon,
  GitHubIcon: GitHubIcon,
  InstagramIcon: InstagramIcon,
};

const Contact = () => {
  const theme = useTheme();
  const { contact } = contentConfig;

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

  const getIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent sx={{ fontSize: 30 }} /> : null;
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
          {contact.title}
        </Typography>

        <Typography
          component={motion.div}
          variants={itemVariants}
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
        >
          {contact.subtitle}
        </Typography>

        {/* Contact Information Cards */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={itemVariants}
        >
          {contact.contactInfo.map((info, index) => (
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
                    {getIcon(info.icon)}
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
            {contact.socialLinks.map((link, index) => (
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
                  {getIcon(link.icon)}
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
