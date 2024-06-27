/**
 * @Author: Musa Hayta - musahayta@gmail.com
 * @Date:   2024-05-16 23:54:07
 * @Last Modified by:   Musa Hayta - musahayta@gmail.com
 * @Last Modified time: 2024-05-17 16:33:30
 */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import registerUser from "@/lib/actions/auth";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CardWrapper from "@/components/wrappers/CardWrapper";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters.").max(50, "Maximum 50 charecters."),
  accepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

export function SignUpForm() {
  const { toast } = useToast;
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      accepted: false,
    },
  });

  async function onSubmit(values) {
    const { accepted, ...user } = values;
    // console.log(values);
    try {
      const result = await registerUser(user);
      () => toast({ description: "User registered successfully" });
    } catch (error) {
      () => toast({ variant: "destructive", description: { error } });
    }
  }

  return (
    <CardWrapper
      cardTitle="Title"
      cardDescription="description"
      showSocials
      buttonLink="/login"
      buttonLabel="Already have an account?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FField
            name="username"
            label="Username"
            placeholder="Username"
            description="Please enter your username"
            formControl={form.control}
          />
          <FField
            name="email"
            label="Email"
            placeholder="Email"
            description="Please enter your email"
            formControl={form.control}
          />
          <FField
            name="password"
            label="Password"
            placeholder="Password"
            inputType="password"
            formControl={form.control}
          />
          <FField
            name="accepted"
            label="Accept terms & conditions"
            type="checkbox"
            formControl={form.control}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

const FField = ({ type, name, label, placeholder, description, inputType, formControl }) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type && type == "checkbox" ? (
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            ) : (
              <Input placeholder={placeholder} type={inputType || "text"} {...field} />
            )}
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
