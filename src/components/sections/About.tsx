import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ABOUT, type AboutData } from "../../data/about";

export default function About() {
  const [data, setData] = useState<AboutData[]>([]);

  useEffect(() => {
    try {
      const fetchData = ABOUT;
      setData(fetchData);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  }, []);

  return (
    <motion.section
      className="w-full lg:w-1/2 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold text-(--ascent-primary)">
          {data[0]?.title}
        </h2>
        <motion.p
          className="text-lg text-justify dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {data[0]?.myPath}
        </motion.p>
        <motion.p
          className="text-lg text-justify dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {data[0]?.skillsApproach}
        </motion.p>
        <motion.p
          className="text-lg text-justify dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {data[0]?.interests}
        </motion.p>
      </div>
    </motion.section>
  );
}
