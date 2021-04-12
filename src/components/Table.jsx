import Card from './Card';
import Companies from './Companies';

const createCard = (Companies) => {
    return (
        <Card 
            name = {Companies.name}
            desc = {Companies.desc}
            cases = {Companies.cases}
            customers = {Companies.customers}
            integration = {Companies.integration}
            similar = {Companies.similar}
            studies = {Companies.studies}
            pricing = {Companies.pricing}
            hq = {Companies.hq}
            employees = {Companies.employees}
            ceo = {Companies.ceo}
            founding = {Companies.founding}
            funding = {Companies.funding}
        />
    )
}

const Table = props => {
    return (<figure id = 'table'>
        {Companies.map(createCard)}
    </figure>);
}

export default Table;