const stream = [
  '/** Component  **/',
  '\n.component {\n    color: #232323;\n}\n\n',
  '/** Component 2 **/',
  '\n.component-2 {\n    color: #ff2323;\n}'
]

const regex = /\/\*\*.*?\*\*\//

function joinPears(arr) {
    return arr.reduce((acc, cur, index, array) => {
        if(regex.test(cur)) {
            acc.push({
                filename: kebabCase(cur),
                content: array[index + 1]
            })
        }
        return acc
    }, [])
}

function kebabCase(string){    
    return string
        .replace(/^\/\*\*/, '')
        .replace(/\*\*\/$/, '')
        .trim()
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

console.log(joinPears(stream))