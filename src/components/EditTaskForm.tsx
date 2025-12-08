"use client"

import { useRef, DetailedHTMLProps, InputHTMLAttributes } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton } from "@/components/ui/input-group"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TaskDTO } from "../../_dto/types"
import { Dispatch, SetStateAction } from "react";

import { Camera } from 'lucide-react';




export default function EditTaskForm({ task, updateJosnTasksArray, openDialigFunction }: { task: TaskDTO, updateJosnTasksArray: Dispatch<SetStateAction<TaskDTO[]>>, openDialigFunction: Dispatch<SetStateAction<boolean>> }) {

    const { id, user_id, title, due_on, status } = task;
    const submitButtonRef = useRef<HTMLButtonElement>(null);

    const formSchema = z.object({
        id: z.number().nonnegative({ error: "ID can not be negative." }).nonoptional({ error: "ID is required." }),
        user_id: z.number().nonnegative({ error: "User ID can not be negative." }).nonoptional({ error: "User ID is required." }),
        title: z.string().nonempty({ error: "Please enter a title." }).nonoptional({ error: "Title is required." }),
        due_on: z.string().nonempty({ error: "Please enter a date." }).nonoptional({ error: "Date is required." }),
        status: z.string().nonempty({ error: "Please select a status." }).nonoptional(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: id,
            user_id: user_id,
            title: title,
            due_on: new Date(due_on).toISOString(), // chatgpt
            status: status,
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        // toast("You submitted the following values:", {
        //     description: (
        //         <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
        //             <code>{JSON.stringify(data, null, 2)}</code>
        //         </pre>
        //     ),
        //     position: "bottom-right",
        //     classNames: {
        //         content: "flex flex-col gap-2",
        //     },
        //     style: {
        //         "--border-radius": "calc(var(--radius)  + 4px)",
        //     } as React.CSSProperties,
        // })
        console.log("Submit Button Pressed")
        console.log(data)

        if (submitButtonRef.current) submitButtonRef.current.disabled = true;

        setTimeout(() => {
            updateJosnTasksArray((jsonArray): TaskDTO[] => {

                const tempArray = [...jsonArray];

                tempArray.forEach((element, i, dataArray) => {
                    if (element.id === data.id) {
                        dataArray[i].title = data.title;
                        dataArray[i].due_on = new Date(data.due_on);
                        dataArray[i].status = data.status;
                    }
                });
                return tempArray;
            });
            if (submitButtonRef.current) submitButtonRef.current.disabled = false;

            openDialigFunction(false);
        }, 5);
    }

    return (
        <div className="pt-6 pb-6">
            <div className="grid flex-1 gap-8">
                {/* <CardHeader>
                    <CardTitle>Edit Table</CardTitle>
                    <CardDescription>
                        Edit the form and Press the Submit Button.
                    </CardDescription>
                </CardHeader> */}
                <CardContent>
                    <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup className="flex flex-col gap-5">

                            <Controller
                                name="id"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} className="gap-1">
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            ID
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupInput
                                                {...field}
                                                disabled
                                            />
                                            <InputGroupAddon>
                                                <Camera color="blue" size={20} />
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="user_id"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} className="gap-1">
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            User ID
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupInput
                                                {...field}
                                                disabled
                                            />
                                            <InputGroupAddon>
                                                <Camera color="blue" size={20} />
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="title"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} className="gap-1">
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            Title
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupInput {...field} />
                                            <InputGroupAddon>
                                                <Camera color="blue" size={20} />
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="due_on"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} className="gap-1">
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            Due Date
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupInput type="datetime-local" {...field} />
                                            <InputGroupAddon>
                                                <Camera color="blue" size={20} />
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="status"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} className="gap-1">
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            State
                                        </FieldLabel>
                                        <Select
                                            // name={field.name}
                                            // value={field.value}
                                            onValueChange={field.onChange}
                                            >
                                            <SelectTrigger className="flex flex-row justify-start w-full">
                                                <Camera color="blue" size={20} />
                                                <div className="flex flex-row justify-between w-full">
                                                    <SelectValue placeholder={field.value} />
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Status</SelectLabel>
                                                    <InputGroup>
                                                        <InputGroupInput {...field} />
                                                    </InputGroup>
                                                    <SelectItem value="completed">completed</SelectItem>
                                                    <SelectItem value="pending">pending</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter>
                    <Field orientation="horizontal">
                        {/* <Button type="button" variant="outline" onClick={() => form.reset()}>
                            Reset
                        </Button> */}
                        <Button ref={submitButtonRef} type="submit" form="form-rhf-demo" >
                            Submit
                        </Button>
                    </Field>
                </CardFooter>
            </div>
        </div>
    )
}
