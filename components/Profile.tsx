
import React from 'react';
import { UserProfile } from '../types';

interface ProfileProps {
  user: UserProfile;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="px-5 pt-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-2 border-pink-500 p-0.5">
            <img 
              src={user.avatar} 
              alt="Avatar" 
              className="w-full h-full rounded-full object-cover bg-gray-100"
            />
          </div>
        </div>
        
        <div className="flex-1 flex justify-around pl-4">
          <div className="text-center">
            <div className="font-bold text-lg leading-tight">{user.postsCount}</div>
            <div className="text-xs text-gray-500">게시물</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg leading-tight">{user.followers}</div>
            <div className="text-xs text-gray-500">팔로워</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg leading-tight">{user.following}</div>
            <div className="text-xs text-gray-500">팔로잉</div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-0.5">
        <h2 className="font-bold text-sm">{user.name}</h2>
        <div className="text-sm whitespace-pre-wrap text-gray-800">{user.bio}</div>
      </div>

      <div className="flex gap-2 mt-2">
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-1.5 rounded-lg text-sm font-semibold transition-colors">
          프로필 편집
        </button>
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-1.5 rounded-lg text-sm font-semibold transition-colors">
          보관함 보기
        </button>
      </div>
    </div>
  );
};

export default Profile;
