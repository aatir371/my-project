










<DialogHeader>
                    <DialogTitle>Edit Table</DialogTitle>
                    <DialogDescription>
                        Edit the form and Press the Submit Button.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-row justify-center"> <Camera color="red" size={20} /> <Camera color="red" size={20} /> <Camera color="red" size={20} /> <Camera color="red" size={20} /> <Camera color="red" size={20} /> <Camera color="red" size={20} /> <Camera color="red" size={20} /> <Camera color="red" size={20} /> <Camera color="red" size={20} /> <Camera color="red" size={20} /> </div>
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
                        {/* <Button type="button" variant="default" onClick={() => {handleEditSubmit()}}>Submit</Button> */}
                        <Button type="button" variant="default" >Submit</Button>
                    </DialogClose>
                </DialogFooter>