'use client'

import { useState, useEffect } from "react";
import { TaskDTO } from "../../_dto/types";
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

import EditTaskModal from "@/components/EditTaskModal"
import DeleteTaskModal from "@/components/DeleteTaskModal";
import { tasks } from "./data"



import { Camera } from 'lucide-react';
// import InputGroupDemo from '../dump/rough';



export default function Home() {

	let [josnTasksArray, setJosnTasksArray] = useState<TaskDTO[]>([]);

	async function getTasks() {
		try {
			// const response = await fetch('https://gorest.co.in/public/v2/todos');
			// setJosnTasksArray(await response.json());
			setJosnTasksArray(tasks);
			console.log(josnTasksArray);
			console.log(typeof josnTasksArray);
			return;
		} catch (error) {
			console.error('Error:', error);
		}
	}

	useEffect(() => {
		// pop up a toast that shows an alert: The Data was updated
		
	}, [josnTasksArray]);


	function handleLoadTaskButton() {
		getTasks();
	}

	return (
		<main className="flex flex-col justify-center items-center bg-background">
			{/* Heading */}
			<div className="pb-[50px] pt-[30px]">
				<h1 className="text-4xl font-bold">Task Project</h1>
			</div>

			<Button className="w-fit mb-[30px]" variant={"default"} onClick={() => { handleLoadTaskButton() }}> Load Tasks Data </Button>

			{josnTasksArray.length === 0 ? (
				// show "No data found"
				<h2 className="text-2xl font-bold">No data found!</h2>
			) : (
				// show table with josnTasksArray's value populated
				// <h2>Data Found</h2>
				<div className="w-full max-w-[1500px]">
					<Table>
						<TableCaption>Task list</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">ID</TableHead>
								<TableHead>User ID</TableHead>
								<TableHead>Title</TableHead>
								<TableHead>Due Date</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="text-center">Action</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{josnTasksArray.map((task) => {
								return (<TableRow key={task.id}>
									<TableCell className="font-medium">{task.id}</TableCell>
									<TableCell>{task.user_id}</TableCell>
									<TableCell>{task.title}</TableCell>
									<TableCell>{new Date(task.due_on).toLocaleDateString()}</TableCell>
									<TableCell>{task.status}</TableCell>
									<TableCell className="flex flex-row gap-2 justify-center">
										<EditTaskModal task={task} updateJosnTasksArray={setJosnTasksArray}/>
										<DeleteTaskModal id={task.id} updateJosnTasksArray={setJosnTasksArray}/>
									</TableCell>
								</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			)}
			{/* <Camera color="red" size={20} /> */}
			{/* <InputGroupDemo /> */}
		</main>
	)
}
