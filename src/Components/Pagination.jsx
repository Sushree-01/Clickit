const Pagination = ({currPage,setcurrPage,totalPages}) => {
    return <div className="pagination_wrapper">
      {Array(totalPages).fill()
      .map((_,i)=>(
        <button disabled={currPage===i+1} onClick={()=>setcurrPage(i+1)} 
        style={{backgroundColor:currPage===i+1?"red":"blue",color:"white",padding:"15px 15px"}}>
          {i+1}
        </button>
      ))}
    </div>;
  };
  
  export default Pagination;