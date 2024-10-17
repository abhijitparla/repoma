'use client'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PropertyTypeSelect } from './ProprtyTypeSelect'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const AddPropertyForm = () => {
    const [propertyType, setPropertyType] = useState("")
    const [date, setDate] = React.useState<Date>()
    const formSchema = z.object({
        propertyName: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        typeOfProperty: z.string().min(2, {
            message: "Type of property is mandatory",
        }),
        propertyAddress: z.string().min(2, {
            message: "Property address is mandatory",
        }),
        propertyArea: z.string().min(2, {
            message: "Property area is mandatory",
        }),
        modeOfPayment: z.string().min(2, {
            message: "Mode of payment is mandatory"
        }),
        propertyPurchasePrice: z.string().min(2, {
            message: "Purchase price is mandatory"
        }),
        propertyPurchaseDate: z.string().min(2, {
            message: "Purchase date is mandatory"
        }),

    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            propertyName: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            {/* <div>
                Add a new property to your portfolio
            </div> */}
            <div className='flex flex-row justify-center w-full'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-12 gap-5 m-10">
                        <FormField
                            control={form.control}
                            name="propertyName"
                            render={({ field }) => (
                                <FormItem className='col-span-6'>
                                    <FormLabel>Property Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name to address your property" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="typeOfProperty"
                            render={({ field }) => (
                                <FormItem className='col-span-6'>
                                    <FormLabel>Type of property</FormLabel>
                                    <FormControl>
                                        <Select {...field}>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Select type of property" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="apartment">Apartment</SelectItem>
                                                    <SelectItem value="villa">Villa</SelectItem>
                                                    <SelectItem value="plot">Land/Plot</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="propertyAddress"
                            render={({ field }) => (
                                <FormItem className='col-span-6'>
                                    <FormLabel>Property Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="propertyPurchasePrice"
                            render={({ field }) => (
                                <FormItem className='col-span-6'>
                                    <FormLabel>Property Purchase Price</FormLabel>
                                    <FormControl>
                                        <Input placeholder="purchase price" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="propertyPurchaseDate"
                            render={({ field }) => (
                                <FormItem className='col-span-6 flex flex-col justify-center mt-1'>
                                    <FormLabel className='mb-1'>Property Purchase Date</FormLabel>
                                    <FormControl>
                                        <Popover {...field}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="propertyArea"
                            render={({ field }) => (
                                <FormItem className='col-span-6'>
                                    <FormLabel>Property area</FormLabel>
                                    <FormControl>
                                        <Input placeholder="area" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="modeOfPayment"
                            render={({ field }) => (
                                <FormItem className='col-span-6'>
                                    <FormLabel>Mode of payment</FormLabel>
                                    <FormControl>
                                        <RadioGroup defaultValue="" {...field}>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="cash" id="r1" />
                                                <Label htmlFor="r1">Cash</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="loan" id="r2" />
                                                <Label htmlFor="r2">Loan</Label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className='col-span-12 w-2/3 mx-auto'> Submit</Button>
                    </form>
                </Form>
            </div>

        </div>
    )
}

export default AddPropertyForm