import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <h2 className="heading-md">About Me</h2>

          <div className="body-md space-y-4">
            <p>
              Currently serving as a Volunteer Product Manager for AI at Oakyard,
              where I lead the development of innovative AI-driven solutions.
            </p>

            <p>
              Former Product Owner at Losung360 and Product Engineering Specialist at EY,
              where I gained extensive experience in product development and management.
            </p>

            <p>
              With an entrepreneurial spirit and analytical mindset, I've built impactful 
              products utilizing machine learning, generative AI, and data engineering solutions.
            </p>

            <p>
              My expertise spans across product strategy, AI/ML implementation, and 
              data-driven decision making, always focused on delivering value through 
              innovative technology solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}