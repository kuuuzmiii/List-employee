import { Component } from 'react';
import './search-panel.css';


export class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            term:''
        }
    }
    onChangeValue = (e) => {
        this.setState(()=>({
            term: e.target.value
        }))
        this.props.opnUpdateSearch(e.target.value);
    }
    render(){
        const {term} = this.state;
        return(
            <input type="text" 
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   value = {term}
                   onChange={this.onChangeValue}/>
        )
    }
}