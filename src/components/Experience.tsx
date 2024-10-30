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
      institution: "University Name",
      period: "2020 - 2024",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
    },
    {
      degree: "High School Diploma",
      institution: "High School Name",
      period: "2016 - 2020",
      description: "Graduated with honors, Computer Science Club President"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Experience & Education</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Work Experience</h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="text-xl font-semibold text-card-foreground">{job.title}</h4>
                  <p className="text-primary font-medium">{job.company}</p>
                  <p className="text-muted-foreground text-sm">{job.period}</p>
                  <p className="mt-2 text-card-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="text-xl font-semibold text-card-foreground">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.period}</p>
                  <p className="mt-2 text-card-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;