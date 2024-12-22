import React from 'react';
import { Instagram, Heart, MessageCircle, Share2 } from 'lucide-react';

const instagramPosts = [
  {
    caption: 'Transforming lives through innovative memory care. 🧠✨ #MemoryCare #Innovation',
    likes: '2.8k',
    comments: '125',
    timeAgo: '2d',
    tags: ['#MemoryScience', '#Healthcare', '#Innovation'],
    image: '/icons/mr2.jpeg' // Image for the first post
  },
  {
    caption: 'Meet our dedicated team of researchers working to advance cognitive health! 👩‍⚕️👨‍🔬 #Research',
    likes: '3.1k',
    comments: '156',
    timeAgo: '4d',
    tags: ['#ScienceTeam', '#Research', '#BrainHealth'],
    image: '/icons/mr1.jpeg' // Image for the second post
  },
  {
    caption: 'Exciting developments in our labs! Stay tuned for our upcoming breakthroughs 🔬 #Science',
    likes: '2.5k',
    comments: '98',
    timeAgo: '5d',
    tags: ['#Innovation', '#MemoryScience', '#Future'],
    image: '/icons/teampic.jpeg' // Image for the third post
  }
];

export default function InstagramFeed() {
  return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="w-8 h-8 text-[#0d3445]" />
              <h2 className="text-3xl font-semibold text-[#0d3445]">Follow Our Journey</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with our latest updates and breakthroughs on Instagram
            </p>
            <a
                href="#"
                className="inline-flex items-center gap-2 mt-4 text-[#0d3445] font-medium hover:text-[#0d3445]/80 transition-colors"
            >
              @memoraid.app
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {instagramPosts.map((post, index) => (
                <article
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-square w-full bg-gray-100 relative">
                    <img
                        src={post.image} // Dynamically set the image source
                        alt="Instagram post"
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex gap-4 mb-3">
                      <button className="text-gray-700 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="text-gray-700 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button className="text-gray-700 hover:text-green-500 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">{post.likes} likes</div>
                    <p className="text-sm text-gray-600 mb-2">{post.caption}</p>
                    <div className="text-xs text-[#0d3445] space-x-2 mb-2">
                      {post.tags.map((tag, i) => (
                          <span key={i} className="hover:underline cursor-pointer">
                      {tag}
                    </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">
                      {post.timeAgo} ago • {post.comments} comments
                    </div>
                  </div>
                </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d3445] text-white rounded-lg hover:bg-[#0d3445]/90 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>
  );
}
