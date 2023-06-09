import { useEffect } from "react";

function Tree({ height }) {

    var points = localStorage.getItem("points");

    const treeStyle = {
        width: '10px',
        height: `${points * 10}px`,
        backgroundColor: 'brown',
        borderRadius: '50% 50% 0 0 / 60% 60% 0 0',
        position: 'relative',
        overflow: 'hidden',
    };

    const leavesStyle = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundImage: 'linear-gradient(to bottom, green, lightgreen)',
    };

    return (
        <div style={treeStyle}>
            <div style={leavesStyle} />
        </div>
    );
}

export default Tree;