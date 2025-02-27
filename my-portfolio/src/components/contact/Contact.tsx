import './Contact.css'
import { useForm, SubmitHandler } from "react-hook-form"

export type formProps = {
    email: string,
    name: string,
    subject: string,
    message: string
}
export interface userItem{
    _id:string
    email: string,
    name: string,
    subject: string,
    message: string
}
export interface users{
    data:{
        _id:string
        email: string,
        name: string,
        subject: string,
        message: string 
    }[]
}
function Contact() {
    // const [user,setUser]=useState<userItem[]|null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<formProps>()

    const onSubmit: SubmitHandler<formProps> = (data) => {
        const formData = {
            email: data.email,
            name: data.name,
            subject: data.subject,
            message: data.message
        }
        console.log(formData);
        reset();
    }
    return (
        <div className='contact'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='sectionHeader'>
                        <h1>Contact</h1>
                        <h3>Feel free to reach out to me for any questions or opportunities!</h3>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='contactForm'>
                        <div><h3>Email Me</h3></div>
                        <div><input placeholder='Your Email' {...register("email", {
                            required: "Email is required", pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })} />
                        </div>
                        {errors.email && <p className='error'>{errors.email.message}</p>}
                        <div><input placeholder='Your Name'  {...register("name", { required: "Name is required" })} /></div>
                        {errors.name && <p className='error'>{errors.name.message}</p>}
                        <div><input placeholder='Subject'  {...register("subject", { required: "Subject is required" })} /></div>
                        {errors.subject && <p className='error'>{errors.subject.message}</p>}
                        <div><textarea placeholder='Message'  {...register("message", { required: "Message is required" })} /></div>
                        {errors.message && <p className='error'>{errors.message.message}</p>}
                        <div><button type='submit'>Send</button></div>
                    </form>                   
                </div>                
            </div>
        </div>
    )
}

export default Contact
