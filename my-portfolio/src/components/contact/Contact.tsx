import axios from 'axios'
import './Contact.css'
import { useForm, SubmitHandler } from "react-hook-form"
import { Table } from '../table/Table'
import { useEffect, useState } from 'react'
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
    const [user,setUser]=useState<userItem[]|null>(null);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<formProps>()


    const { subject, message } = watch();
    const onSubmit: SubmitHandler<formProps> = (data) => {
        const formData = {
            email: data.email,
            name: data.name,
            subject: data.subject,
            message: data.message
        }
        axios.post('https://my-portfolio-backend-pnfn.onrender.com/api/sendmail', { formData })
        // axios.post('https://localhost:5000/api/sendmail', { formData })
            .then(({ data }) => {

                alert(data.message);
                reset()
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }
    useEffect(()=>{
        axios.get('https://my-portfolio-backend-pnfn.onrender.com/api/getmail')
        .then(({ data }) => {
            console.log(data);
           setUser(data);
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    },[])
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
                        <div><button type='submit'><a href={`mailto:tojinajoseph123@gmail.com?subject=${subject}&body=${message}`}>Send</a></button></div>
                    </form>
                   
                </div>
                {user && <Table data={user}/>}
                
            </div>
        </div>
    )
}

export default Contact
