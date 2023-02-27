import React from "react";

const Btn = ({ name, onClick }) => {
    return (
        <div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-4 border border-gray-400 rounded"
                onClick={onClick} >{name}</button>
        </div>
    );
}

export default Btn;