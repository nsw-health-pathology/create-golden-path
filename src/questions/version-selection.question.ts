import inquirer from 'inquirer';
import { Answer } from '../models/choice';

export function versionSelectionQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        type: 'list',
        name: 'versionSelection',
        message: 'Press space on which version of the product you are creating:',
        choices: [
            '1', '2', '3', '4', '5'
        ],
    }]);
}
