const Card = props => {
    return (<div class = 'card'>
        <h1>{props.name}</h1>
        <figcaption>{props.desc}</figcaption>
        <figcaption>{props.cases}</figcaption>
        <figcaption>{props.customers}</figcaption>
        <figcaption>{props.integration}</figcaption>
        <figcaption>{props.similar}</figcaption>
        <figcaption>{props.studies}</figcaption>
        <figcaption>{props.pricing}</figcaption>
        <figcaption>{props.hq}</figcaption>
        <figcaption>{props.employees}</figcaption>
        <figcaption>{props.ceo}</figcaption>
        <figcaption>{props.founding}</figcaption>
        <figcaption>{props.funding}</figcaption>
    </div>
    );
}

export default Card;