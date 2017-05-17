import React from 'react';

import MainHeader from './ListComponents/MainHeader.js';
import List from './ListComponents/List.js';

 class ListWrapper extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    showPros: true,
                    showCons: true,
                    pros: [
                        'Yes you should 1',
                        'Yes you should 2',
                        'Yes you should 3',
                        'Yes you should 4',
                        'Yes you should 5',
                        'Yes you should 6'
                    ],
                    cons: [
                        'No you should not 1',
                        'No you should not 2',
                        'No you should not 3',
                        'No you should not 4',
                        'No you should not 5',
                        'No you should not 6'
                    ],
                    showProsCom:[false,false,false,false,false,false],
                    showConsCom:[false,false,false,false,false,false],
                    checkedPros:[false,false,false,false,false,false],
                    checkedCons:[false,false,false,false,false,false],
                    prosCheckboxArray:[],
                    consCheckboxArray:[],
                };
            }

            toggleList = (key) => this.setState({ [key]: !this.state[key] });

            toggleBothLists = () => {
                const { showPros, showCons } = this.state;
                if (showCons || showPros) {
                    this.setState({ showPros: false, showCons: false });
                } else {
                    this.setState({ showPros: true, showCons: true });
                }
            };

            closechangeInput = (prosArrName,consArrName) =>{

            	// var y=0;
            	// for(var i=0;i<=prosArrName.length;i++){
            	// 	if(prosArrName[i]==true){
            	// 		y++
            	// 	}
            	// }
            	// for(var i=0;i<=consArrName.length;i++){
            	// 	if(consArrName[i]==true){
            	// 		y++
            	// 	}
            	// }
            	// if(y>0){
            	// 	for(var i=0;i<=prosArrName.length;i++){
	            // 		prosArrName.splice(i,1,false);
	            // 	}
	            // 	for(var i=0;i<=consArrName.length;i++){
	            // 		consArrName.splice(i,1,false);
	            // 	}
            	// }
            	// this.setState({
            	// 	prosArrName,
            	// 	consArrName,
            	// })
            }


            addListItem = (listName, value, listCommentsName, checkedCommentsName) => {
                const newArr = this.state[listName];
                const newArrComments = this.state[listCommentsName];
                const newCheckedArrComments = this.state[checkedCommentsName];
                console.log(newCheckedArrComments);
                newArr.push(value);
                newArrComments.push(false);
                newCheckedArrComments.push(false);
                this.setState({ 
                	[listName]: newArr,
                	[listCommentsName]: newArrComments,
                    [checkedCommentsName]:newCheckedArrComments
                });
            };

            showHideListCom = (listComments,index) =>{
            	for(var i=0;i<listComments.length;i++){
            		if(i!=index){
            			listComments.splice(i,1,false);
            		}
            	}
            	listComments.splice(index,1,!listComments[index]);
            	this.setState({listComments});
            }
           
            changeListCom = (listNameArr,index,value,trueFalseArray,checkedArray) =>{
            	if(value==""){
            		listNameArr.splice(index,1);
            		trueFalseArray.splice(index,1);
                    checkedArray.splice(index,1)
            	}else{
            		listNameArr.splice(index,1,value);
            	}
            	this.setState({listNameArr,trueFalseArray,checkedArray});
            }

            deleteListCom = (listNameArr,trueFalseArray,index,checkedArray,checkedName) =>{
                console.log(checkedArray);
            	listNameArr.splice(index,1);
            	trueFalseArray.splice(index,1);
                checkedArray.splice(index,1);
                console.log(checkedArray);
                var myArr = [];
                for(var i=0;i<=checkedArray.length;i++){
                    if(checkedArray[i]==true){
                       myArr.push(i); 
                    }
                } 
            	this.setState({listNameArr,trueFalseArray,checkedArray,[checkedName]:myArr})
            }

            pushArrCheckN = (index, check, array, checkArray) => {
            	if(check==true){
            		array.push(index)
            	}else{
            		array.splice(array.indexOf(index),1);
            	}
            	console.log(checkArray[index]);
            	checkArray.splice(index,1,!checkArray[index]);
            	this.setState({array,checkArray});
            }

            deleteCheckedLists = (listNameArr,checkedNameArr,trueFalseArr,listName,trueFalseName,check,checkedArray,checkedArrName) =>{
            	for(var i=0;i<checkedNameArr.length;i++){
            		listNameArr.splice(checkedNameArr[i],1,'');
            		trueFalseArr.splice(checkedNameArr[i],1,'del');
            		checkedArray.splice(checkedNameArr[i],1,'del');
            	}
            	console.log(checkedArray);
            	var listArray=[];
            	var trueFalse=[];
            	var checkedArr=[];
            	for(var i=0;i<listNameArr.length;i++){
            		if(listNameArr[i]==""){
            			continue;
            		}
            		listArray.push(listNameArr[i]);
            	}
            	for(var i=0;i<trueFalseArr.length;i++){
            		if(trueFalseArr[i]=="del"){
            			continue;
            		}
            		trueFalse.push(trueFalseArr[i]);
            	}
            	for(var i=0;i<checkedArray.length;i++){
            		if(checkedArray[i]=="del"){
            			continue;
            		}
            		checkedArr.push(checkedArray[i]);
            	}
            	this.setState({
            		[listName]:listArray,
            		[trueFalseName]:trueFalse,
            		[check]:[],
            		[checkedArrName]:checkedArr
            	});
            	console.log(listArray);
            	console.log(trueFalse)
            }

            render() {
                const { showPros, showCons, pros, cons, showProsCom, showConsCom, checkedPros, checkedCons, prosCheckboxArray, consCheckboxArray } = this.state;
                return (
                    <div className="content"onClick={()=>this.closechangeInput(showProsCom,showConsCom)} >
                       <MainHeader />
                       	<div className="showHideDiv">
	                        <button onClick={() => this.toggleList('showPros')} className="but">
	                            {showPros ? 'Hide' : 'Show'} Pros
	                        </button>
	                        <button onClick={() => this.toggleList('showCons')} className="but">
	                            {showCons ? 'Hide' : 'Show'} Cons
	                        </button>
	                        <button onClick={() => this.toggleBothLists()} className="but">
	                            {(showCons || showPros) ? 'Hide' : 'Show'} Both
	                        </button>
	                        <button className="but" onClick = {() => this.deleteCheckedLists(cons,consCheckboxArray,showConsCom,"cons","showConsCom","consCheckboxArray",checkedCons,"checkedCons")} >
	                            Delete Checked Cons
	                        </button>
	                        <button className="but" onClick = {() => this.deleteCheckedLists(pros,prosCheckboxArray,showProsCom,"pros","showProsCom","prosCheckboxArray",checkedPros,"checkedPros")} >
	                            Delete Checked Pros
	                        </button>
                        </div>
                        <div className="ListContent">
                        	<div className="listDiv">
	                        	{showCons && <List arr={cons}  listHeader="cons" addListItem={this.addListItem} listTrueFalseArray ={showConsCom} listTrueFalseName = "showConsCom" showHideListCom={this.showHideListCom} changeListCom={this.changeListCom} deleteListCom={this.deleteListCom} pushArrCheckN={this.pushArrCheckN} checked={checkedCons} checkedName="checkedCons" checkArray={consCheckboxArray} checkArrayName="consCheckboxArray" />}
	                        </div>
	                        <div className="listDiv">
	                        	{showPros && <List arr={pros}  listHeader="pros" addListItem={this.addListItem} listTrueFalseArray ={showProsCom} listTrueFalseName = "showProsCom" showHideListCom={this.showHideListCom} changeListCom={this.changeListCom} deleteListCom={this.deleteListCom} pushArrCheckN={this.pushArrCheckN} checked={checkedPros} checkedName="checkedPros" checkArray={prosCheckboxArray} checkArrayName="prosCheckboxArray" />}
	                        </div>
                        </div>
                    </div>
                );
            }
        }
export default ListWrapper;