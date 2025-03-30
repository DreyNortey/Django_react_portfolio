import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CERTIFICATIONS, getIconComponent } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Certifications = () => {
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
    <section id="certifications" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">Professional certifications validating my expertise in cloud technologies</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {CERTIFICATIONS.map((cert) => {
            const IconComponent = getIconComponent(cert.icon);
            
            return (
              <motion.div key={cert.id} variants={item}>
                <Card className="bg-zinc-800 border-gray-800 hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 flex-shrink-0 mr-4 flex items-center justify-center">
                        <IconComponent className={`text-4xl ${cert.iconColor ? `text-[${cert.iconColor}]` : 'text-gray-400'}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{cert.title}</h3>
                        <p className="text-gray-400 text-sm">{cert.level}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-400 text-sm">Issued: {cert.issueDate}</span>
                      <a 
                        href={cert.verifyUrl} 
                        className="text-primary hover:text-blue-400 text-sm flex items-center"
                      >
                        Verify <ExternalLink className="ml-1" size={14} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white border border-gray-700 rounded-md transition-colors duration-300"
          >
            View All Certifications on LinkedIn <FaLinkedin className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
