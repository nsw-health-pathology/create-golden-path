import inquirer from 'inquirer';
import { Answer } from '../models/choice';

export function accountNameQualifiedQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'accountNameQualified',
        type: 'input',
        message: 'Please enter aws account name qualified (eg awpmc-genomics-np) :',
    }]);
}
export function accountNameShortQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'accountNameShort',
        type: 'input',
        message: 'Please enter aws account name short version (eg genomicsnp):',
    }]);
}
export function accountIdQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'accountId',
        type: 'input',
        message: 'Please enter aws account name id (eg 123456789012):',
    }]);
}

export async function awsAccountQuestions(): Promise<{
    accountNameQualified: string,
    accountNameShort: string,
    accountId: string,
}> {

    const { accountNameQualified } = await accountNameQualifiedQuestion();
    const { accountNameShort } = await accountNameShortQuestion();
    const { accountId } = await accountIdQuestion();

    return Promise.resolve({ accountNameQualified, accountNameShort, accountId })
}
