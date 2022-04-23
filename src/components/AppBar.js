import "./AppBar.css";

const AppBar = (props) => {
    return (
        <div>
            <div className="appBar">
                <div className="greeting">Hello, {props.name}</div>
                <div className="signOut">Sign out</div>
                <div className="dividedGrid">
                    <div className="todoText gridItem">Todo</div>
                    <div className="lineDivider gridItem"></div>
                    <div className="doneText gridItem">Done</div>
                </div>
            </div>
        </div>
    );
};

export default AppBar;
