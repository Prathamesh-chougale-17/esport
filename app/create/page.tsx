"use client";
import { Button, TextInput, Select } from "@mantine/core";
// import { SubmitHandler, useForm } from "react-hook-form";
import { createFormContext } from "@mantine/form";
import { SubmitHandler } from "react-hook-form";
import { Toaster } from "sonner";
// import { useForm } from "@mantine/form";
export interface FormSubmittion {
  fullName: string;
  email: string;
  age: number;
  gender: string;
  phoneNumber: string;
  twitchChannelId: string;
}
const [FormProvider, useFormContext, useForm] =
  createFormContext<FormSubmittion>();

function ContextField() {
  const form = useFormContext();
  return (
    <>
      <TextInput
        label="Event Name"
        placeholder="Event Name"
        withAsterisk
        {...form.getInputProps("eventname")}
      />
      <TextInput
        label="Enter the Start Date of Event"
        placeholder="Event Start Date"
        withAsterisk
        mt="md"
        {...form.getInputProps("startdate")}
      />
      <TextInput
        label="Enter the Number of Player"
        placeholder="Number of Player"
        withAsterisk
        mt="md"
        {...form.getInputProps("player")}
      />
      <TextInput
        label="Enter your Pize Poll"
        placeholder="Phone Number"
        withAsterisk
        mt="md"
        {...form.getInputProps("prizepool")}
      />
      <TextInput
        label="Enter your Organisation Name"
        placeholder="Organisation Name"
        withAsterisk
        mt="md"
        {...form.getInputProps("organisationName")}
      />
      <TextInput
        label="Enter your Participation Fee"
        placeholder="Participation Fee"
        withAsterisk
        mt="md"
        {...form.getInputProps("participationfee")}
      />
      <TextInput
        label="Enter your Location"
        placeholder="Location"
        withAsterisk
        mt="md"
        {...form.getInputProps("location")}
      />
      <Select
        label="Enter your Game Domain"
        placeholder="Game Domain"
        limit={5}
        data={[
          "ea-fc-24",
          "fortnite",
          "tekken-7",
          "counter-strike-go",
          "clash-royal",
          "pubg-mobile",
          "valorant",
          "rocket-league",
          "street-fighter-6",
          "overwatch-2",
          "brawl-stars",
          "mobile-legends",
          "dota-2",
          "minecraft",
          "fifa-23",
        ]}
        searchable
      />

      {/* <Group justify="flex-start" mt="md"> */}
      <Button type="submit" mt={16}>
        Submit
      </Button>
      {/* </Group> */}
    </>
  );
}

// export type FormSubmittion = z.infer<typeof FormSubmissionSchema>;
const FeedbackForm = () => {
  const processForm: SubmitHandler<FormSubmittion> = async (data) => {
    console.log(data);
    // console.log(Responseconsole.log(Sendmessage)
  };

  // const form = useFormContext();

  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      age: 0,
      twitchChannelId: "",
    },
    validate: {
      fullName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
      phoneNumber: (value) =>
        value.length === 10 ? null : "Phone number must have 10 digits",
      gender: (value) =>
        value.length < 4 ? "Please select your Gender" : null,
      // address: (value) => (value.length < 10 ? 'Address must have at least 10 letters' : null),
      twitchChannelId: (value) =>
        value.length < 3
          ? "Twitch Channel Id must have at least 3 letters"
          : null,
    },
  });

  return (
    <div className="bg-black">
      <FormProvider form={form}>
        <Toaster />
        <form
          onSubmit={form.onSubmit(processForm)}
          className="lg:mx-auto mx-4 w-full max-w-xl pt-16"
        >
          <ContextField />
        </form>
      </FormProvider>
    </div>
  );
};

export default FeedbackForm;
