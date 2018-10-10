
interface Person {
    name: string;
    age: string;
}

function sortByName(a: Person[]) {
    var result = a.slice(0);
    result.sort((x,y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}

sortByName([]);