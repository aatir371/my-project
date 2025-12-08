import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { TaskDTO } from "../../_dto/types";
import EditTaskForm from "@/components/EditTaskForm"

// import {useVisuallyHidden} from 'react-aria';



// export default function EditTaskModal({id, user_id, title, due_on, status}: TaskDTO) {
export default function EditTaskModal({ task, updateJosnTasksArray }: { task: TaskDTO, updateJosnTasksArray: Dispatch<SetStateAction<TaskDTO[]>> }) {

    // let { visuallyHiddenProps } = useVisuallyHidden();

    const [open, setOpen] = useState(false) 
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary">Edit</Button>
            </DialogTrigger>
            {/* <DialogContent className="sm:max-w-md"> */}
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Edit Table</DialogTitle>
                    <DialogDescription>
                        Edit the form and Press the Submit Button.
                    </DialogDescription>
                </DialogHeader>
                <EditTaskForm task={task} updateJosnTasksArray={updateJosnTasksArray} openDialigFunction={setOpen}/>
            </DialogContent>
        </Dialog>
    )
}
