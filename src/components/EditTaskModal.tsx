import { Dispatch, SetStateAction, useRef } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TaskDTO } from "../../_dto/types";


// export default function EditTaskModal({id, user_id, title, due_on, status}: TaskDTO) {
export default function EditTaskModal({task, updateJosnTasksArray}: {task: TaskDTO, updateJosnTasksArray: Dispatch<SetStateAction<TaskDTO[]>>}) {
    const {id, user_id, title, due_on, status} = task;
    
    let inputTitleRef = useRef(null);
    
    function handleEditSubmit(){
        updateJosnTasksArray(() => {
            // 
        });
    }
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">Edit</Button>
            </DialogTrigger>
            
            
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Table</DialogTitle>
                    <DialogDescription>
                        Edit the form and Press the Submit Button.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor={id.toString()} className="text-1xl">
                            ID
                        </Label>
                        <Input
                            id={id.toString()}
                            defaultValue={id.toString()}
                            readOnly
                        />
                        <Label htmlFor={user_id.toString()} className="text-1xl">
                            User ID
                            {/* {inputTitleRef.current.value} */}
                        </Label>
                        <Input
                            id={user_id.toString()}
                            defaultValue={user_id.toString()}
                            readOnly
                        />
                        <Label htmlFor={title.toString()} className="text-1xl">
                            Title
                        </Label>
                        <Input
                            id={title.toString()}
                            defaultValue={title.toString()}
                            ref={inputTitleRef}
                        />
                        <Label htmlFor={due_on.toString()} className="text-1xl">
                            Due Date
                        </Label>
                        <Input
                            id={due_on.toString()}
                            defaultValue={new Date(due_on).toLocaleDateString()}
                            type="datetime-local"
                        />
                        <Label htmlFor={status.toString()} className="text-1xl">
                            State
                        </Label>
                        <Input
                            id={status.toString()}
                            defaultValue={status.toString()}
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="default" onClick={() => {handleEditSubmit()}}>Submit</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
