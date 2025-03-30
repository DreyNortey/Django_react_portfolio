import { motion } from "framer-motion";
import { SKILL_CATEGORIES, TOOLS, getIconComponent } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
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
    <section id="skills" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">A comprehensive overview of my technical skills and tools</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {SKILL_CATEGORIES.map((category, index) => {
            const IconComponent = getIconComponent(category.icon);
            
            return (
              <motion.div key={index} variants={item}>
                <Card className="bg-zinc-900 border-gray-800 hover:border-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 bg-opacity-20 text-primary mb-4">
                        <IconComponent className="text-3xl" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = getIconComponent(skill.icon);
                        
                        return (
                          <li key={skillIndex} className="flex items-center">
                            <SkillIcon 
                              className={`mr-2 w-8 text-center text-xl ${skill.iconColor ? `text-[${skill.iconColor}]` : 'text-gray-400'}`}
                            />
                            <span>{skill.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {TOOLS.map((tool, index) => {
              const ToolIcon = getIconComponent(tool.icon);
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center rounded-lg bg-zinc-900 p-3 border border-gray-800 group-hover:border-primary transition-all duration-300">
                    <ToolIcon 
                      className={`text-3xl ${tool.iconColor ? `text-[${tool.iconColor}]` : 'text-white'}`}
                    />
                  </div>
                  <p className="text-sm text-gray-400">{tool.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
