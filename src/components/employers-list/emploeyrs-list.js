import {EmployeesListItem} from '../employers-list-item/employers-list-item';

import './employers-list.css';

export function EmployersList ({data,onDelete,onToggleProp,onChageSalary}){
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
                    key = {id}
                    {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                    onChageSalary={onChageSalary}/>
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}