# vaydingul.com

A modern React-based personal website built with Material-UI and Framer Motion.

## Key Features

- **Easy Content Management**: Centralized configuration system for all content
- Modern UI components with Material-UI
- Smooth animations powered by Framer Motion
- Responsive design
- Client-side routing

## Personalization

The website uses a centralized configuration system that makes it easy to customize content without touching the components. All content is managed through configuration files in the `src/config` directory:

### Content Configuration (`src/config/content.js`)

```javascript
export const contentConfig = {
  projects: {
    title: "My Projects",
    subtitle: "A collection of my work",
    items: [
      {
        title: "Project Name",
        subtitle: "Project Subtitle",
        description: "Project Description",
        image: "projects/image.jpg",
        links: [
          { url: "https://github.com/...", label: "GitHub" }
        ],
        tags: ["Tag1", "Tag2"]
      }
      // Add more projects...
    ]
  },
  timeline: {
    title: "Professional Timeline",
    items: [
      {
        title: "Position",
        date: "Date Range",
        description: "Description",
        image: "timeline/image.jpg"
      }
      // Add more timeline items...
    ]
  },
  contact: {
    title: "Let's Connect",
    subtitle: "Your contact subtitle",
    contactInfo: [
      {
        icon: "EmailIcon",
        label: "Email",
        value: "your.email@example.com",
        description: "Best way to reach me"
      }
      // Add more contact info...
    ],
    socialLinks: [
      {
        icon: "LinkedInIcon",
        url: "https://linkedin.com/in/...",
        label: "LinkedIn",
        description: "Connect professionally"
      }
      // Add more social links...
    ]
  }
}
```

To personalize the website:

1. Update `src/config/content.js` with your information
2. Replace images in the `public` directory
3. Customize theme colors in `src/config/theme.js` (if needed)

## Tech Stack

- React 19
- Material-UI (MUI) v6
- Framer Motion
- React Router DOM v7

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/vaydingul.com.git
cd vaydingul.com
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm start` - Runs the development server
- `npm test` - Runs the test suite
- `npm run build` - Creates a production build
- `npm run eject` - Ejects from Create React App (one-way operation)

## Development

This project follows React best practices and modern development patterns. The codebase is structured for maintainability and scalability.

### Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── config/        # Configuration files
  │   ├── content.js # Content configuration
  │   └── theme.js   # Theme configuration
  ├── pages/         # Page components
  └── App.js         # Main application component
```

## License

This project is private and all rights are reserved.

## Contact

Volkan Aydingul - [volkanaydingul@gmail.com]
