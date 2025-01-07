const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stony Brook University",
      gpa: "3.43/4.0",
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
      achievements: [
      ]
    },
      {
      title: "Software Engineer Intern",
      company: "Walgreens",
      period: "June 2024 - August 2024",
      achievements: [
          "Delivered a reconciliation reporting tool prototype using React.js, cutting Tableau license costs by $30,000 annually and enabling the Production Support team to address critical Pharma Reporting issues.",
          "Consolidated data from multiple source systems into a single, precise report view, meeting non-functional requirements and boosting report clarity and generation speed by 25%. This effort also introduced newer technology to the engineering team. ",
          "Crafted intuitive, user-friendly UI mock-ups in Figma, promoting adoption among 50+ team members and encouraging collaboration across cross-functional teams.",
          "Executed regression testing for 3+ micro-services using Postman, ensuring 95% API reliability and enabling secure, accurate data exchange with pharmaceutical partners for metastatic assessments and medication surveys."

      ]
    },
  ];

  return { education, workExperience };
};

export default Experience;