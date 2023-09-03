import { useState } from "react";

const SearchBar = ({onSearch}) =>{
    const [pattern, setPattern] = useState('');
    return(
        <div>
            <input type="text" 
                    onChange={e => {setPattern(e.target.value)
                                    onSearch(e.target.value)}}
                    value={pattern}        
            />
        </div>
    )
}
export default SearchBar;