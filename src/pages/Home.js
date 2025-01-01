import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  Grid,
  Paper,
  Divider,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleExploreClick = () => {
    const nextSection = document.getElementById("highlights-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
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

  const highlights = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Software Development",
      description:
        "Passionate about creating efficient and elegant solutions using modern technologies.",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: "Research",
      description:
        "Focused on generative AI, computer vision, robotics, and control systems.",
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      title: "Engineering",
      description:
        "Experienced in robotics, control systems, and systems engineering.",
    },
  ];

  const backgroundCircles = Array(5)
    .fill(null)
    .map((_, i) => (
      <Box
        key={i}
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15 + i * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          width: `${200 + i * 100}px`,
          height: `${200 + i * 100}px`,
          borderRadius: "50%",
          background: `linear-gradient(45deg, ${theme.palette.primary.main}22, ${theme.palette.secondary.main}22)`,
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
    ));

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #0a1929 0%, #1a2027 100%)",
        }}
      >
        {backgroundCircles}
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y, opacity }}
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "4.5rem" },
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(45deg, #2196f3, #f50057)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 40px rgba(33, 150, 243, 0.5)",
                  mb: 2,
                }}
              >
                Hi, there!
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  maxWidth: "800px",
                  margin: "0 auto",
                  mb: 4,
                }}
              >
                Engineer, programmer, researcher, and a dreamer.
              </Typography>
            </motion.div>

            <Box
              component={motion.div}
              variants={itemVariants}
              sx={{
                display: "flex",
                gap: { xs: 2, md: 4 },
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/projects")}
                sx={{
                  borderRadius: "50px",
                  px: { xs: 4, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textTransform: "none",
                  background:
                    "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
                  boxShadow: "0 8px 16px rgba(33, 150, 243, 0.3)",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #1976d2 30%, #dc004e 90%)",
                    boxShadow: "0 12px 24px rgba(33, 150, 243, 0.4)",
                  },
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={handleExploreClick}
                sx={{
                  borderRadius: "50px",
                  px: { xs: 4, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textTransform: "none",
                  borderWidth: "2px",
                  borderColor: "#2196f3",
                  color: "#2196f3",
                  "&:hover": {
                    borderWidth: "2px",
                    borderColor: "#1976d2",
                    backgroundColor: "rgba(33, 150, 243, 0.1)",
                  },
                }}
              >
                Explore More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Highlights Section */}
      <Box
        id="highlights-section"
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        sx={{
          py: 10,
          background: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 6,
              background: "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What I Do
          </Typography>

          <Grid container spacing={4}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  component={motion.div}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  }}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    background:
                      "linear-gradient(145deg, rgba(26,32,39,0.8) 0%, rgba(10,25,41,0.8) 100%)",
                    borderRadius: 2,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {highlight.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: theme.palette.primary.main }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {highlight.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Page Navigation Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        sx={{
          py: 10,
          background: "linear-gradient(180deg, #1a2027 0%, #0a1929 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 6,
              background: "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Explore More
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                component={motion.div}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(33, 150, 243, 0.3)",
                }}
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(145deg, rgba(26,32,39,0.9) 0%, rgba(10,25,41,0.9) 100%)",
                  borderRadius: 2,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <TimelineIcon
                    sx={{
                      fontSize: 40,
                      color: theme.palette.primary.main,
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h5"
                    gutterBottom
                    align="center"
                    color="primary"
                  >
                    Timeline
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 2 }}
                  >
                    Journey through my academic and professional experiences
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => navigate("/timeline")}
                    sx={{
                      mt: "auto",
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        borderColor: theme.palette.primary.light,
                        backgroundColor: "rgba(33, 150, 243, 0.1)",
                      },
                    }}
                  >
                    View Timeline
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                component={motion.div}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(33, 150, 243, 0.3)",
                }}
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(145deg, rgba(26,32,39,0.9) 0%, rgba(10,25,41,0.9) 100%)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <WorkIcon
                    sx={{
                      fontSize: 40,
                      color: theme.palette.primary.main,
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h5"
                    gutterBottom
                    align="center"
                    color="primary"
                  >
                    Projects
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 2 }}
                  >
                    Explore my portfolio of innovative projects and
                    contributions
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => navigate("/projects")}
                    sx={{
                      mt: "auto",
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        borderColor: theme.palette.primary.light,
                        backgroundColor: "rgba(33, 150, 243, 0.1)",
                      },
                    }}
                  >
                    View Projects
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                component={motion.div}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(33, 150, 243, 0.3)",
                }}
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(145deg, rgba(26,32,39,0.9) 0%, rgba(10,25,41,0.9) 100%)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <PersonIcon
                    sx={{
                      fontSize: 40,
                      color: theme.palette.primary.main,
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h5"
                    gutterBottom
                    align="center"
                    color="primary"
                  >
                    About
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 2 }}
                  >
                    Learn more about my background and expertise
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => navigate("/about")}
                    sx={{
                      mt: "auto",
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        borderColor: theme.palette.primary.light,
                        backgroundColor: "rgba(33, 150, 243, 0.1)",
                      },
                    }}
                  >
                    About Me
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                component={motion.div}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(33, 150, 243, 0.3)",
                }}
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(145deg, rgba(26,32,39,0.9) 0%, rgba(10,25,41,0.9) 100%)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ContactMailIcon
                    sx={{
                      fontSize: 40,
                      color: theme.palette.primary.main,
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h5"
                    gutterBottom
                    align="center"
                    color="primary"
                  >
                    Contact
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 2 }}
                  >
                    Get in touch with me for collaborations and opportunities
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => navigate("/contact")}
                    sx={{
                      mt: "auto",
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        borderColor: theme.palette.primary.light,
                        backgroundColor: "rgba(33, 150, 243, 0.1)",
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
