import "./Timeline.css";
interface TimelineProps{
    data:{
        index:number,
        designation?:string,
        company?:string,
        date:string,
        img:string,
        skills?:string,
        description:string,
        college?:string,
        grade?:string,
        course?:string
    }[]
}

export const Timeline: React.FC<TimelineProps>  = ({data}) => {
    return <div className="timeline">
        {data.map((i, index) => (
            <div className='timelineItem' key={index}>
                <div className={`timelineDate ${index % 2 === 0 ? 'dateRight' : 'dateLeft'}`}>
                    <span>{i.date}</span>
                </div>
                <div className="timelineCircle"></div>
                <div className={`timelineContent ${index % 2 === 0 ? 'contentLeft' : 'contentRight'}`}>
                    <div className="timelineHeader">
                        <img src={i.img} className="img-fluid"/>
                        <div><h4>{i.designation?i.designation:i.college}</h4>
                            <h5>{i.company?i.company:i.course}</h5>
                            <span>{i.date}</span></div>
                    </div>
                    <p>{i.description}</p>
                    {i.skills?<p><strong>Skills: </strong>{i.skills}</p>:""}
                </div>
            </div>
        ))}
    </div>;
}