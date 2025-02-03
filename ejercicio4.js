/* Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses
print them out to the console. */


function comparacion(arr, arr2){ 
    for(i = 0; i < arr.length; i ++ ) {
        for (j =0 ; j < arr2.length; j ++) {
            if(arr[i] === arr2[j]) {
                console.log(arr[i]);
            }
        }
    }
}

comparacion(['Math', 'English', 'Programming','Art'], ['Geography', 'Spanish', 'Programming','Art', 'Math']);

function filterArray(arr, arr2) {
    result = arr.filter((courses, index) =>  courses === arr2[index])
    console.log(result);
}

filterArray(['Math', 'English', 'Programming','Art'], ['Geography', 'Spanish', 'Programming','Art', 'Math'])