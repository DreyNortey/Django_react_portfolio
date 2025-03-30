import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";
import { Project } from "@shared/types";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "aws", label: "AWS" },
    { id: "azure", label: "Azure" },
    { id: "devops", label: "DevOps" },
    { id: "automation", label: "Automation" },
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.categories.includes(activeFilter));
    
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Showcasing my hands-on experience with cloud technologies and infrastructure automation
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-md bg-zinc-800 border transition-colors duration-300 text-sm ${
                activeFilter === category.id 
                  ? "border-primary text-white" 
                  : "border-gray-700 text-gray-300 hover:border-primary hover:text-white"
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white border border-gray-700 rounded-md transition-colors duration-300"
          >
            <FaGithub className="mr-2" /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div variants={item} className="h-full">
      <Card className="overflow-hidden border-gray-800 hover:border-primary transition-all duration-300 h-full bg-zinc-800">
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.featured && (
            <div className="absolute top-3 right-3 bg-zinc-900 px-2 py-1 rounded text-xs font-medium">
              Featured
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className={`bg-${tag.color}-900 bg-opacity-30 text-${tag.color}-400 border-${tag.color}-800`}>
                {tag.name}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <a 
              href={project.githubUrl} 
              className="text-primary hover:text-blue-400 font-medium flex items-center transition-colors duration-300"
            >
              <FaGithub className="mr-2" /> GitHub Repo
            </a>
            <a 
              href={project.demoUrl} 
              className="text-white bg-primary hover:bg-blue-600 px-3 py-1 rounded text-sm transition-colors duration-300"
            >
              {project.demoUrl.includes('doc') ? 'Documentation' : 'Live Demo'}
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Projects;
