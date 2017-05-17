import React from 'react';



 class List extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    inputVal: '',
                };
            }
           
            handleFormSubmit = event => {
                const { listHeader, addListItem, listTrueFalseName, checkedName } = this.props;
                const { inputVal } = this.state;
                event.preventDefault();
                addListItem(listHeader, inputVal, listTrueFalseName, checkedName);
                this.setState({ inputVal: '' });
            };

            handleChange = inputVal => this.setState({ inputVal });

			

            render() {
                const { listHeader, arr, listTrueFalseArray, showHideListCom, changeListCom, deleteListCom, pushArrCheckN, checked, checkArray, checkArrayName } = this.props;
                const { inputVal, showEdit } = this.state;
                const array=[listTrueFalseArray];
                return (
                    <div>
                        <h3 className="consProsHeader">{listHeader.toUpperCase()}</h3>
                        <ol>
                            {arr.map((item, i) => {
                                return (
                                    <li key={i}>
                                    	
                                    	{listTrueFalseArray[i] ? <div className="editDiv">
				                        	<input type="text" value={item} className="editInput"  onChange={(event) => changeListCom(arr,i,event.target.value,listTrueFalseArray,checked)} />
				                        </div> : <span onClick={() => showHideListCom(listTrueFalseArray,i)}  className="itemHeader">
                                        	{item}
                                        </span>}
                                        
                                        <button className="but" onClick={() => showHideListCom(listTrueFalseArray,i)} >
				                            {listTrueFalseArray[i] ? "Hide" : "Show"} Edit
				                        </button>
				                        <button className="but" onClick={() => deleteListCom(arr,listTrueFalseArray,i,checked,checkArrayName)} >
				                            Delete
				                        </button>
				                        <input type="checkBox" className="check" checked={checked[i]} onChange={(event)=>pushArrCheckN(i,event.target.checked,checkArray,checked)} />
                                    </li>
                                );
                            })}
                        </ol>
                        <form name="addListItem" onSubmit={e => this.handleFormSubmit(e)}>
                            <input
                                type="text"
                                onChange={e => this.handleChange(e.target.value)}
                                value={inputVal} className="addConsPros"
                            />
                            <input type="submit" value="Add" className="Add" />
                        </form>
                    </div>
                );
            }
        }
export default List;