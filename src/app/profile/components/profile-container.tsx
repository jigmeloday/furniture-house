'use client';
import { signOut } from '@/lib/server-actions/auth';
import { ProfileModule } from '@/lib/schema';
import { PROFILE_SIDE_NAV } from '../constant/profile.constant';
import { useState } from 'react';
import Link from 'next/link';
import MyProfile from './my-profile';

function ProfileContainer({ user }: { user: ProfileModule }) {
  const [currentTab, setCurrentTab] = useState('profile');
  return (
    <div className="flex px-[16px] sm:px-[85px] my-[24px] space-x-[24px]">
      <div className="w-[288px] rounded bg-primary-light/50 shadow-sm px-[16px] pt-[16px]">
        <span>Account</span>
        <div className="space-y-2 mt-[16px]">
          {PROFILE_SIDE_NAV.map(({ id, label, link }) => (
            <div key={id}>
              {link ? (
                <Link
                  className="text-typo-dark hover:text-typo-dark/60 font-light text-[14px] duration-300 transition ease-in-out"
                  href={link as string}
                >
                  {label}
                </Link>
              ) : (
                <span
                  onClick={() => setCurrentTab(id)}
                  className={`font-light text-[14px] cursor-pointer  duration-300 transition ease-in-out ${
                    currentTab === id
                      ? 'text-primary hover:text-primary/60'
                      : 'text-typo-dark hover:text-typo-dark/60'
                  }`}
                >
                  {label}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="w-full border-t border-primary/10 my-[14px] pt-[8px]">
          <span className="font-bold text-[14px]">Upcoming Features</span>
          <div className="space-y-[4px] mt-[8px]">
            <p className="font-light text-[14px] text-typo-dark/60">Chat</p>
            <p className="font-light text-[14px] text-typo-dark/60">
              Notification
            </p>
            <p className="font-light text-[14px] text-typo-dark/60">
              Mobile Application
            </p>
          </div>
        </div>
        <div
          onClick={() => signOut()}
          className="mb-[8px] text-[14px] cursor-pointer font-semibold text-primary hover:text-primary/70 w-fit duration-200 transition ease-in-out"
        >
          Logout
        </div>
      </div>
      <div className="w-full">
        {currentTab === 'profile' ? <MyProfile user={user} /> : <></>}
      </div>
    </div>
  );
}

export default ProfileContainer;
