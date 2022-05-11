const fs = require("fs");
const { Transform } = require("stream");

const extract = function (filePath, dir = './out') {
    const extension = filePath.split('.').pop();
	const readableStream = fs.createReadStream(filePath, "utf-8");
    const regex = /(\/\*\*.*?\*\*\/)/
    const content = []

    const splitComponents = new Transform({
        transform(data, encoding, callback) {
            const components = data.toString().split(regex)
            
            components.forEach(component => {
                content.push(component)
                this.push(component)
            });
            console.log('ext: ' + extension)
            // Write files
            const files = joinPears(content)
            
            files.forEach((file) => {
                const filename = dir + '/' + file.filename + '.' + extension
                
                // keep it for copy&paste imports
                console.log(`@import url("${filename}")`)

                fs.writeFileSync('./out/' + file.filename + '.css', file.data , 'utf-8');
            })
            callback()
        }
    })

    function joinPears(arr) {
        return arr.reduce((acc, cur, index, array) => {
            if(regex.test(cur)) {
                acc.push({
                    filename: kebabCase(cur),
                    data: array[index + 1]
                })
            }
            return acc
        }, [])
    }
    
    function kebabCase(string){    
        return string
            .replace(/^\//, '')
            .replace(/\/$/, '')
            .replace(/\*+/g, '')
            .trim()
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .replace(/[\s_]+/g, '-')
            .toLowerCase();
    }

    readableStream.pipe(splitComponents).on('finish', () => {
        console.log(`Finished components extraction on ${filePath}.`);
    });
};

module.exports = extract;
