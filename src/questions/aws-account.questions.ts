import inquirer from 'inquirer';
import { Answer, AwsAccountAnswer } from '../models/choice';

export function accountNameQualifiedQuestion(env: string): Promise<Answer> {
    return inquirer.prompt([{
        name: 'accountNameQualified',
        type: 'input',
        message: `Enter aws account name qualified for ${env} (eg awpmc-genomics-${env}):`,
    }]);
}
export function accountNameShortQuestion(env: string): Promise<Answer> {
    return inquirer.prompt([{
        name: 'accountNameShort',
        type: 'input',
        message: `Enter aws account name short version for ${env} (eg genomics${env}):`,
    }]);
}
export function accountIdQuestion(env: string): Promise<Answer> {
    return inquirer.prompt([{
        name: 'accountId',
        type: 'input',
        message: `Enter aws account name id for ${env} (eg 123456789012):`,
    }]);
}

export async function awsAccountQuestions(env: string): Promise<AwsAccountAnswer> {

    const { accountNameQualified } = await accountNameQualifiedQuestion(env);
    const { accountNameShort } = await accountNameShortQuestion(env);
    const { accountId } = await accountIdQuestion(env);

    return Promise.resolve({ accountNameQualified, accountNameShort, accountId })
}
