import * as React from "react"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="completed">completed</SelectItem>
                    <SelectItem value="pending">pending</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}





































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
