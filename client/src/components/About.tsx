import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaBriefcase, FaLaptop } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const competencies = [
    { name: "Cloud Services", detail: "AWS, Azure", value: 85 },
    { name: "IT Support", detail: "Networking, Troubleshooting", value: 95 },
    { name: "DevOps", detail: "CI/CD, Automation", value: 75 },
    { name: "Infrastructure as Code", detail: "Terraform, CloudFormation", value: 80 },
    { name: "Scripting & Programming", detail: "Python, Bash, PowerShell", value: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">My journey from IT support to cloud computing and what drives me</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
            <p className="text-gray-300 mb-4">
              With over <span className="text-white font-medium">5 years of experience in IT Support</span>, I've developed a strong foundation in 
              troubleshooting, system administration, and network management. This hands-on experience has given me valuable insights into real-world 
              IT challenges and solutions.
            </p>
            <p className="text-gray-300 mb-4">
              My transition to <span className="text-white font-medium">Cloud Computing</span> began two years ago when I recognized the industry shift 
              toward cloud-based solutions. Since then, I've immersed myself in cloud technologies, earning certifications in 
              <span className="text-white font-medium"> AWS and Azure</span>, while building practical experience through personal projects and professional work.
            </p>
            <p className="text-gray-300 mb-6">
              I'm passionate about <span className="text-white font-medium">automation, infrastructure as code, and cloud architecture</span>. 
              My goal is to leverage my IT support background and cloud expertise to design and implement scalable, resilient, and 
              cost-effective cloud solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold mb-2 text-white">Education</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <FaGraduationCap className="mt-1 mr-2 text-green-500" />
                    <div>
                      <p className="font-medium">BSc in Computer Science</p>
                      <p className="text-sm text-gray-400">University of Technology, 2018</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCertificate className="mt-1 mr-2 text-green-500" />
                    <div>
                      <p className="font-medium">Cloud Computing Specialization</p>
                      <p className="text-sm text-gray-400">Tech Institute, 2021</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-white">Experience</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <FaBriefcase className="mt-1 mr-2 text-green-500" />
                    <div>
                      <p className="font-medium">Cloud Support Engineer</p>
                      <p className="text-sm text-gray-400">TechCorp, 2021-Present</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaLaptop className="mt-1 mr-2 text-green-500" />
                    <div>
                      <p className="font-medium">IT Support Specialist</p>
                      <p className="text-sm text-gray-400">Global Solutions, 2018-2021</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <a 
                href="#projects" 
                className="px-5 py-2 bg-transparent hover:bg-zinc-700 text-white border border-gray-600 rounded-md transition-colors duration-300"
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                className="px-5 py-2 bg-transparent hover:bg-zinc-700 text-white border border-gray-600 rounded-md transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:order-2 order-1"
          >
            <div className="rounded-lg overflow-hidden bg-zinc-900 p-6 border border-gray-800 shadow-lg">
              <h3 className="text-xl font-bold mb-4 pb-3 border-b border-gray-700">Core Competencies</h3>
              
              <div className="space-y-4">
                {competencies.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-400">{skill.detail}</span>
                    </div>
                    <Progress value={skill.value} className="h-2 bg-gray-700" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <h4 className="font-bold mb-3 text-white">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-300 border border-gray-700">
                    English (Native)
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-300 border border-gray-700">
                    Spanish (Intermediate)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
