import { Component } from 'react';

import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployersList } from '../employers-list/emploeyrs-list';
import { EmployeesAddForm } from '../employers-add-form/employers-add-form'; 

import './app.css';
export class App extends Component {
    constructor(props){
        super(props)
        this.state={
               data: [
                        {name:"John", firstName:"Smith", salary:1000, increase:false, rise:false, id:1},
                        {name:"Alex", firstName:"Tayson", salary:700, increase:false, rise:false, id:2},
                        {name:"Conor", firstName:"MacGregor", salary:2000, increase:false, rise:false, id:3}
                    ],
               term:'',
               filter:'all'
        }
    }
    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        })
        )
    }
    maxId = (data) => {
        return data.length
    }
    onAddItem = (name,firstName,salary) => {
        if(name !== '' && name !== null && name !== undefined && 
           salary !== '' && salary !== null && salary !== undefined){
            const id = this.state.data.length;
            const newEmployee = {
                name: name,
                firstName: firstName,
                salary: salary,
                increase: false,
                rise:false,
                id: id + 1
            }
            this.setState(({data})=>({
                data: [...data,newEmployee]
            }))
        }

    }
    onToggleProp = (id,prop) => {
        this.setState(({data})=>({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }
    empSearch = (term,items) => {
        if(term.length === 0){
            return items
        }
        return items.filter(item => {
                    return item.name.indexOf(term) > -1;
                })
    }
    opnUpdateSearch = (str) => {
        this.setState({
            term: str
        })
    }
    onFilter = (filter,items) => {
        if(filter === "rise"){
            return items.filter(item => item.rise)
        }
        else if(filter === "allEmp"){
               return items
        }
        else if(filter === "salary"){
               return items.filter(item => item.salary > 1000)
        }
        return items
    }
    onUpdateFilter = (value) => {
        this.setState(({
            filter: value
        }))
    }
    onChageSalary = (name,value)=>{
        this.setState(({data})=>({
            data: data.map(item =>{
                if(item.name === name){
                    item.salary = value;
                    return item
                }
                return item
            })
        }))
    }
    render(){
        const {data,term,filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.onFilter(filter,this.empSearch(term,data));
        return (
            <div className="app">
                <AppInfo employees={employees} increased = {increased} />
    
                <div className="search-panel">
                    <SearchPanel 
                        opnUpdateSearch = {this.opnUpdateSearch}/>
                    <AppFilter 
                        filter = {filter}
                        onUpdateFilter = {this.onUpdateFilter}/>
                </div>
                <EmployersList 
                        data={visibleData}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}
                        onChageSalary={this.onChageSalary}/>
                <EmployeesAddForm
                        onAddItem={this.onAddItem}/>
            </div>
        )
    }
}