import { useEffect, useState } from "react";
import { formProps, userItem, users } from "../contact/Contact";
import "./Table.css";
import { useForm } from "react-hook-form";
import axios from "axios";
// interface TableProps{
//     data:{
//       id:string  
//       name:string 
//       email:string
//       subject:string
//       message:string
//     }[]
// }

export const Table: React.FC<users>  = ({data}) => {
  const [newData,setNewData]=useState<userItem[]|null>(null)
    const [editIndex,setEditIndex]=useState<string|null>(null);
    const {
            register,
            handleSubmit,
            reset,
            watch,
            formState: { errors },
        } = useForm<formProps>()
        const onSubmit=(data: formProps)=>{
        console.log(data)
          axios.put(`https://my-portfolio-backend-pnfn.onrender.com/api/items/${editIndex}`, data)
          .then((response) => {
            // console.log("updata",ndata);
            setNewData((prevData) => {
              if (prevData) {
                return prevData.map((row) =>
                  row._id === response.data._id ? response.data : row
                );
              }
              return []; // Return an empty array if prevData is null or undefined
            });
              
           
          
            setEditIndex(null);
              // alert('Item updated successfully!');
              // setNewData(newData.map((row) => 
              //   row.id === editIndex ? { ...data } : row
              // ));
          })
          .catch(err => console.error(err));
        
        }
        const handleEdit=(item:userItem,event:any)=>{
          event.preventDefault(); 
            setEditIndex(item._id);
            reset({
                name:item.name,
                email:item.email,
                subject:item.subject,
                message:item.message
            })
        }


  const handleDelete = (id: string) => {
    axios.delete(`https://my-portfolio-backend-pnfn.onrender.com/api/delete/${id}`)
      .then((response) => {
        setNewData((prevData) => {
          if (prevData) {
            return prevData.filter((row) => row._id !== id);
          }
          return [];
        });
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };
        useEffect(()=>{
            setNewData(data)
        },[])
   return(
    <form onSubmit={handleSubmit(onSubmit)} className="tableForm">
    <table style={{ width: '100%', borderCollapse: 'collapse' }} className="table">
    <thead>
      <tr>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Subject</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Message</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Edit</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Delete</th>
      </tr>
    </thead>
    <tbody>
      {newData?.map((row) => (
        <tr key={row._id}>
            {editIndex===row._id?(
                
                   <>
                  <td>
                  <input placeholder='Your Name'  {...register("name", { required: "Name is required" })} />
                  </td>
                  <td>
                  <input placeholder='Your Email' {...register("email", {
                            required: "Email is required", pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })} />
                  </td>
                  <td>
                  <input placeholder='Subject'  {...register("subject", { required: "Subject is required" })} />
                  </td>
                  <td>
                  <textarea placeholder='Message'  {...register("message", { required: "Message is required" })} />
                  </td>
                  <td>
                    <button type="submit">Save</button>
                    </td>
                    <td>
                    <button type="button" onClick={() => setEditIndex(null)}>
                      Cancel
                    </button>
                  </td>
                  </>
              
                
            ):(
                <>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.email}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.subject}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.message}</td>
                <td><button type="button" onClick={(event)=>{handleEdit(row,event)}}>Edit</button></td>
                    <td><button type="button" onClick={() => handleDelete(row._id)}>
                      Delete
                    </button></td>
                </>
            )}
         

        </tr>
      ))}
    </tbody>
  </table>
  </form>
   )
}