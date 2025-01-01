export const themeConfig = {
  palette: {
    primary: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
    },
    secondary: {
      main: "#f50057",
      light: "#ff4081",
      dark: "#c51162",
    },
    background: {
      default: "#0a1929",
      paper: "#1a2027",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: {
        xs: "3rem",
        md: "4.5rem",
      },
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: {
        xs: "2.5rem",
        md: "3.5rem",
      },
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
    },
  },
  gradients: {
    primary: "linear-gradient(45deg, #2196f3 30%, #f50057 90%)",
    secondary: "linear-gradient(45deg, #f50057 30%, #2196f3 90%)",
    text: "linear-gradient(45deg, #2196f3, #f50057)",
  },
  spacing: {
    section: {
      xs: 4,
      sm: 6,
      md: 8,
      lg: 10,
    },
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
    button: "50px",
  },
  shadows: {
    button: "0 8px 16px rgba(33, 150, 243, 0.3)",
    buttonHover: "0 12px 24px rgba(33, 150, 243, 0.4)",
    card: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    duration: {
      short: 0.2,
      medium: 0.3,
      long: 0.5,
    },
  },
};
