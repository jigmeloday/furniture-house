'use client';
import { Button } from '@/components/ui/button';
import { MapPin, Pencil, Trash } from 'lucide-react';
import AddressFormDialog from './adress-form-dialog';
import { useEffect, useState } from 'react';
import { fetchAddress } from '@/lib/server-actions/profile-action';
import { Address, User } from '@/lib/schema';
import Image from 'next/image';
import ProfileEdit from './profile-edit-dialog';

function MyProfile({ user }: { user: User }) {
  const [addressForm, setAddressForm] = useState(false);
  const [address, setAddress] = useState<Address[]>([]);
  const [edit, setEdit] = useState<boolean>(false);

  const handleAddressForm = () => {
    setAddressForm(!addressForm);
  };

  const handleEditForm = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    const fetch = async () => {
      const addressList = await fetchAddress();
      setAddress(addressList);
    };
    fetch();
  }, []);

  return (
    <div className="space-y-[8px]">
      <div className="flex justify-between p-[24px] bg-primary-lighter rounded-[18px]">
        <div className="flex items-center space-x-[12px]">
          <div className="flex border w-[80px] h-[80px] rounded-full items-center justify-center">
            {user.dp ? (
              <Image src={user.dp} alt="profile" />
            ) : (
              <div className="font-bold text-[32px] text-primary">
                {user.name
                  ?.split(' ')
                  .map((w) => w[0].toUpperCase())
                  .join(' ')}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{user.name}</span>
            <span className="text-typo-dark/60 text-[10px]">{user.email}</span>
          </div>
        </div>
        <Pencil
          onClick={() => setEdit(true)}
          size={14}
          className="text-primary cursor-pointer hover:text-primary/50 ease-in-out transition duration-200"
        />
      </div>
      <div className="flex flex-col justify-between p-[24px] bg-primary-lighter rounded-[18px]">
        <div className="">
          <h6 className="text-typo-dark/80">Change shipping address</h6>
          <span className="text-[14px] text-typo-dark/70">
            You can choose to keep the default shipping address or add new one
          </span>
          <div className="grid grid-cols-2 gap-[24px] my-[24px]">
            {address.map(
              ({
                id,
                apartment,
                city,
                country,
                default_val,
                phone,
                receiver_name,
                street_name,
              }) => (
                <div className="border p-[16px] rounded-[8px]" key={id}>
                  <div className="flex justify-between">
                    {default_val ? (
                      <div className="bg-primary p-[4px] rounded-[8px] text-white text-[14px]">
                        Defualt
                      </div>
                    ) : null}
                    <div className="flex space-x-4">
                      <Pencil
                        onClick={() => setAddressForm(true)}
                        size={14}
                        className="text-primary cursor-pointer hover:text-primary/50 ease-in-out transition duration-200"
                      />
                      <Trash
                        onClick={() => setAddressForm(true)}
                        size={14}
                        className="text-primary cursor-pointer hover:text-primary/50 ease-in-out transition duration-200"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-[2px] mt-[16px]">
                    <div className="w-[24px] overflow-hidden">
                      <MapPin size={18} />
                    </div>
                    <div className="w-full space-x-2">
                      <span className="font-light text-[14px]">
                        {receiver_name},
                      </span>
                      <span className="font-light text-[14px]">{phone},</span>
                      <span className="font-light text-[14px]">
                        {street_name},
                      </span>
                      <span className="font-light text-[14px]">
                        {apartment},
                      </span>
                      <span className="font-light text-[14px]">
                        {city} {country}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <Button
            onClick={() => setAddressForm(true)}
            className="bg-transparent"
            variant="outline"
          >
            Add New Address
          </Button>
          <AddressFormDialog isOpen={addressForm} setOpen={handleAddressForm} />
          <ProfileEdit isOpen={edit} setOpen={handleEditForm} />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
