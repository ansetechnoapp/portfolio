import React from "react";
import Icon from "./Icon";
import { iconPaths } from "../IconPaths";

interface Skill {
    title: string;
    icon: keyof typeof iconPaths;
    items: string[];
}

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
                        Professional Skills
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A collection of technologies and tools I've mastered throughout my journey
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative  backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-purple-500/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="px-6 py-8 relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-gray-700/50 rounded-xl mr-4">
                                        <Icon 
                                            icon={skill.icon} 
                                            color="var(--accent-regular)" 
                                            size="2.5rem" 
                                            gradient 
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-black-100">
                                        {skill.title}
                                    </h3>
                                </div>
                                
                                <ul className="space-y-3">
                                    {skill.items.map((item, idx) => (
                                        <li 
                                            key={idx} 
                                            className="perso flex items-center transition-colors duration-200 group-hover:text-gray-800 dark:group-hover:text-gray-100"
                                        >
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
          .perso {
            color: var(--gray-50);

          }
        `}
            </style>
        </section>
    );
};

const skillsData: Skill[] = [
    {
        title: "Design",
        icon: "pencil-line",
        items: ["Photoshop", "Canva", "Figma"],
    },
    {
        title: "Front-end",
        icon: "code",
        items: ["React Native","Expo", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
        title: "Back-end",
        icon: "terminal-window",
        items: ["PHP (Laravel)","Python","Adonis js","Firebase","supabase"],
    },
    {
        title: "Other",
        icon: "github-logo",
        items: ["Git & GitHub","ubuntu","airtable", "mysql", "postgresql"]
    }, 
];

export default Skills;
