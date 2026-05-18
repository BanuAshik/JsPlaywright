/*Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.*/

function Studentscore(marks){

    switch(true)
    {
        case (marks>=70 &&marks<=80):
            console.log("grade C")
            break;
            case (marks>=80 &&marks<=90):
                console.log("grade B")
                break;
                case (marks>=90 &&marks<=100):
                console.log("grade A")
                break;
                default:
                    console.log("grade D fail")
                        break;
                
    }
}
                        let marks=75;
                        console.log(Studentscore(marks));

