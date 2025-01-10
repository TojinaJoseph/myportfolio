
import Modal from '../modal/Modal';
import './ProjectModal.css'; // We'll define the modal styles here

interface ProjectModalProps{
    open:boolean,
    onClick:()=>void;
    data:{
     img:string,
     name:string,
     tools:string[],
     description:string
    }
}

const ProjectModal: React.FC<ProjectModalProps>  = ({data,open=false,onClick}) => {

  return (
    <Modal show={open} onClose={onClick}>
    <div className="projectModal">
      <div className='container'>
        <div className='row g-4'>
            <img src={data.img}/>
            <div><h5>{data.name}</h5></div>
            <div className="tools">
                      {data.tools.map((i,index)=>(
                        <div key={index}>{i}</div>
                      ))}
                      </div>
            <div><p>{data.description}</p></div>
        </div>
      </div>
    </div>
    </Modal>
  );
};

export default ProjectModal;