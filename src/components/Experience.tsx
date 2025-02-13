const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stony Brook University",
      period: "Spring 2022 - May 2025",
      specialization: "Artificial Intelligence and Data Science",
      coursework: [
        "System Fundamentals I",
        "System Fundamentals II",
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Machine Learning",
        "Analysis of Algorithms",
        "Software Engineering",
        "Computer Networks",
        "Scripting Languages",
        "Intro to Data Science"
      ],
      activities: [
        "Stony Brook Computing Society - Member",
        "Artificial Intelligence Club - Member",
      ]
    }
  ];

  const workExperience = [
    {
      title: "Machine Learning Researcher",
      company: "Stony Brook University",
      period: "January 2025 - Present",
      achievements: []
    },
    {
      title: "Software Engineer Intern",
      company: "Walgreens",
      period: "June 2024 - August 2024",
      achievements: [
        "Developed a reconciliation tool with React.js, Tailwind CSS, and Spring Boot, saving $30K in license fees and streamlining Pharma reporting.",
        "Consolidated data from multiple sources into a single view, boosting clarity and adoption through Figma-driven UI design.",
        "Executed 10+ micro-service regression tests in Postman, verifying logs in Microsoft Azure to ensure reliable data exchange with major Pharma partners."
      ]
    },
    {
      title: "Information Technology Support Specialist",
      company: "Stony Brook University",
      period: "November 2022 - May 2024",
      achievements: [
        "Managed 150+ computers, printers, and servers across 7 buildings, sustaining 99% system uptime",
        "Resolved 20+ hardware/software issues for faculty, minimizing downtime and boosting productivity.",
        "• Installed 25+ computers, modernizing lab spaces and ensuring seamless departmental integration"
      ]
    }
  ];

  return { education, workExperience };
};

export default Experience;
