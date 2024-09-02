"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  firstname: z.string().min(5, {
    message: "Firstname must be at least 5 characters.",
  }),
  lastname: z.string().min(5, {
    message: "Lastname must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Email is not valid.",
  }),
    bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

const EnquiryForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-default-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form} className="w-2/3">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-wrap gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-[calc(50%-20px)]">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...field}
                    className={cn("", {
                      "border-destructive focus:border-destructive":
                        form.formState.errors.firstname,
                    })}
                  />
                </FormControl>
                <FormMessage className="bg-destructive/90 text-primary-foreground text-[10px] inline-flex justify-center items-center font-base h-[22px] px-2 rounded-sm " />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-[calc(50%-20px)]">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    {...field}
                    className={cn("", {
                      "border-destructive focus:border-destructive":
                        form.formState.errors.lastname,
                    })}
                  />
                </FormControl>
                <FormMessage className="bg-destructive/90 text-primary-foreground text-[10px] inline-flex justify-center items-center font-base h-[22px] px-2 rounded-sm " />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className={cn("", {
                      "border-destructive focus:border-destructive":
                        form.formState.errors.email,
                    })}
                  />
                </FormControl>
                <FormMessage className="bg-destructive/90 text-primary-foreground text-[10px] inline-flex justify-center items-center font-base h-[22px] px-2 rounded-sm " />
              </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-y-1 w-full"
                >
                  <FormItem className="flex items-center gap-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>

                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="mb-2">Message Area</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Let us know more about your Query"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="mt-4 flex ltr:justify-end rtl:justify-start">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default EnquiryForm;
