import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

function ProfileEdit(props: { isOpen: boolean; setOpen: () => void }) {
  return (
    <Dialog open={props.isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form className="mt-[24px] space-y-4">
          <div className="flex space-x-[16px]">
            <Input placeholder="Email" />
            <Input placeholder="Name" />
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

export default ProfileEdit;
