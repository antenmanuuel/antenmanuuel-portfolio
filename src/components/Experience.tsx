const Experience = () => {
  const workExperience = [
    {
      title: "Software Engineer Intern",
      company: "Tech Company",
      period: "June 2023 - August 2023",
      description: "Worked on developing and maintaining web applications using React and Node.js. Collaborated with senior developers on various projects."
    },
    {
      title: "Web Development Intern",
      company: "Digital Agency",
      period: "January 2023 - April 2023",
      description: "Assisted in building responsive websites and implementing UI/UX designs. Gained experience with modern web technologies."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stony Brook University",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
    }
  ];

  return { education, workExperience };
};

export default Experience;