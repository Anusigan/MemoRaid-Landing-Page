import React from 'react';

const posts = [
  {
    title: 'Understanding Memory Loss',
    excerpt: 'A comprehensive guide to different types of amnesia and their effects.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&h=400',
    category: 'Education'
  },
  {
    title: 'Latest Breakthroughs in Memory Recovery',
    excerpt: 'Recent scientific discoveries and their implications for treatment.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&h=400',
    category: 'Research'
  },
  {
    title: 'Success Stories: Road to Recovery',
    excerpt: 'Inspiring stories from patients who regained their memories.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&h=400',
    category: 'Stories'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest developments in memory rehabilitation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-accent text-sm mb-2">{post.category}</div>
                <h3 className="font-semibold text-xl text-primary mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}