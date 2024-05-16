import Button from "./Button";

const ButtonList =() => {
    const names = ['All', 'List', 'Subscriptions', 'Gaming', 'Songs', 'Live'] 
     return(
        <div className="flex flex-wrap">
            {names.map((x) => {
              return    <Button name={x}/>
            })}
            
        </div>
    )
}

export default ButtonList;