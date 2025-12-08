"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const spokenLanguages = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Italian", value: "it" },
    { label: "Chinese", value: "zh" },
    { label: "Japanese", value: "ja" },
] as const

const formSchema = z.object({
    language: z
        .string()
        .min(1, "Please select your spoken language.")
        .refine((val) => val !== "auto", {
            message:
                "Auto-detection is not allowed. Please select a specific language.",
        }),
})

export function FormRhfSelect() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            language: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
    }

    return (
        <Card className="w-full sm:max-w-lg">
            <CardHeader>
                <CardTitle>Language Preferences</CardTitle>
                <CardDescription>
                    Select your preferred spoken language.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="form-rhf-select" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="language"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field
                                    orientation="responsive"
                                    data-invalid={fieldState.invalid}
                                >
                                    <FieldContent>
                                        <FieldLabel htmlFor="form-rhf-select-language">
                                            Spoken Language
                                        </FieldLabel>
                                        <FieldDescription>
                                            For best results, select the language you speak.
                                        </FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </FieldContent>
                                    <Select
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger
                                            id="form-rhf-select-language"
                                            aria-invalid={fieldState.invalid}
                                            className="min-w-[120px]"
                                        >
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="item-aligned">
                                            <SelectItem value="auto">Auto</SelectItem>
                                            <SelectSeparator />
                                            {spokenLanguages.map((language) => (
                                                <SelectItem key={language.value} value={language.value}>
                                                    {language.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="form-rhf-select">
                        Save
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}











// import { ChevronDownIcon, MoreHorizontal } from "lucide-react"

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//     InputGroup,
//     InputGroupAddon,
//     InputGroupButton,
//     InputGroupInput,
// } from "@/components/ui/input-group"

// export function InputGroupDropdown() {
//     return (
//         <div className="grid w-full max-w-sm gap-4">
//             <InputGroup>
//                 <InputGroupInput placeholder="Enter file name" />
//                 <InputGroupAddon align="inline-end">
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <InputGroupButton
//                                 variant="ghost"
//                                 aria-label="More"
//                                 size="icon-xs"
//                             >
//                                 <MoreHorizontal />
//                             </InputGroupButton>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end">
//                             <DropdownMenuItem>Settings</DropdownMenuItem>
//                             <DropdownMenuItem>Copy path</DropdownMenuItem>
//                             <DropdownMenuItem>Open location</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 </InputGroupAddon>
//             </InputGroup>
//             <InputGroup className="[--radius:1rem]">
//                 <InputGroupInput placeholder="Enter search query" />
//                 <InputGroupAddon align="inline-end">
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <InputGroupButton variant="ghost" className="!pr-1.5 text-xs">
//                                 Search In... <ChevronDownIcon className="size-3" />
//                             </InputGroupButton>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end" className="[--radius:0.95rem]">
//                             <DropdownMenuItem>Documentation</DropdownMenuItem>
//                             <DropdownMenuItem>Blog Posts</DropdownMenuItem>
//                             <DropdownMenuItem>Changelog</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 </InputGroupAddon>
//             </InputGroup>
//         </div>
//     )
// }





// import * as React from "react"

// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

// export default function SelectDemo() {
//     return (
//         <Select>
//             <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Select a status" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectGroup>
//                     <SelectLabel>Status</SelectLabel>
//                     <SelectItem value="completed">completed</SelectItem>
//                     <SelectItem value="pending">pending</SelectItem>
//                 </SelectGroup>
//             </SelectContent>
//         </Select>
//     )
// }





































// // import { IconCheck, IconInfoCircle, IconPlus } from "@tabler/icons-react"
// import { Camera } from 'lucide-react';

// import { ArrowUpIcon, Search } from "lucide-react"

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//     InputGroup,
//     InputGroupAddon,
//     InputGroupButton,
//     InputGroupInput,
//     InputGroupText,
//     InputGroupTextarea,
// } from "@/components/ui/input-group"
// import { Separator } from "@/components/ui/separator"
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipTrigger,
// } from "@/components/ui/tooltip"

// export function InputGroupDemo() {
//     return (
//         <div className="grid w-full max-w-sm gap-6">
//             <InputGroup>
//                 <InputGroupInput placeholder="Search..." />
//                 <InputGroupAddon>
//                     {/* <Search /> */}
//                     <Camera color="orange" size={20} />
//                 </InputGroupAddon>
//                 <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
//             </InputGroup>
//             <InputGroup>
//                 <InputGroupInput placeholder="example.com" className="pl-1!" />
//                 <InputGroupAddon>
//                     <InputGroupText>https://</InputGroupText>
//                 </InputGroupAddon>
//                 <InputGroupAddon align="inline-end">
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <InputGroupButton className="rounded-full" size="icon-xs">
//                                 {/* <IconInfoCircle /> */}
//                                 <Camera color="green" size={20} />
//                             </InputGroupButton>
//                         </TooltipTrigger>
//                         <TooltipContent>This is content in a tooltip.</TooltipContent>
//                     </Tooltip>
//                 </InputGroupAddon>
//             </InputGroup>
//             <InputGroup>
//                 <InputGroupTextarea placeholder="Ask, Search or Chat..." />
//                 <InputGroupAddon align="block-end">
//                     <InputGroupButton
//                         variant="outline"
//                         className="rounded-full"
//                         size="icon-xs"
//                     >
//                         {/* <IconPlus /> */}
//                         <Camera color="blue" size={20} />
//                     </InputGroupButton>
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <InputGroupButton variant="ghost">Auto</InputGroupButton>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent
//                             side="top"
//                             align="start"
//                             className="[--radius:0.95rem]"
//                         >
//                             <DropdownMenuItem>Auto</DropdownMenuItem>
//                             <DropdownMenuItem>Agent</DropdownMenuItem>
//                             <DropdownMenuItem>Manual</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                     <InputGroupText className="ml-auto">52% used</InputGroupText>
//                     <Separator orientation="vertical" className="h-4!" />
//                     <InputGroupButton
//                         variant="default"
//                         className="rounded-full"
//                         size="icon-xs"
//                         disabled
//                     >
//                         <ArrowUpIcon />
//                         <span className="sr-only">Send</span>
//                     </InputGroupButton>
//                 </InputGroupAddon>
//             </InputGroup>
//             <InputGroup>
//                 <InputGroupInput placeholder="@shadcn" />
//                 <InputGroupAddon align="inline-end">
//                     <div className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full">
//                         {/* <IconCheck className="size-3" /> */}
//                         <Camera color="red" size={20} />
//                     </div>
//                 </InputGroupAddon>
//             </InputGroup>
//         </div>
//     )
// }
