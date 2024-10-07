"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { Textarea } from "./textarea";
import { useToast } from "@/hooks/use-toast";

export enum SUBJECT {
  QUESTION = "question",
  QUOTE = "quote",
}

const formSchema = z.object({
  "form-name": z.string().default("contact"),
  "bot-field": z.string().optional(),
  subject: z.enum([SUBJECT.QUESTION, SUBJECT.QUOTE]),
  name: z
    .string()
    .min(1, { message: "A mező kitöltése kötelező" })
    .max(50, { message: "Túllépted a megengedett karakterszámot." }),
  email: z
    .string()
    .email("A megadott email hibás formátumú")
    .min(1, { message: "A mező kitöltése kötelező" })
    .max(50, { message: "Túllépted a megengedett karakterszámot" }),
  message: z
    .string()
    .min(1, { message: "A mező kitöltése kötelező" })
    .max(5000, { message: "Túllépted a megengedett karakterszámot" }),
});

const ContactUsForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "form-name": "contact",
      "bot-field": "",
      subject: SUBJECT.QUESTION,
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const value = values[key as keyof typeof values] ?? "";
          formData.append(key, value.toString());
        }
      }
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.status === 200) {
        form.reset();
        toast({
          title: "Sikeres üzenetküldes!",
          description: "Hamarosan felvesszük veled a kapcsolatot!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Valami hiba történt.",
          description: "Próbáld újra.",
        });
      }
    } catch (error) {
      console.log(error)
      toast({
        variant: "destructive",
        title: "Valami hiba történt.",
        description: "Próbáld újra.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-8 flex flex-col -mt-16"
      >
        <FormField
          control={form.control}
          name="form-name"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} value="contact" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bot-field"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-contact-us text-tertiary-green">
                Név
              </FormLabel>
              <FormControl>
                <Input
                  className="text-contact-us !placeholder-white py-[18px] px-[20px] rounded-[28px] h-[56px] bg-quartary-green"
                  placeholder="Név"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-contact-us text-tertiary-green">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="text-contact-us !placeholder-white py-[18px] px-[20px] rounded-[28px] h-[56px] bg-quartary-green"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-contact-us text-tertiary-green">
                Üzenet
              </FormLabel>
              <FormControl>
                <Textarea
                 className="text-contact-us !placeholder-white py-[18px] px-[20px] rounded-[28px] h-[160px] bg-quartary-green"
                  placeholder="Üzenet"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-fit self-center" variant="outline" type="submit">
          Küldés
        </Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;
