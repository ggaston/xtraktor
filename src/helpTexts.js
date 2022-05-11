const getHelpText = function() {
    const helpText = `
    simplecli is a simple cli program to demonstrate how to handle files using streams.
    usage:
        divid <command> <path_to_file>

        <command> can be:
        read: Print a file's contents to the terminal
        write: Write a message from the terminal to a file
        copy: Create a copy of a file in the current directory
        reverse: Reverse the content of a file and save its output to another file.

        <path_to_file> is the path to the file you want to work with.
    `;
    console.log(helpText);
}

module.exports = {
    getHelpText
}