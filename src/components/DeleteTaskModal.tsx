import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { TaskDTO } from "../../_dto/types";
import EditTaskForm from "@/components/EditTaskForm"

// import {useVisuallyHidden} from 'react-aria';



// export default function DeleteTaskModal({id, user_id, title, due_on, status}: TaskDTO) {
export default function DeleteTaskModal({ id, updateJosnTasksArray }: { id: number, updateJosnTasksArray: Dispatch<SetStateAction<TaskDTO[]>> }) {

    // let { visuallyHiddenProps } = useVisuallyHidden();

    const [open, setOpen] = useState(false)

    function handleDeleteButton(id:number) {
		updateJosnTasksArray((jsonArray): TaskDTO[] => {
			const tempArray = [...jsonArray];
			const removeIndex = tempArray.findIndex((element) => { return element.id === id });
			tempArray.splice(removeIndex, 1);
			return tempArray;
		});
	}

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            {/* <DialogContent className="sm:max-w-md"> */}
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader className="mb-[25px]">
                    <DialogTitle>Are you sure you want to delete row: {id}</DialogTitle>
                    <DialogDescription>
                        Press the Delete Button to delete the row with ID: {id}.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        {/* <Button type="submit" onClick={}>Save changes</Button> */}
                        <Button variant={"destructive"} onClick={() => { handleDeleteButton(id) }}> Delete </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
