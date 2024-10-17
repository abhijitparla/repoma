import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PropertyTypeSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select type of property" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="villa">Villa</SelectItem>
          <SelectItem value="plot">Land/Plot</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
