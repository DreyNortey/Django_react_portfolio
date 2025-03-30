import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const Blog = () => {
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
    <section id="blog" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Blog & Insights</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">Sharing my knowledge, experiences, and thoughts on cloud computing and IT</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {BLOG_POSTS.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Card className="bg-zinc-900 overflow-hidden border-gray-800 hover:border-primary transition-all duration-300 h-full flex flex-col">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="mx-2 text-gray-600">•</span>
                    <span className="text-xs text-primary">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <a 
                    href={post.url} 
                    className="text-primary hover:text-blue-400 font-medium flex items-center mt-auto"
                  >
                    Read More <ArrowRight className="ml-2" size={16} />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-zinc-900 hover:bg-zinc-700 text-white border border-gray-700 rounded-md transition-colors duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
