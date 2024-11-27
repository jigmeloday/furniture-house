import BannerSection from '@/components/banner-section/banner-section';
import { createClient } from '@/lib/supbase/server';
import ProfileContainer from '@/app/profile/components/profile-container';
import { User } from '@/lib/schema';

async function Profile() {
  const {
    data: { user },
  } = await (await createClient()).auth.getUser();

  return (
    <main>
      <BannerSection title="Profile" />
      <ProfileContainer user={user as User}/>
    </main>
  );
}

export default Profile;
