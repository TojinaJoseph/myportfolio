interface TruncProps{
    text:string,
    maxLength:number
}
export const TruncatedText:React.FC<TruncProps> = ({ text, maxLength }) => {
    const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    return <p>{truncatedText}</p>;
  };