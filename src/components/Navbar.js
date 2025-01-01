import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  Container,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../logo.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();
  const trigger = useScrollTrigger();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Projects", path: "/projects" },
    { text: "Timeline", path: "/timeline" },
    { text: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (mobileOpen) handleDrawerToggle();
  };

  const drawer = (
    <List
      component={motion.div}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          onClick={() => handleNavigation(item.path)}
          sx={{
            my: 1,
            borderRadius: 2,
            backgroundColor:
              location.pathname === item.path
                ? "rgba(33, 150, 243, 0.1)"
                : "transparent",
            "&:hover": {
              backgroundColor: "rgba(33, 150, 243, 0.05)",
            },
          }}
        >
          <ListItemText
            primary={item.text}
            sx={{
              color:
                location.pathname === item.path
                  ? theme.palette.primary.main
                  : "inherit",
              "& .MuiTypography-root": {
                fontWeight: location.pathname === item.path ? 600 : 400,
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={visible}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: "rgba(26, 32, 39, 0.8)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    mr: 2,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <img
                  src={logo}
                  alt="VA Logo"
                  style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "12px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    background: "linear-gradient(45deg, #2196f3, #f50057)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Volkan Aydingul
                </Typography>
              </Box>

              {!isMobile && (
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {menuItems.map((item, index) => (
                    <Button
                      key={item.text}
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavigation(item.path)}
                      sx={{
                        mx: 1,
                        px: 2,
                        py: 1,
                        color: "white",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "2px",
                          background:
                            "linear-gradient(45deg, #2196f3, #f50057)",
                          transform:
                            location.pathname === item.path
                              ? "scaleX(1)"
                              : "scaleX(0)",
                          transition: "transform 0.3s ease-in-out",
                          transformOrigin: "left",
                        },
                        "&:hover::before": {
                          transform: "scaleX(1)",
                        },
                        fontWeight: location.pathname === item.path ? 600 : 400,
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 240,
            backgroundColor: "rgba(26, 32, 39, 0.95)",
            backdropFilter: "blur(10px)",
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <Toolbar />
        {drawer}
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Navbar;
