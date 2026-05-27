import React, { useState } from 'react';
import { UserProfile } from '../types/index';

interface ProfilePageProps {
  profile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onDeleteAccount: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profile,
  onUpdateProfile,
  onDeleteAccount,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const handleSave = () => {
    onUpdateProfile({ name, email });
    setIsEditing(false);
  };

  return (
    <div className="p-4 space-y-4 pb-24">
      <h2 className="font-bricolage text-2xl font-bold text-gray-900">Profile</h2>

      {isEditing ? (
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-easishop-green"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-easishop-green"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-easishop-green text-white rounded-lg font-semibold hover:opacity-90"
            >
              Save
            </button>
            <button
              onClick={() => {
                setName(profile.name);
                setEmail(profile.email);
                setIsEditing(false);
              }}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
          <div>
            <p className="text-xs text-gray-500">Name</p>
            <p className="text-lg font-semibold text-gray-900">{profile.name}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-lg font-semibold text-gray-900">{profile.email}</p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="w-full px-4 py-2 bg-easishop-green text-white rounded-lg font-semibold hover:opacity-90"
          >
            Edit Profile
          </button>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">Notifications</p>
            <p className="text-xs text-gray-500">Get alerts for price changes</p>
          </div>
          <button
            onClick={() => onUpdateProfile({ alerts: !profile.alerts })}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              profile.alerts
                ? 'bg-easishop-green text-white'
                : 'bg-gray-200 text-gray-900'
            }`}
          >
            {profile.alerts ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          if (confirm('Are you sure you want to delete your account?')) {
            onDeleteAccount();
          }
        }}
        className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200"
      >
        Delete Account
      </button>
    </div>
  );
};
