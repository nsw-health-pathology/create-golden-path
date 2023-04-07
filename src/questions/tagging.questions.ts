import inquirer from 'inquirer';
import { Answer, TaggingAnswer } from '../models/choice';
import { showInfo } from '../utils/logger.util';

export function supportQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'support',
        type: 'input',
        message: 'Enter name of supporting team for this project (eg DevOps, Fusion, Laboratory Randwick Genomics):',
    }]);
}
export function supportContactQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'supportContact',
        type: 'input',
        message: 'Enter the supporting team contact email (eg NSWPATH-DevOps@health.nsw.gov.au):',
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
        message: 'Provide a link to the design that contextualizes this resource (eg confluence page):',
    }]);
}
export function costCenterQuestion(): Promise<Answer> {
    return inquirer.prompt([{
        name: 'costCenter',
        type: 'input',
        message: 'Cost Center number (supplied by finance / program / project / product manager):',
    }]);
}

export async function taggingQuestions(): Promise<TaggingAnswer> {

    const { costCenter } = await costCenterQuestion();
    const { support } = await supportQuestion();
    const { supportContact } = await supportContactQuestion();
    const { reason } = await reasonQuestion();
    const { serviceOffering } = await serviceOfferingQuestion();

    return Promise.resolve({ costCenter, support, supportContact, reason, serviceOffering })
}
