import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border border-secondary rounded-xl"
      >
        <p>
          If you have any questions or concerns, please don&#39t hesitate to
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
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
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
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="message"
            placeholder="Your Message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && <span>This field is required</span>}
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
