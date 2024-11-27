import { MapPin } from 'lucide-react';

function MyProfile() {
  return (
    <div className="space-y-[8px]">
      <div className="flex justify-between p-[24px] bg-primary-lighter rounded-[18px]">
        <div className="flex items-center space-x-[12px]">
          <div className="flex border w-[80px] h-[80px] rounded-full items-center justify-center">
            logo
          </div>
          <div className="flex flex-col">
            <span>Fullname</span>
            <span>Email</span>
          </div>
        </div>
        <div>hello</div>
      </div>
      <div className="flex flex-col justify-between p-[24px] bg-primary-lighter rounded-[18px]">
        <div className="">
          <h6>Change shipping address</h6>
          <span>
            You can choose to keep the default shipping address or add new one
          </span>
          <div className="grid grid-cols-2 gap-[24px] my-[24px]">
            {[1, 2, 3, 4].map((item) => (
              <div className="border p-[16px] rounded-[8px]" key={item}>
                <div className="flex justify-between">
                  <div className="bg-primary p-[4px] rounded-[8px] text-white text-[14px]">
                    Defualt
                  </div>
                  <div>Defualt</div>
                </div>
                <div className="flex space-x-[2px] mt-[16px]">
                  <div className="w-[24px] overflow-hidden">
                    <MapPin className="text-[8px]" />
                  </div>
                  <div className="w-ful">
                    <span>Sabrina Rossi, +9710543571034</span>
                    <p>AI Qouz, Dubai, UAE , P.o. Box 9966, 00000 1234545</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
