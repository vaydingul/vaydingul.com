import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  useTheme,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/vaydingul",
      label: "Twitter",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/volkan-ayding%C3%BCl-5a516117a/",
      label: "LinkedIn",
    },
    {
      icon: <GitHubIcon />,
      url: "https://github.com/vaydingul",
      label: "GitHub",
    },
    {
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/vaydingul/",
      label: "Instagram",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: "background.paper",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Engineer, programmer, researcher, and a dreamer passionate about
              technology and innovation.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                volkanaydingul@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ mr: 1, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                Frankfurt am Main, Germany
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((link, index) => (
                <IconButton
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} Volkan Aydingül. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
