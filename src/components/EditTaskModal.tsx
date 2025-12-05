import { Dispatch, SetStateAction, useRef } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TaskDTO } from "../../_dto/types";
import EditTaskForm from "@/components/EditTaskForm"


import { Camera } from 'lucide-react';



// export default function EditTaskModal({id, user_id, title, due_on, status}: TaskDTO) {
export default function EditTaskModal({task, updateJosnTasksArray}: {task: TaskDTO, updateJosnTasksArray: Dispatch<SetStateAction<TaskDTO[]>>}) {
    const {id, user_id, title, due_on, status} = task;
    
    let inputTitleRef = useRef(null);
    
    // function handleEditSubmit(){
    //     updateJosnTasksArray(() => {
    //         console.log("Inside function update.Josn.Tasks.Array");
    //     });
    // }
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <EditTaskForm />
            </DialogContent>
        </Dialog>
    )
}
