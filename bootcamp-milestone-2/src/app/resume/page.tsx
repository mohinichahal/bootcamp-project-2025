import React from "react";

export default function Resume() {
  return (
    <>
      <main className="resume" style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        {/* Education Section */}
        <section>
          <h2>Education</h2>
          <p>California Polytechnic State University, San Luis Obispo — B.S. Computer Science</p>
          <p>American High School | Graduated 2025, Fremont, CA</p>
            <p>Grade: 4.0</p>
            <p>
            Coursework: AP Computer Science Principles, AP Computer Science A, AP Calculus, AP Physics 1 & C
            </p>
            <p>Programming Languages: HTML, Java, Python</p>
        </section>

        {/* Experience Section */}
        <section>
          <h2>Experience</h2>
          <p>
            <strong>Published Research Paper: “Artificial Intelligence and Cancer”</strong> — Author,
            Curieux Academic Journal, February 2024
            <br />
            Explored AI applications in oncology, personalized treatment plans, and ethical considerations.
          </p>
          <p>
            <strong>Berkeley Pre-College Computer Science Academy</strong> — Student Participant, June 18–30, 2023
            <br />
            Completed 45-hour/week program covering algorithms, programming, and project development.
          </p>
          <p>
            <strong>Inspirit AI Criminal Justice Project</strong> — Student Participant, July 4–20, 2023
            <br />
            Developed a ML model predicting criminal recidivism using Java, Python, HTML, and NLP.
          </p>
          <p>
            <strong>Inspirit AI SEO and Blogging Internship</strong> — Intern, Nov 2023–Jan 2024
            <br />
            Authored 6 AI-focused blog posts, optimized for SEO, analyzed performance metrics.
          </p>
          <p>
            <strong>USC Data Science Course</strong> — Student, June–August 2024
            <br />
            Hands-on experience with Python, data cleaning, and predictive modeling.
          </p>
          <p>
            <strong>Destination Imagination Team Competition</strong> — Participant, Sept–Dec 2023
            <br />
            Created a video on pollution, secured 2nd place internationally.
          </p>
        </section>

        {/* Community Involvement Section */}
        <section>
          <h2>Community Involvement</h2>
          <p>
            <strong>GENUp</strong> — AHS Student Ambassador & CMO, Aug 2023–Present
            <br />
            Led a team of 8 students and 250+ district-wide voter drives, registering 3,500 students.
          </p>
          <p>
            <strong>Find My Mentor</strong> — Co-Founder, Jan 2024–Present
            <br />
            Interactive website connecting students with mentors across 3 high schools.
          </p>
          <p>
            <strong>Madhu Bhasha Kendra</strong> — Teaching Assistant, Oct 2023–Apr 2024
            <br />
            Supported Hindi instruction for 30+ students.
          </p>
          <p>
            <strong>Indian Student Association Club</strong> — President (2024–25), Treasurer (2023–24)
            <br />
            Planned fundraisers, Garba Night, led weekly meetings.
          </p>
          <p>
            <strong>Heroes of Tomorrow</strong> — Fundraising Commissioner, Aug 2023–Jan 2024
            <br />
            Raised $200+ for underprivileged girls’ book project.
          </p>
          <p>
            <strong>Link Crew</strong> — Member, Aug 2024
            <br />
            Led freshmen groups through orientation and MAZE day.
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h2>Skills</h2>
          <p><strong>Programming Languages:</strong> HTML, Java, Python</p>
          <p><strong>Web Development:</strong> HTML, CSS, JavaScript</p>
          <p><strong>Data Analysis & AI:</strong> Python, Machine Learning</p>
          <p><strong>Tools & Software:</strong> Git, VS Code, Excel, Google Workspace</p>
          <p><strong>Soft Skills:</strong> Teamwork, Leadership, Communication, Problem Solving</p>
        </section>

        {/* Awards & Honors */}
        <section>
          <h2>Awards & Honors</h2>
          <p><em>Certificate of Recognition:</em> GenerationUp Fremont — pre-registered 3,500 students.</p>
          <p><em>Seal of Biliteracy</em> — Completed four years of Hindi study.</p>
          <p><em>AP Scholar with Distinction</em> — Average score ≥ 3.5 on all AP exams, with 3+ on five or more exams.</p>
        </section>
      </main>

      <footer className="footer">
        © 2025 mohini's website | All Rights Reserved
      </footer>
    </>
  );
}
