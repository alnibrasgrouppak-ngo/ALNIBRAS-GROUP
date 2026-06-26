"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import T from "@/components/T";
import { useI18n } from "@/components/I18nContext";

interface Post {
  id: number;
  category: "education" | "finance" | "tech" | "impact";
  categoryLabelKey: string;
  dateKey: string;
  authorKey: string;
  titleKey: string;
  descriptionKey: string;
  img: string;
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { t } = useI18n();

  const categories = [
    { id: "all", labelKey: "blog.catAll" },
    { id: "education", labelKey: "blog.catEducation" },
    { id: "finance", labelKey: "blog.catFinance" },
    { id: "tech", labelKey: "blog.catTech" },
    { id: "impact", labelKey: "blog.catImpact" },
  ];

  const posts: Post[] = [
    {
      id: 1,
      category: "impact",
      categoryLabelKey: "blog.posts.p1.categoryLabel",
      dateKey: "blog.posts.p1.date",
      authorKey: "blog.posts.p1.author",
      titleKey: "blog.posts.p1.title",
      descriptionKey: "blog.posts.p1.description",
      img: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      category: "finance",
      categoryLabelKey: "blog.posts.p2.categoryLabel",
      dateKey: "blog.posts.p2.date",
      authorKey: "blog.posts.p2.author",
      titleKey: "blog.posts.p2.title",
      descriptionKey: "blog.posts.p2.description",
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      category: "tech",
      categoryLabelKey: "blog.posts.p3.categoryLabel",
      dateKey: "blog.posts.p3.date",
      authorKey: "blog.posts.p3.author",
      titleKey: "blog.posts.p3.title",
      descriptionKey: "blog.posts.p3.description",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      category: "education",
      categoryLabelKey: "blog.posts.p4.categoryLabel",
      dateKey: "blog.posts.p4.date",
      authorKey: "blog.posts.p4.author",
      titleKey: "blog.posts.p4.title",
      descriptionKey: "blog.posts.p4.description",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-primary-dark text-text-light">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#F9F8F3] dark:bg-gradient-to-b dark:from-primary-dark dark:via-primary-dark dark:to-[#142B1A] border-b border-neutral-200 dark:border-accent-gold/15 text-neutral-900 dark:text-text-light">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            <T k="blog.heroTitle" />
          </h1>
          <p className="text-base sm:text-xl text-neutral-700 dark:text-text-light/80 max-w-2xl mx-auto font-light leading-relaxed">
            <T k="blog.heroSub" />
          </p>
        </div>
      </section>

      {/* 2. BLOG CONTENT GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1A120B]/30 text-neutral-900 dark:text-text-light min-h-[60vh]">
        <div className="mx-auto max-w-7xl">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group ${
                  activeCategory === cat.id
                    ? "bg-neutral-950 text-white dark:bg-accent-gold dark:text-neutral-950 shadow-md"
                    : "bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 hover:text-neutral-950 dark:text-text-light/80 dark:hover:text-white"
                }`}
              >
                <span>{t(cat.labelKey)}</span>
                <span 
                  className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all duration-300 border ${
                    activeCategory === cat.id
                      ? "text-accent-gold border-accent-gold/30 dark:text-neutral-950 dark:border-neutral-950/20"
                      : "text-neutral-700 border-neutral-300 dark:text-accent-gold/90 dark:border-neutral-600 group-hover:text-accent-gold group-hover:border-accent-gold/30"
                  }`}
                  style={{
                    background: activeCategory === cat.id
                      ? "linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 245, 206, 0.3))"
                      : "linear-gradient(135deg, rgba(17, 17, 17, 0.05), rgba(212, 175, 55, 0.05))"
                  }}
                >
                  {cat.id === "all" ? posts.length : posts.filter((p) => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Posts Dynamic Grid with layout animation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-accent-gold/45 hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-primary-dark/5">
                    <Image
                      src={post.img}
                      alt={t(post.titleKey)}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-accent-gold text-primary-dark text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded shadow-md">
                      {t(post.categoryLabelKey)}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Meta info */}
                      <span className="text-[10px] font-semibold text-neutral-700 dark:text-text-light/75 uppercase tracking-widest mb-2 block">
                        {t(post.dateKey)} • {t("blog.byAuthor")} {t(post.authorKey)}
                      </span>

                      <h2 className="font-heading text-lg font-bold text-neutral-900 dark:text-text-light mb-3 line-clamp-2 group-hover:text-accent-gold transition-colors duration-300">
                        {t(post.titleKey)}
                      </h2>

                      <p className="text-xs text-neutral-700 dark:text-text-light/90 font-light leading-relaxed mb-6 line-clamp-3">
                        {t(post.descriptionKey)}
                      </p>
                    </div>

                    <button className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-900 dark:text-text-light border-b border-accent-gold/40 pb-0.5 hover:border-accent-gold hover:text-accent-gold transition-all duration-300 self-start">
                      <T k="blog.readMore" /> <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
