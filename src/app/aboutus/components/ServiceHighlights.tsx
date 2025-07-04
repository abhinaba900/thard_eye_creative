﻿"use client";
import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ServiceHighlights() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const stages = [
    {
      id: "01",
      image: "/assets/service-highlite-image-1.png",
      name: "Discover & Plan",
      description:
        "We analyze your needs and create a strategic roadmap for your digital product.",
    },
    {
      id: "02",
      image: "/assets/service-highlite-image-1.png",
      name: "Design & Develop",
      description:
        "From concept to execution, we craft thoughtful designs and build seamless digital experiences tailored to your vision.",
    },
    {
      id: "03",
      image: "/assets/service-heighlite-image-2.png",
      name: "Launch & Elevate",
      description:
        "We deliver refined solutions and support you through a smooth launch, ensuring your brand makes a lasting impact and stays ahead.",
    },
    {
      id: "04",
      image: "/assets/service-heighlite-image-2.png",
      name: "Optimize & Scale",
      description:
        "Post-launch, we help refine and scale your solution to maximize performance and growth.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: 100,
      transition: {
        delay: (3 - i) * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <div 
      className="service-highlights" 
      ref={ref}
      style={{
        marginBottom: "8.75rem",
        maxWidth: "1260px",
        margin: "0 auto",
        padding: "0 20px",
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <div
        className="workflow-stages-grid-container"
        style={{
          position: "relative",
          top: 0,
          left: 0,
          transform: "translate(0,0)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          width: "100%",
        }}
      >
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            className="gradient-border"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            style={{
              padding: "20px",
              borderRadius: "21px",
            }}
          >
            <Image
              src={stage.image}
              alt="Stage Icon"
              width={24}
              height={24}
              className="workflow-stage-icon"
            />
            <h3 className="workflow-stage-title">{stage.name}</h3>
            <p className="workflow-stage-description">{stage.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServiceHighlights;