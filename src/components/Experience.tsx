const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stony Brook University",
      period: "Spring 2022 - May 2026",
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
        "Built a BERT Attention Visualizer using React.js, D3.js, Tailwind CSS, and FastAPI, enabling 500+ researchers to analyze token interactions in Hugging Face’s BERT Base Uncased and RoBERTa models",
        "Implemented attention visualization with Scaled Dot-Product Attention and Multi-Head Attention, integrating causal and padding masking to reveal token dependencies and reduce inference latency by 20%",
        "Optimized API response handling and caching, cutting backend processing time by 30% and ensuring a smoother user experience with 99% uptime through automated CI/CD on Vercel and Hugging Face Spaces"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Walgreens",
      period: "June 2024 - August 2024",
      achievements: [
       "Developed a reconciliation reporting tool using React.js, Tailwind CSS, and Spring Boot, replacing Tableau and cutting $30K in licensing costs while streamlining Pharma reporting.",
       "Created a unified data view by consolidating IC+ and Promote Oracle databases, integrating 10M+ prescriptions and 200M+ drug transactions annually, enabling seamless access and improving reporting clarity.",
        "Designed user-friendly UI mockups in Figma, increasing adoption by 25% among teams unfamiliar with React, improving clarity and usability.",
        "Tested Spring Boot microservices, executing 10+ regression tests in Postman and verifying logs in Microsoft Azure, ensuring accurate data exchange for 200M+ prescriptions processed annually."

      ]
    },
    {
      title: "Information Technology Support Specialist",
      company: "Stony Brook University",
      period: "November 2022 - May 2024",
      achievements: [
        "Managed 150+ computers, printers, and servers across 7 buildings, sustaining 99% system uptime",
        "Resolved 20+ hardware/software issues for faculty, minimizing downtime and boosting productivity.",
        "Installed 25+ computers, modernizing lab spaces and ensuring seamless departmental integration"
      ]
    }
  ];

  return { education, workExperience };
};

export default Experience;





