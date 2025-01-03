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
      title: "Software Engineer Intern",
      company: "Walgreens",
      period: "June 2024 - August 2024",
      achievements: [
        "Developed and delivered a reconciliation reporting tool prototype using React.js, which reduced Tableau license costs by $30,000 annually. This tool enabled the Production Support team to resolve critical Pharma Reporting issues for Walgreens Specialty.",
        "Integrated data from multiple source systems into a single, accurate report view, addressing non-functional requirements and improving report clarity and generation time by 25%. This solution introduced newer technology to the engineering team and enriched data quality.",
        "Executed regression testing for assigned microservices using Postman, validating API reliability and ensuring seamless data sharing with major Pharma companies for metastatic assessments and medication surveys.",

      ]
    },
  ];

  return { education, workExperience };
};

export default Experience;