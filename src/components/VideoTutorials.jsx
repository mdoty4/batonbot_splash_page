import { ScrollReveal } from './ScrollReveal';

export function VideoTutorials() {
  const videos = [
    {
      id: 'liJNWYUat9w',
      title: 'What is Batonbot?',
      description: 'A quick introduction to Batonbot — local AI agents that complete real tasks in the order you choose.',
    },
    {
      id: '4D27meUFiy0',
      title: 'Using Batonbot with Multiple Agents',
      description: 'A hands-on tutorial showing how to chain multiple agents together for a real-world multi-step workflow.',
    },
  ];

  return (
    <section
      id="tutorials"
      className="section"
      aria-labelledby="tutorials-heading"
    >
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <header className="section-header">
            <h2 id="tutorials-heading">See Batonbot in Action</h2>
            <p className="max-w-xl mx-auto">
              Watch how Batonbot agents complete real tasks — from first install to running your first orchestrated workflow.
            </p>
          </header>
        </ScrollReveal>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <ScrollReveal key={video.id} delay={0.15 + index * 0.2}>
              <article className="card overflow-hidden flex flex-col h-full">
                {/* YouTube Embed */}
                <div className="relative w-full pb-[56.25%]" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full rounded-t-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-card-md text-text-primary mb-2">
                    {video.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary flex-1">
                    {video.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}