'use client';

import { motion } from 'framer-motion';
import { VideoPlayer } from '@/components/VideoPlayer';

interface Model {
  id: string;
  title: string;
  video: string;
  description?: string;
}

interface ModelShowcaseProps {
  title: string;
  description?: string;
  models: Model[];
  layout?: 'grid' | 'carousel' | 'featured';
}

export function ModelShowcase({
  title,
  description,
  models,
  layout = 'grid',
}: ModelShowcaseProps) {
  if (layout === 'featured' && models.length > 0) {
    const featured = models[0];
    return (
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <VideoPlayer
              src={featured.video}
              title={featured.title}
              className="aspect-video md:aspect-square"
            />
          </div>
          <div className="space-y-6">
            {models.slice(1, 4).map((model, idx) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-4 border border-white/10 bg-white/5 backdrop-blur rounded hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {model.title}
                </p>
                {model.description && (
                  <p className="text-sm text-white/60 mt-1">{model.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'carousel') {
    return (
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-6">
          {models.map((model) => (
            <div
              key={model.id}
              className="flex-shrink-0 w-80 snap-center"
            >
              <VideoPlayer
                src={model.video}
                title={model.title}
                className="aspect-square"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Grid layout (default)
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h2>
        {description && (
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model, idx) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <VideoPlayer
              src={model.video}
              title={model.title}
              className="aspect-video"
            />
            {model.description && (
              <p className="mt-4 text-white/70 text-sm">{model.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
