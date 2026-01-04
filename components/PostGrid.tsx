
import React from 'react';
import { Post } from '../types';

interface PostGridProps {
  posts: Post[];
  onPostClick: (id: string) => void;
}

const PostGrid: React.FC<PostGridProps> = ({ posts, onPostClick }) => {
  return (
    <div className="grid grid-cols-3 gap-0.5">
      {posts.map((post) => (
        <button 
          key={post.id} 
          onClick={() => onPostClick(post.id)}
          className="aspect-square w-full relative group overflow-hidden bg-gray-200"
        >
          <img 
            src={post.thumbnail} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          {post.commentsCount > 10 && (
            <div className="absolute top-2 right-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default PostGrid;
