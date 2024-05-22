"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export function ComboboxDemo({frameworks,placeholder,label,span,docTypeCallback}:any) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div className={"w-full flex flex-col gap-1  " + span}>
    <p className=" text-xs">{label}</p>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between bg-white text-xs border border-blue/50"
        >
          {value
            ? frameworks.find((framework:any) => framework.label.toLowerCase() === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] sm:w-[300px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} required  name="requestor" />
          <CommandEmpty>{placeholder}</CommandEmpty>
          <CommandGroup className=" max-h-[140px] overflow-y-scroll">
            {frameworks.map((framework:any) => (
              <CommandItem
                key={framework.label.toLowerCase()}
                value={framework.label.toLowerCase()}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  docTypeCallback(currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.label.toLowerCase() ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
  )
}

