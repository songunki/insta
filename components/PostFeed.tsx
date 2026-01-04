
import React, { useEffect, useState } from 'react';
import { Post } from '../types';
import { generateInstaCaption } from '../services/geminiService';

interface PostFeedProps {
  posts: Post[];
  startPostId: string | null;
  userAvatar: string;
  userName: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, startPostId, userAvatar, userName }) => {
  const [captions, setCaptions] = useState<Record<string, string>>({});

  useEffect(() => {
    // Generate AI captions for all posts to simulate Instagram vibe
    const fetchCaptions = async () => {
      const newCaptions: Record<string, string> = {};
      for (const post of posts) {
        newCaptions[post.id] = await generateInstaCaption(post.title, post.summary);
      }
      setCaptions(newCaptions);
    };

    fetchCaptions();
  }, [posts]);

  // If a post was clicked in grid, show it first
  const sortedPosts = startPostId 
    ? [posts.find(p => p.id === startPostId)!, ...posts.filter(p => p.id !== startPostId)]
    : posts;

  return (
    <div className="flex flex-col">
      {sortedPosts.map((post) => (
        <article key={post.id} className="border-b border-gray-100 last:border-0 pb-4">
          {/* Post Header */}
          <div className="flex items-center justify-between px-3 py-3">
            <div className="flex items-center gap-2">
              <img src={userAvatar} className="w-8 h-8 rounded-full border border-gray-200" alt="Author" />
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight">{userName}</span>
                <span className="text-xs text-gray-500">{post.category}</span>
              </div>
            </div>
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>

          {/* Post Image */}
          <div className="aspect-square w-full bg-gray-100">
            <img src={post.thumbnail} className="w-full h-full object-cover" alt={post.title} />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between px-3 pt-3">
            <div className="flex items-center gap-4">
              <button className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <button className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <button className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>

          {/* Likes & Caption */}
          <div className="px-3 pt-2">
            <p className="text-sm font-bold">좋아요 {post.likesCount.toLocaleString()}개</p>
            <div className="mt-1">
              <span className="text-sm font-bold mr-2">{userName}</span>
              <span className="text-sm text-gray-900 whitespace-pre-wrap">
                {captions[post.id] || "로딩 중..."}
              </span>
            </div>
            <button className="mt-1 text-sm text-gray-500">
              댓글 {post.commentsCount}개 모두 보기
            </button>
            <p className="mt-1 text-[10px] text-gray-400 uppercase tracking-tight">
              {post.date}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostFeed;
