import inquirer from 'inquirer';

export function projectNameQuestion(): Promise<any> {
    return inquirer.prompt([{
        name: 'projectName',
        type: 'input',
        message: 'Please enter a name to identify this project:',
    }]);
}
