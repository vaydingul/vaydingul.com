export const contentConfig = {
  projects: {
    title: "My Projects",
    subtitle: "A collection of my work and contributions",
    items: [
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
	  ]
  },
  timeline: {
    title: "Professional Timeline",
    items: [
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
    ],
  },
  contact: {
    title: "Let's Connect!",
    subtitle:
      "I'm always interested in new opportunities, collaborations, and connecting with fellow researchers and engineers.",
    contactInfo: [
      {
        icon: "EmailIcon",
        label: "Email",
        value: "volkanaydingul@gmail.com",
        description: "Best way to reach me",
      },
      {
        icon: "LocationOnIcon",
        label: "Location",
        value: "Frankfurt am Main, Germany",
        description: "Current location",
      },
      {
        icon: "WorkIcon",
        label: "Work",
        value: "Research Engineer",
        description: "Current position",
      },
      {
        icon: "SchoolIcon",
        label: "Education",
        value: "MSc Computational Science",
        description: "Current academic status",
      },
    ],
    socialLinks: [
      {
        icon: "LinkedInIcon",
        url: "https://www.linkedin.com/in/volkan-ayding%C3%BCl-5a516117a/",
        label: "LinkedIn",
        description: "Connect with me professionally",
      },
      {
        icon: "GitHubIcon",
        url: "https://github.com/vaydingul",
        label: "GitHub",
        description: "Check out my code repositories",
      },
      {
        icon: "TwitterIcon",
        url: "https://twitter.com/vaydingul",
        label: "Twitter",
        description: "Follow me for updates",
      },
      {
        icon: "InstagramIcon",
        url: "https://www.instagram.com/vaydingul/",
        label: "Instagram",
        description: "Follow my personal journey",
      },
    ],
  },
};
