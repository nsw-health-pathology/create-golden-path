import inquirer from 'inquirer';
import { GoldenPath } from '../golden-path';

import { Answer, Choice, GoldenPathValue } from '../models/choice';

export async function goldenPathQuestion(): Promise<Answer> {

    const listOfFiles: Choice[] = [
        {name: 'AWS-CDK', value: GoldenPathValue.AWS_CDK},
        // {name: 'Angular', value: GoldenPathValue.ANGULAR},
    ];

    return await inquirer.prompt([{
        name: 'goldenPath',
        type: 'list',
        message: 'Select a golden path:',
        choices: listOfFiles,
    }]);
}
