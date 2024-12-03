'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

function AddressFormDialog(props: { isOpen: boolean; setOpen: () => void }) {
  return (
    <Dialog open={props.isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Shipping Address</DialogTitle>
        </DialogHeader>
        <form className="mt-[24px] space-y-4">
          <div className="flex space-x-[16px]">
            <Input placeholder="Country" />
            <Input placeholder="Reciver Name" />
          </div>
          <div className="flex space-x-[16px]">
            <Input placeholder="Phone Number" />
            <Input placeholder="Street Name/P.o Box " />
          </div>
          <div className="flex space-x-[16px]">
            <Input placeholder="Apartment/Unit/Building" />
            <Input placeholder="City" />
          </div>
          <div className="flex w-full justify-end space-x-[16px]">
            <Button type="button" variant="outline" onClick={props.setOpen}>
              Cancel
            </Button>
            <Button>Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddressFormDialog;
