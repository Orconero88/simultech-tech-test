import { useState } from "react";
interface SearchProps {
    searchText: string
}
export const Searchbar: React.FC<SearchProps> = (props: SearchProps) => {
    const [text, setText] = useState<string>(props.searchText);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    };

    return (
        <form className="flex flex-row">
            <input
                name="searchText"
                className="w-96 h-8 px-2 bg-white shadow rounded"
                type="text"
                placeholder="Search a movie!"
                value={text}
                onChange={onChangeHandler}
            />
            <input type="submit" className="rounded bg-black text-white p-2 ml-4 h-8 cursor-pointer" value={"Search"}></input>

        </form>

    )
}

export default Searchbar;