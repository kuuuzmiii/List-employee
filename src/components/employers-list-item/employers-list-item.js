import { Component } from 'react';
import './employers-list-item.css';

export class EmployeesListItem extends Component {
    constructor(props){
        super(props)
        this.state={
            salary: ''
        }
    }
   changeSalary = (e)=> {
       let salar =  e.target.value.slice(0,-1)
        this.setState(()=>({
            salary:salar
        }))

        this.props.onChageSalary(this.props.name,salar)
    }
    render(){
        const {name,firstName,salary,onDelete,onToggleProp,increase,rise} = this.props;

        let classStyles = "list-group-item d-flex justify-content-between"

        if(increase){
            classStyles += " increase"
        }
        if(rise){
            classStyles += " like"
        }

        return (
            <li className={classStyles}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name} {firstName}</span>
                <input type="text" className="list-group-item-input" 
                defaultValue={salary + "$"}
                onChange={this.changeSalary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}
