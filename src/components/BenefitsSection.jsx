import React from 'react';
import '../../src/index.css';
import Students from "../assets/Students.png"
import Parents from "../assets/Parents.png"
import Teachers from "../assets/Teachers.png"
import Schools from "../assets/Schools.png"


const BenefitsSection = () => {
  return (
    <section className="benfits-section">
      <h3>Benefits of DISHA AI</h3>
      <div className="benefit-container">
        {/* Students */}
        <div style={{ display: 'flex' }}>
          <div className="benefit-card">
            <h4>Students</h4>
            <h5>Unleash Your Dreams</h5>
            <p>
              DISHA's AI-Driven Skill Assessment Discover your perfect career fit. Our innovative program bridges the gap
              between passion and profession, empowering students to confidently pursue unconventional, yet fulfilling
              careers that align with their unique strengths.
            </p>
          </div>
          <div className="Students">
            <img src={Students} alt="School Illustration" width="583px" />
          </div>
        </div>

        {/* Parents */}
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <div className="benefit-card">
            <h4>Parents</h4>
            <h5>From Assumption to Insight: Unlock Your Child's Future</h5>
            <p>
              Don't guess your child's career path. Our AI-powered solution delivers data-driven clarity on strengths,
              interests, and ideal careers. Partner with us to explore recommended subjects, activities, and skills, and
              empower your child to achieve their dreams.
            </p>
          </div>
          <div className="Parents">
            <img src={Parents} alt="School Illustration" width="583px" />
          </div>
        </div>

        {/* Teachers */}
        <div style={{ display: 'flex' }}>
          <div className="benefit-card">
            <h4>Teachers</h4>
            <h5>Armed with the knowledge, Nurture students' unique strengths and interests</h5>
            <p>
              The National Education Policy (NEP) prioritizes enhancing teaching quality, positioning teachers as
              catalysts for transformative change. DISHAAI's Skill Assessment Program plays a pivotal role in this
              endeavour. By identifying areas where students require exploration beyond their curriculum and subjects
              needing additional support, our program empowers teachers to tailor instruction, nurture unique strengths,
              and address knowledge gaps. This targeted approach enables teachers to elevate student academic performance,
              ultimately enhancing their own professional growth and reputation within the school community.
            </p>
          </div>
          <div className="Teachers">
            <img src={Teachers} alt="School Illustration" width="583px" />
          </div>
        </div>

        {/* Schools */}
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <div className="benefit-card">
            <h4>Schools</h4>
            <h5>Unlock Student Potential, Unleash <br />School Excellence</h5>
            <p>
              The National Education Policy (NEP) revolutionizes academic
              delivery, empowering schools to leap forward in educational
              excellence by aligning pedagogy with DISHA’s Skill Assessment
              Program.
            </p>
          </div>
          <div className="Schools">
            <img src={Schools} alt="School Illustration" width="583px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
