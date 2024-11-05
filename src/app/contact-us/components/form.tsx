import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function Form() {
  return(
    <div className="w-full space-y-4">
     <div className="space-y-2">
      <label className="font-[500] ml-1">Name</label>
     <Input />
     </div>
     <div className="space-y-2">
     <label className="font-[500] ml-1">Email</label>
     <Input />
     </div>
     <div className="space-y-2">
     <label className="font-[500] ml-1">Subject</label>
     <Input />
     </div>
     <div className="space-y-2">
     <label className="font-[500] ml-1">Message</label>
     <Textarea />
     </div>
     <Button className="w-full">Submit</Button>
    </div>
  );
}

export default Form;