let input = prompt('what would you like to do?');
const todos = ['Default todo 1', 'Default todo 2'];//array of todos
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);//automatically prints in next line
        }
        console.log('*****************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);//using push method we push it at the end of array
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));//so that if string is entered it could be converted to an integer
        //if'2' is entered then it will be converted to an integer 2
        //is 'paraamaa' is entered then parseInt will tell NaN for this string
        //Hence,we have checked for the above case if index is not a NaN then it could be deleted
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);//using splice method to delete,1st argument is the index at which deletion is to be done 
            //and 2nd argumne==wbt is the no. of elements that need to be deleted(here only 1)
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')