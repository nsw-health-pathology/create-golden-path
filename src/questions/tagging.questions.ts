import inquirer from 'inquirer';
import { Answer } from '../models/choice';

export function supportQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'support',
        type: 'input',
        message: 'Please the supporting team for this project (eg DevOps, Fusion, Laboratory Randwick Genomics):',
    }]);
}
export function supportContactQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'supportContact',
        type: 'input',
        message: 'Please the supporting team contact email (eg NSWPATH-DevOps@health.nsw.gov.au):',
    }]);
}
export function serviceOfferingQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'serviceOffering',
        type: 'input',
        message: 'Enter the product or platform this resource is associated with (eg Genomics, Akuna, Catalogue, SIMBA):',
    }]);
}
export function reasonQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'reason',
        type: 'input',
        message: 'Please provide link to the design that contextualizes this resource (eg confluence page):',
    }]);
}
export function costCenterQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'costCenter',
        type: 'input',
        message: 'The accounting code for the cost allocation - to be supplied by finance / program / project / product manager:',
    }]);
}

export async function taggingQuestions(): Promise<{
    costCenter: string,
    support: string,
    supportContact: string,
    reason: string,
    serviceOffering: string
}> {

    const { costCenter } = await costCenterQuestion();
    const { support } = await supportQuestion();
    const { supportContact } = await supportContactQuestion();
    const { reason } = await reasonQuestion();
    const { serviceOffering } = await serviceOfferingQuestion();

    return Promise.resolve({ costCenter, support, supportContact, reason, serviceOffering })
}
