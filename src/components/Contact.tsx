import { ContactFormFields } from "@/types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<ContactFormFields>();

  const onSubmit: SubmitHandler<ContactFormFields> = async (values) => {
    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => res.json());

      toast.success("Message sent");
    } catch (err) {
      toast.error("Unable to send message");
    }
  };

  return (
    <div id="contact" className="container m-auto py-12">
      <h2 className="text-6xl text-center font-bold text-primary-light">
        Contact me
      </h2>
      <div className="mt-12 p-8 bg-primary-dark rounded-lg text-white">
        <div className="grid grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
              <div className="text-lg mb-2">Your name</div>
              <input
                className="p-2 bg-dark w-full rounded"
                type="text"
                {...register("name", {
                  required: "Name cannot be empty",
                })}
              />
            </label>
            <label className="block mt-4" htmlFor="message">
              <div className="text-lg mb-2">Your message</div>
              <textarea
                className="p-2 bg-dark w-full rounded"
                {...register("message", {
                  required: "Message cannot be empty",
                })}
              />
            </label>
            <button className="mt-4 font-bold px-8 py-3 bg-primary rounded-full">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
