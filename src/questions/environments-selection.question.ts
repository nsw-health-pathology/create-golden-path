import inquirer from 'inquirer';
import { Answer } from '../models/choice';

export function environmentSelectionQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        type: 'checkbox',
        name: 'environmentSelection',
        message: 'Press space on which environments you wish to have:',
        choices: [
            { name: 'PD', checked: true },
            { name: 'NP', checked: true },
            { name: 'PILOT' },
          ],
    }]);
}
