// Initialize fake file system
const fileSystem = {
    'readme.txt': 'Welcome to Yohanna\'s terminal.',
    'project': {
        'time-travel': 'Research on time travel.',
        'god-particles': 'Capturing God-Particles.'
    }
};

// Current directory
let currentDir = fileSystem;

// Function to handle terminal input
function handleInput(input) {
    let output = 'Command not found';

    if (input === 'ls') {
        output = Object.keys(currentDir).join(' ');
    } else if (input.startsWith('cat ')) {
        const fileName = input.split(' ')[1];
        output = currentDir[fileName] || 'File not found';
    } else if (input.startsWith('cd ')) {
        const dirName = input.split(' ')[1];
        if (currentDir[dirName]) {
            currentDir = currentDir[dirName];
            output = '';
        } else {
            output = 'Directory not found';
        }
    }

    return output;
}

// Function to render terminal
function renderTerminal() {
    const terminal = document.getElementById('terminal');
    terminal.value = '> ';
    terminal.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const lines = terminal.value.split('\n');
            const input = lines[lines.length - 1].replace('> ', '');
            const output = handleInput(input);
            terminal.value += `\n${output}\n> `;
        }
    });
}

// Initialize terminal
renderTerminal();
