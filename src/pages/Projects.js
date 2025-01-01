import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { contentConfig } from "../config/content";

const Projects = () => {
  const { projects } = contentConfig;

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
          gap: 4,
        }}
      >
        <Typography
          component={motion.h1}
          variants={itemVariants}
          variant="h2"
          align="center"
          sx={{
            mb: 4,
            background: "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {projects.title}
        </Typography>

        <Typography
          component={motion.div}
          variants={itemVariants}
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          {projects.subtitle}
        </Typography>

        <Grid container spacing={4}>
          {projects.items.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              component={motion.div}
              variants={itemVariants}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(145deg, rgba(26,32,39,0.9) 0%, rgba(10,25,41,0.9) 100%)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 2,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: "cover",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      color: "primary.main",
                      fontWeight: 600,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {project.subtitle}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {project.description}
                  </Typography>
                  <Box
                    sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        size="small"
                        sx={{
                          background:
                            "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
                          color: "white",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      size="small"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={
                        link.label === "GitHub" ? (
                          <GitHubIcon />
                        ) : (
                          <OpenInNewIcon />
                        )
                      }
                      sx={{
                        color: "text.secondary",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
