import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

const videos = [
  {
    id: 'liJNWYUat9w',
    title: 'What is BatonBot?',
    description: 'A quick introduction — chain AI agents into autonomous pipelines and let real work happen while you focus on something else.',
  },
  {
    id: '4D27meUFiy0',
    title: 'BatonBot with Multiple Agents',
    description: 'A hands-on walkthrough of building a real multi-step pipeline using Aider, Cline, and native agents in sequence.',
  },
];

function LazyYouTube({ id, title }) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full rounded-t-xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="absolute inset-0 w-full h-full rounded-t-xl group overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumb}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dim overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-background-primary/20 to-transparent" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-background-primary/80 border border-border-accent/40 backdrop-blur flex items-center justify-center shadow-glow-purple group-hover:scale-110 transition-transform">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <polygon points="7,4 18,11 7,18" fill="currentColor" className="text-accent-light" />
          </svg>
        </span>
      </div>
    </button>
  );
}

export function VideoTutorials() {
  return (
    <section
      id="tutorials"
      className="section"
      aria-labelledby="tutorials-heading"
    >
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <header className="section-header">
            <h2 id="tutorials-heading">See BatonBot in action.</h2>
            <p className="max-w-xl mx-auto">
              From first install to chaining multiple agents — watch BatonBot
              run real, end-to-end workflows.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <ScrollReveal key={video.id} delay={0.15 + index * 0.15}>
              <article className="card overflow-hidden flex flex-col h-full">
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <LazyYouTube id={video.id} title={video.title} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-card-md text-text-primary mb-2">{video.title}</h3>
                  <p className="text-body-sm text-text-secondary flex-1">{video.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
