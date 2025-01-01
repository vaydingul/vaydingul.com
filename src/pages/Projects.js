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

const projects = [
  {
    title: "Maybe One Day...",
    subtitle: "Philosophical exploration of reality through AI entities",
    description:
      "Exchange of ideas and questions that push the boundaries of our understanding",
    image: "projects/maybe-one-day.png",
    links: [
      {
        url: "https://github.com/vaydingul/maybeoneday-public",
        label: "GitHub",
      },
    ],
    tags: ["AI", "Chatbot", "LLM"],
  },
  {
    title: "CARLA Environment",
    subtitle: "A customizable environment for autonomous driving",
    description:
      "A customizable environment for autonomous driving using CARLA simulator.",
    image: "projects/carla.jpeg",
    links: [
      {
        url: "https://github.com/vaydingul/carla_env",
        label: "GitHub",
      },
    ],
    tags: ["CARLA", "Autonomous Driving", "Simulation"],
  },
  {
    title: "Actor-Critic Model Predictive Control",
    subtitle: "An interplay between RL and MPC",
    description:
      "A model predictive control framework that uses Actor-Critic model to predict the future state of the system.",
    image: "projects/actor-critic.png",
    links: [
      {
        url: "https://github.com/vaydingul/actor-critic-mpc",
        label: "GitHub",
      },
    ],
    tags: ["RL", "MPC", "Control Systems"],
  },
  {
    title: "Haptics",
    subtitle: "Electromechanical device control unit",
    description:
      "Projects focused on controlling experimental setups in the Robotics and Mechatronics Laboratory. Includes Surface Haptics Setup control and TacTX - a framework for DAQ device control in MATLAB.",
    image: "projects/finger.jpg",
    links: [
      {
        url: "https://github.com/vaydingul/Surface_Haptics_Setup",
        label: "Surface Haptics Setup",
      },
      { url: "https://github.com/vaydingul/TacTX", label: "TacTX" },
    ],
    tags: ["MATLAB", "DAQ", "Haptics", "Control Systems"],
  },
  {
    title: "Deep Learning in Julia",
    subtitle: "Various ML-related projects in Julia",
    description:
      "A collection of deep learning implementations in Julia using Knet framework, including HapticFCN, FCN library, and data handling utilities.",
    image: "projects/julia_dl.png",
    links: [
      { url: "https://github.com/vaydingul/HapticFCN.jl", label: "HapticFCN" },
      { url: "https://github.com/vaydingul/FCN.jl", label: "FCN" },
      { url: "https://github.com/vaydingul/GDH.jl", label: "GDH" },
    ],
    tags: ["Julia", "Deep Learning", "CNN", "Knet"],
  },
  {
    title: "TensorLib",
    subtitle: "A minimalist tensor library written in C++",
    description:
      "A tensor library for basic operations, created for a deep-learning-from-scratch project. Supports arbitrary dimensions and various mathematical operations.",
    image: "projects/tensor.png",
    links: [{ url: "https://github.com/vaydingul/TensorLib", label: "GitHub" }],
    tags: ["C++", "Tensor Operations", "Mathematics"],
  },
  {
    title: "Computational Physics",
    subtitle: "A general look on computational physics",
    description:
      "Collection of computational physics projects, including analysis of White Dwarf data and various physics simulations.",
    image: "projects/physics.jpg",
    links: [
      {
        url: "https://github.com/vaydingul/PHYS514-Problem_Sets",
        label: "Course Projects",
      },
      {
        url: "https://github.com/vaydingul/PHYS514_Project",
        label: "White Dwarf Analysis",
      },
    ],
    tags: ["Physics", "Data Analysis", "Simulation"],
  },
  {
    title: "Robot Motion Planning",
    subtitle: "Motion planning for 2-linked robotic arm",
    description:
      "Implementation of a motion planning algorithm using Potential Field Method for a 2-linked robotic arm.",
    image: "projects/robot.jpg",
    links: [
      {
        url: "https://github.com/vaydingul/robot-motion-planning",
        label: "GitHub",
      },
      {
        url: "https://colab.research.google.com/drive/1bQN3pF2ijRC-mpllqRBaNvI67GU2RvTo?usp=sharing",
        label: "Colab",
      },
    ],
    tags: ["Python", "Robotics", "Motion Planning"],
  },
  {
    title: "Swarm Algorithm",
    subtitle: "A simple swarm algorithm simulation",
    description:
      "Light-weight implementation of swarm intelligence algorithms in C++.",
    image: "projects/swarm.jpg",
    links: [
      { url: "https://github.com/vaydingul/SwarmAlgorithm", label: "GitHub" },
    ],
    tags: ["C++", "Swarm Intelligence", "Simulation"],
  },
];

const Projects = () => {
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
          sx={{
            mb: 4,
            background: "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                component={motion.div}
                variants={itemVariants}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
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
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    color="text.secondary"
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
                        color: "#2196f3",
                        "&:hover": {
                          color: "#1976d2",
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
