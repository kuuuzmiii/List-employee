import { Component } from 'react';

import './employers-add-form.css';

export class EmployeesAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
                name:'',
                firstName:'',
                salary:''
        }
    }
    onChanfeValue = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render = () =>{
        const {onAddItem} = this.props;
        const {name,firstName,salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onChanfeValue} />

                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Какая у него фамилия?"
                        name="firstName"
                        value={firstName}
                        onChange={this.onChanfeValue} />

                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onChanfeValue} />

                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e)=>{
                                        e.preventDefault();
                                        onAddItem(name,firstName,salary)}}>Добавить</button>
                            
                </form>
            </div>
        )
   }
}