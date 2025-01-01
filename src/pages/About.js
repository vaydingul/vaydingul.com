import React from 'react';
import { Container, Typography, Box, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}
      >
        <Typography
          component={motion.h1}
          variants={itemVariants}
          variant="h2"
          sx={{
            mb: 4,
            background: 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </Typography>

        <Paper
          component={motion.div}
          variants={itemVariants}
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: 'background.paper',
            borderRadius: 2
          }}
        >
          <Typography variant="body1" paragraph>
            Currently, I am a computer vision researcher working with{' '}
            <Link href="https://mysite.ku.edu.tr/fguney/" target="_blank" rel="noopener">
              Asst. Prof. Fatma Guney
            </Link>{' '}
            in <strong>Autonomous Vision Group (AVG)</strong> and co-supervised by{' '}
            <Link href="https://mysite.ku.edu.tr/baakgun/" target="_blank" rel="noopener">
              Asst. Prof. Baris Akgun
            </Link>
            . I am working on the <strong>model-based policy learning for urban driving</strong>.
          </Typography>

          <Typography variant="body1" paragraph>
            I am especially interested in generating a framework that allows reasoning about the optimal action by predicting the future (i.e., world models).
          </Typography>

          <Typography variant="body1" paragraph>
            Previously, I worked in{' '}
            <Link href="https://rml.ku.edu.tr/" target="_blank" rel="noopener">
              Robotics and Mechatronics Laboratory (RML)
            </Link>{' '}
            with{' '}
            <Link href="http://home.ku.edu.tr/~cbasdogan/" target="_blank" rel="noopener">
              Prof. Dr. Cagatay Basdogan
            </Link>
            . My work in RML mainly focused on the generation of proper signals to convey tactile feeling to high-end consumer electronics with touch screen (i.e.,{' '}
            <Link href="https://robotics.northwestern.edu/research/topics/surface-haptic-technology-development/index.html" target="_blank" rel="noopener">
              surface haptics
            </Link>
            ).
          </Typography>
        </Paper>

        <Paper
          component={motion.div}
          variants={itemVariants}
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: 'background.paper',
            borderRadius: 2
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
            Education
          </Typography>

          <Typography variant="body1" paragraph>
            I took my BSc. degree from{' '}
            <Link href="https://www.metu.edu.tr/" target="_blank" rel="noopener">
              Middle East Technical University (METU)
            </Link>{' '}
            in{' '}
            <Link href="http://ae.metu.edu.tr/" target="_blank" rel="noopener">
              Aerospace Engineering
            </Link>
            . I specialized in control, dynamic modelling, and simulation during my undergraduate studies.
          </Typography>

          <Typography variant="body1" paragraph>
            Currently, I am conducting my graduate studies in <strong>Computational Science and Engineering</strong> department at{' '}
            <Link href="https://www.ku.edu.tr/" target="_blank" rel="noopener">
              Koc University
            </Link>
            . In Koc University, I am also awarded with{' '}
            <Link href="https://ai.ku.edu.tr/" target="_blank" rel="noopener">
              Koc University Is Bank (KUIS) Artificial Intelligence Fellowship
            </Link>
            .
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About; 