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
      achievements: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to enhance user experience",
        "Implemented performance optimizations resulting in 30% faster load times",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      achievements: [
        "Designed and developed responsive websites for multiple clients",
        "Implemented SEO best practices to improve client site rankings",
        "Managed client relationships and project timelines effectively",
        "Provided ongoing maintenance and support for client websites"
      ]
    }
  ];

  return { education, workExperience };
};

export default Experience;