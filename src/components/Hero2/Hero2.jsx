import React from "react";
import "./Hero2.css";

const courses = [
  {
    title: "Course 1",
    blurb: "Master the fundamentals with hands-on projects and mentorship.",
    cta: "Enroll Now",
    href: "#course-1",
  },
  {
    title: "Course 2",
    blurb: "Go deeper into advanced topics and build portfolio-ready work.",
    cta: "Enroll Now",
    href: "#course-2",
  },
  {
    title: "Course 3",
    blurb: "Job-focused curriculum with interview prep and real case studies.",
    cta: "Enroll Now",
    href: "#course-3",
  },
];

const Hero2 = () => {
  return (
    <section className="hero2" aria-labelledby="courses-heading">
      <div className="hero2__container">
        <header className="hero2__header">
          <h2 id="courses-heading">Our Courses</h2>
          <p className="hero2__sub">
            Practical, outcome-driven programs designed to boost your earning potential.
          </p>
        </header>

        <ul className="courseGrid" role="list">
          {courses.map((course) => (
            <li key={course.title} className="courseCard">
              <div className="courseCard__body">
                <h3 className="courseCard__title">{course.title}</h3>
                <p className="courseCard__blurb">{course.blurb}</p>
              </div>
              <a className="btn btn--primary" href={course.href}>
                {course.cta}
                <span className="chev" aria-hidden="true">›</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Optional bottom band for badges / stats */}
        {/* <div className="hero2__band">
          <p><strong>10k+</strong> learners • <strong>92%</strong> job-ready outcomes</p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero2;