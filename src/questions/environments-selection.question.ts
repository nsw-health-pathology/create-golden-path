import inquirer from 'inquirer';
import { Answer } from '../models/choice';

export function environmentSelectionQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        type: 'checkbox',
        name: 'environmentSelection',
        message: 'Selects what environments your project will have:',
        choices: [
            { name: 'pd', checked: true },
            { name: 'np', checked: true },
            { name: 'pilot' },
          ],
    }]);
}
