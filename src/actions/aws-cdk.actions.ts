import { EnvironmentAwsAccountAnswer } from "../models/choice";
import { projectNameQuestion } from "../questions";
import { awsAccountQuestions } from "../questions/aws-account.questions";
import { environmentSelectionQuestion } from "../questions/environments-selection.question";
import { taggingQuestions } from "../questions/tagging.questions";
import { versionSelectionQuestion } from "../questions/version-selection.question";
import { awsCdkTemplate } from "../templates/aws-cdk/aws-cdk.template";
import { showInfo, showSuccess } from "../utils/logger.util";

export async function awsCdkActions(): Promise<any> {

    showInfo('Lets gather some information about your project')
    const { projectName } = await projectNameQuestion();
    const { versionSelection } = await versionSelectionQuestion();
    const { environmentSelection } = await environmentSelectionQuestion();

    showInfo('Lets gather some tagging information')
    const tagging = await taggingQuestions();

    showInfo('Lets gather details on your aws environments')
    const accountDetails: EnvironmentAwsAccountAnswer[] = [];

    for (const env of environmentSelection) {
        const envAccountDetails = await awsAccountQuestions(env);
        accountDetails.push({env, ...envAccountDetails});
    }

    await awsCdkTemplate(projectName, versionSelection, tagging, accountDetails);

    showSuccess('Setup complete, you are now on the aws-cdk golden path');
}
