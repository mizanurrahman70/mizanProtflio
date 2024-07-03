import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await fetch(
        "https://naiem-hasan-server.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // console.log("Message sent successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Message sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border border-secondary rounded-xl"
      >
        <p>
          If you have any questions or concerns, please don&#39;t hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered "
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input input-bordered "
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && <span>{errors.subject.message}</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            name="message"
            className="textarea textarea-bordered"
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-secondary border-none text-white hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
