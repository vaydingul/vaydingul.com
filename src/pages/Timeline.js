import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Avatar,
  useTheme,
} from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const timelineData = [
  {
    title: "Codeway Studios",
    date: "October 2023 - Present",
    description:
      "Working as an AI research Engineer at Codeway Studios. Working on audio-visual generative models.",
    image: "timeline/codeway.jpeg",
  },

  {
    title: "Autonomous Vision Group",
    date: "June 2022 - September 2023",
    description:
      "Working as a computer vision researcher at Autonomous Vision Group. Working on the model-based policy learning for urban driving.",
    image: "timeline/vision.jpg",
  },
  {
    title: "KUIS AI Laboratory",
    date: "June 2021 - September 2023",
    description: "Working as an AI researcher at KUIS AI Laboratory.",
    image: "timeline/kuis.jpg",
  },
  {
    title: "Robotics and Mechatronics Laboratory",
    date: "September 2020 - June 2022",
    description:
      "Worked as a research assistant at RML. Worked on the generation of proper signals to convey tactile feeling to high-end consumer electronics with touch screen (i.e., surface haptics).",
    image: "timeline/robot.jpg",
  },
  {
    title: "Koc University",
    date: "September 2020 - September 2023",
    description: "Studying Computational Science and Engineering at KU.",
    image: "timeline/ku.jpg",
  },
  {
    title: "HAVELSAN Inc.",
    date: "March 2020 - September 2020",
    description:
      "Worked as a Candidate Systems Engineer at HAVELSAN Inc. Worked on the development of simulation technologies.",
    image: "timeline/simulation.jpg",
  },
  {
    title: "TUBITAK UZAY",
    date: "August 2019",
    description:
      "Did internship at TUBITAK UZAY. Worked on systems engineering practices applied on the production of a CubeSat.",
    image: "timeline/satellite.jpg",
  },
  {
    title: "TUBITAK SAGE",
    date: "June 2019",
    description:
      "Did internship at TUBITAK SAGE. Worked on flight mechanics, navigational systems and motion planning.",
    image: "timeline/missile.png",
  },
  {
    title: "Middle East Technical University",
    date: "September 2015 - August 2020",
    description: "Studied Aerospace Engineering at METU.",
    image: "timeline/odtu.png",
  },
];

const TimelinePage = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(45deg, #2196f3, #f50057)",
          transformOrigin: "0%",
          scaleX,
          zIndex: 1000,
        }}
      />
      <Container maxWidth="md">
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
            position: "relative",
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
              textAlign: "center",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              textShadow: "0 0 40px rgba(33, 150, 243, 0.3)",
            }}
          >
            Professional Timeline
          </Typography>

          <Timeline position="alternate">
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{
                        fontWeight: 500,
                        background:
                          "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item.date}
                    </Typography>
                  </motion.div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <TimelineDot
                      sx={{
                        background:
                          "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
                        p: 0,
                        overflow: "hidden",
                        boxShadow: "0 0 20px rgba(33, 150, 243, 0.3)",
                      }}
                    >
                      <Avatar
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: 44,
                          height: 44,
                          border: "2px solid transparent",
                          backgroundImage:
                            "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                        }}
                      />
                    </TimelineDot>
                  </motion.div>
                  {index !== timelineData.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(180deg, #2196f3 30%, #f50057 90%)",
                        width: "2px",
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        backgroundColor: "rgba(26, 32, 39, 0.8)",
                        backdropFilter: "blur(10px)",
                        borderRadius: 2,
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.02)",
                          boxShadow: "0 8px 24px rgba(33, 150, 243, 0.2)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </>
  );
};

export default TimelinePage;
