import './app-filter.css';

export const AppFilter = (props) => {

        const buttonsData = [
            {name:'all',label:'Все сотрудники'},
            {name:'rise',label:'На повышение'},
            {name:'salary',label:'З/П больше 1000$'},
        ]
        const element = buttonsData.map(({name,label})=>{
            const active = props.filter === name;
            const clazz = active ? 'btn-light' : 'btn-outline-light';

            return (
                        <button 
                            type="button"
                            className={ `btn ${clazz}` }
                            key = {name}
                            onClick = {() => props.onUpdateFilter(name)}>
                            {label}
                        </button>
                    )
                        
        })
        return(
            <div className="btn-group">
                {element}
            </div>
        )
}
