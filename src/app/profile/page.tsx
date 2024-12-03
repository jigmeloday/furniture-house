import BannerSection from '@/components/banner-section/banner-section';
import ProfileContainer from '@/app/profile/components/profile-container';
import { ProfileModule } from '@/lib/schema';
import { fetchProfile } from '@/lib/server-actions/profile-action';

async function Profile() {
  const user = await fetchProfile();

  return (
    <main>
      <BannerSection title="Profile" />
      <ProfileContainer user={user as ProfileModule}/>
    </main>
  );
}

export default Profile;
