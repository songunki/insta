
import React, { useState, useEffect } from 'react';
import { Post, UserProfile, ViewMode } from './types';
import Header from './components/Header';
import Profile from './components/Profile';
import PostGrid from './components/PostGrid';
import PostFeed from './components/PostFeed';
import BottomNav from './components/BottomNav';

const MOCK_PROFILE: UserProfile = {
  name: "쭈미로운 생활",
  handle: "jju_mi_life",
  bio: "티스토리 스킨 개발자 | 한눈에 스킨 v1.0\n디자인과 성능을 모두 잡는 감성 블로그 ✨",
  avatar: "https://picsum.photos/id/1027/200/200",
  postsCount: 18,
  followers: "32,114",
  following: "2"
};

const MOCK_POSTS: Post[] = [
  { id: '1', title: '인스타그램 감성 스킨 출시!', summary: '드디어 오랫동안 준비한 인스타 감성 스킨을 출시했습니다.', thumbnail: 'https://picsum.photos/id/10/600/600', category: '스킨소식', date: '2024.03.20', commentsCount: 12, likesCount: 450 },
  { id: '2', title: '제주도 카페 투어 기록', summary: '바다가 한눈에 보이는 조용한 카페를 다녀왔어요.', thumbnail: 'https://picsum.photos/id/11/600/600', category: '일상', date: '2024.03.18', commentsCount: 8, likesCount: 230 },
  { id: '3', title: '오늘의 데스크테리어', summary: '새로 장만한 모니터 스탠드와 키보드가 너무 마음에 들어요.', thumbnail: 'https://picsum.photos/id/12/600/600', category: '리뷰', date: '2024.03.15', commentsCount: 5, likesCount: 180 },
  { id: '4', title: '미니멀리스트 라이프', summary: '물건을 비우니 삶이 채워지는 경험을 하고 있습니다.', thumbnail: 'https://picsum.photos/id/13/600/600', category: '생각', date: '2024.03.12', commentsCount: 15, likesCount: 310 },
  { id: '5', title: '봄맞이 코디 추천', summary: '가벼운 트렌치 코트 하나로 완성하는 봄 데일리룩.', thumbnail: 'https://picsum.photos/id/14/600/600', category: '패션', date: '2024.03.10', commentsCount: 20, likesCount: 520 },
  { id: '6', title: '홈카페 레시피: 딸기 라떼', summary: '집에서도 카페 부럽지 않은 달콤한 딸기 라떼 만들기.', thumbnail: 'https://picsum.photos/id/15/600/600', category: '요리', date: '2024.03.08', commentsCount: 7, likesCount: 140 },
  { id: '7', title: '새벽 독서의 시간', summary: '모두가 잠든 시간, 책과 나만이 존재하는 소중한 순간.', thumbnail: 'https://picsum.photos/id/16/600/600', category: '독서', date: '2024.03.05', commentsCount: 11, likesCount: 270 },
  { id: '8', title: '노을 지는 한강 산책', summary: '붉게 물든 하늘을 보며 하루를 마무리합니다.', thumbnail: 'https://picsum.photos/id/17/600/600', category: '일상', date: '2024.03.01', commentsCount: 4, likesCount: 390 },
  { id: '9', title: '개발자의 휴일', summary: '코드 대신 휴식을 즐기는 주말의 여유.', thumbnail: 'https://picsum.photos/id/18/600/600', category: 'IT', date: '2024.02.28', commentsCount: 9, likesCount: 165 },
];

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handlePostClick = (postId: string) => {
    setSelectedPostId(postId);
    setViewMode(ViewMode.FEED);
  };

  const handleBackToGrid = () => {
    setSelectedPostId(null);
    setViewMode(ViewMode.GRID);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-[480px] mx-auto bg-white border-x border-gray-200 shadow-xl relative pb-16">
      <Header 
        blogTitle={MOCK_PROFILE.handle} 
        onBack={viewMode === ViewMode.FEED ? handleBackToGrid : undefined} 
      />
      
      <main className="flex-1">
        {viewMode === ViewMode.GRID ? (
          <>
            <Profile user={MOCK_PROFILE} />
            <div className="border-t border-gray-100 mt-4">
              <div className="flex justify-around py-3">
                <button 
                  onClick={() => setViewMode(ViewMode.GRID)}
                  className={`flex-1 flex justify-center ${viewMode === ViewMode.GRID ? 'text-blue-500' : 'text-gray-400'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setViewMode(ViewMode.FEED)}
                  className={`flex-1 flex justify-center ${viewMode === ViewMode.FEED ? 'text-blue-500' : 'text-gray-400'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <PostGrid posts={MOCK_POSTS} onPostClick={handlePostClick} />
            </div>
          </>
        ) : (
          <PostFeed posts={MOCK_POSTS} startPostId={selectedPostId} userAvatar={MOCK_PROFILE.avatar} userName={MOCK_PROFILE.handle} />
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default App;
