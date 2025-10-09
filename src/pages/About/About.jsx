import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';

const About = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6 }
        }
    };

    // Journey timeline data
    const journeyData = [
        {
            year: '2018',
            title: 'Founding Vision',
            description: 'OneHertzLabs was founded with a mission to democratize access to space technology and bring satellite capabilities to organizations of all sizes.'
        },
        {
            year: '2019',
            title: 'First Prototype',
            description: 'Developed our first SensArray™ prototype and secured initial funding from venture capital partners specializing in aerospace technology.'
        },
        {
            year: '2020',
            title: 'Space Certification',
            description: 'Achieved radiation-hardened certification and completed rigorous testing for space deployment of our sensor technology.'
        },
        {
            year: '2022',
            title: 'First Orbital Test',
            description: 'Successfully deployed our technology on a partner satellite mission, validating performance in low Earth orbit conditions.'
        },
        {
            year: '2023',
            title: 'Commercial Launch',
            description: 'Released our first commercial product line and established partnerships with leading satellite manufacturers and aerospace companies.'
        },
        {
            year: '2025',
            title: 'Global Expansion',
            description: 'Expanded operations across three continents with a growing team of 50+ engineers and researchers dedicated to pushing the boundaries of space technology.'
        }
    ];

    // Team data
    const teamData = [
        {
            name: 'Dr. Elena Chen',
            role: 'Chief Executive Officer',
            bio: 'Former NASA engineer with 15+ years of experience in satellite systems and space technology development.'
        },
        {
            name: 'Marcus Williams',
            role: 'Chief Technology Officer',
            bio: 'Aerospace engineer specializing in sensor technology and radiation-hardened electronics for extreme environments.'
        },
        {
            name: 'Dr. Amara Patel',
            role: 'Head of R&D',
            bio: 'PhD in Quantum Computing with expertise in developing next-generation sensing capabilities for space applications.'
        },
        {
            name: 'James Rodriguez',
            role: 'Head of Operations',
            bio: 'Former SpaceX operations lead with expertise in scaling aerospace manufacturing and supply chain management.'
        }
    ];

    return (
        <>
            <Header />
            
            {/* Hero Section - Black Background */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <motion.h1 
                        className={styles.heroTitle}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        Pioneering the Future of Space Technology
                    </motion.h1>
                    
                    <motion.p 
                        className={styles.heroTagline}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        OneHertzLabs is dedicated to revolutionizing satellite technology through 
                        innovation, precision engineering, and a passion for exploration.
                    </motion.p>
                    
                    <motion.div 
                        className={styles.missionStatement}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.missionContent}>
                            <h2>Our Mission</h2>
                            <p>
                                We envision a world where satellite technology is accessible to organizations of all sizes, 
                                enabling innovative applications across industries from environmental monitoring to 
                                telecommunications. By developing cutting-edge sensor arrays and satellite components, 
                                we're building the infrastructure for the next generation of space exploration and Earth observation.
                            </p>
                            <p>
                                Our commitment to precision, reliability, and innovation drives everything we do, 
                                from design to deployment. We're not just creating products; we're creating 
                                possibilities for a more connected and informed world.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* Journey Timeline Section - Grey Background */}
            <section className={styles.journeySection}>
                <div className={styles.container}>
                    <motion.h2 
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Journey
                    </motion.h2>
                    
                    <div className={styles.timeline}>
                        {journeyData.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.timelineItem}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineYear}>{item.year}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Team Section - Black Background */}
            <section className={styles.teamSection}>
                <div className={styles.container}>
                    <motion.h2 
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Meet Our Team
                    </motion.h2>
                    
                    <motion.p 
                        className={styles.teamIntro}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Our team comprises leading experts in satellite technology, aerospace engineering, and software development, 
                        all dedicated to pushing the boundaries of what's possible in space.
                    </motion.p>
                    
                    <div className={styles.teamGrid}>
                        {teamData.map((member, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.teamMember}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className={styles.teamMemberInfo}>
                                    <div className={styles.teamMemberInitial}>
                                        {member.name.charAt(0)}
                                    </div>
                                    <h3>{member.name}</h3>
                                    <h4>{member.role}</h4>
                                    <p>{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Core Values Section - Black Background with Blue Gradient */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <motion.h2 
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Core Values
                    </motion.h2>
                    
                    <div className={styles.valuesGrid}>
                        {[
                            {
                                icon: "🚀",
                                title: "Innovation",
                                description: "We constantly push boundaries to develop technologies that were once thought impossible."
                            },
                            {
                                icon: "🔍",
                                title: "Precision",
                                description: "In space, precision is not optional. We maintain the highest standards in every component we create."
                            },
                            {
                                icon: "🌍",
                                title: "Sustainability",
                                description: "We design with Earth's future in mind, creating technologies that help monitor and protect our planet."
                            },
                            {
                                icon: "🤝",
                                title: "Collaboration",
                                description: "We believe the future of space exploration depends on partnership across industries and nations."
                            }
                        ].map((value, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    );
};

export default About;