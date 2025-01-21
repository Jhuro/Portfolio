"use client";

import { useState } from 'react';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
const projects = [
  {
    title: 'SIGMETUM-A',
    image: 'https://drive.google.com/uc?id=1UffWNYYB7Tz0eufDdBE6FAECmJE2LB7s',
    description: 'Aplicación web interactiva para la visualización de datos relacionados a la vegetación de Andalucía; hace parte de un proyecto liderado por la Universidad de Málaga.',
    tools: 'Express, React, Node.js, AWS',
    github: 'https://github.com/usuario/proyecto1',
    liveLink: 'https://www.sigmetum-a.org',
  }
];

export default function ProjectsCarousel() {
  const t = useTranslations('Projects');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % t.raw('items').length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? t.raw('items').length - 1 : prevIndex - 1
    );
  };

  const currentProject = t.raw('items')[currentIndex];

  return (
    <section id="projects" className="p-8">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold mb-6">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex items-center justify-center">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              layout="responsive"
              width={16}
              height={9}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="bg-console-bg p-4 rounded-lg font-mono shadow-lg overflow-auto h-64">
            <pre className="whitespace-pre-wrap break-words">
              <code>
                <span className="text-accent">{"{"}</span>
                <br />
                <span className="pl-4 block">
                  <span className="text-console-attribute">{t('titleLabel')}</span>:&nbsp;
                  <span className="text-console-value">&quot;{currentProject.title}&quot;</span>,
                </span>
                <span className="pl-4 block">
                  <span className="text-console-attribute">{t('descriptionLabel')}</span>:&nbsp;
                  <span className="text-console-value">&quot;{currentProject.description}&quot;</span>,
                </span>
                <span className="pl-4 block">
                  <span className="text-console-attribute">{t('technologiesLabel')}</span>:&nbsp;
                  <span className="text-console-value">&quot;{currentProject.tools}&quot;</span>
                </span>
                <span className="text-accent">{"}"}</span>
              </code>
            </pre>
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-center space-x-4 mt-4">
            <button onClick={handlePrev} className="material-icons">
              arrow_back_ios
            </button>
            <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.45c.6.11.82-.26.82-.58v-2.23c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.82 2.8 1.29 3.48.99.11-.78.42-1.29.76-1.59-2.67-.31-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.54.11-3.2 0 0 1-.32 3.29 1.22a11.44 11.44 0 016 0c2.29-1.54 3.29-1.22 3.29-1.22.64 1.66.23 2.9.11 3.2.76.84 1.23 1.91 1.23 3.22 0 4.61-2.82 5.61-5.5 5.93.44.38.83 1.11.83 2.24v3.32c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href={currentProject.liveLink} target="_blank" rel="noopener noreferrer">
              <span className="material-icons">open_in_new</span>
            </a>
            <button onClick={handleNext} className="material-icons">
              arrow_forward_ios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}