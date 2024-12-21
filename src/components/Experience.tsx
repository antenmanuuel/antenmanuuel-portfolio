const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stony Brook University",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      specialization: "Software Engineering and Full-Stack Development",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management",
        "Web Technologies",
        "Machine Learning"
      ],
      activities: [
        "Computer Science Society member",
        "Participated in various hackathons"
      ]
    }
  ];

  const workExperience = [
    {
      title: "Software Engineering Intern",
      company: "Tech Solutions Inc.",
      period: "Summer 2023",
      description: "Contributed to the development of a web application using React and Node.js. Collaborated with cross-functional teams to enhance user experience and optimize performance."
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      description: "Designed and developed responsive websites for various clients, focusing on user-friendly interfaces and SEO optimization."
    }
  ];

  return { education, workExperience };
};

export default Experience;