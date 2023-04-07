import inquirer from 'inquirer';
import { Answer } from '../models/choice';

export function versionSelectionQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        type: 'list',
        name: 'versionSelection',
        message: 'What version of the app is this:',
        choices: [
            '1', '2', '3', '4', '5'
        ],
    }]);
}
