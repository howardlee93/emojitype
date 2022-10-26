

const SearchBar = (props:any)=>{

    return(
        <input onChange={e=>props.handleOnChange(e)}/>
    )
};

export default SearchBar;