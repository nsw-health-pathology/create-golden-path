import { EnvironmentAwsAccountAnswer } from "../models/choice";
import { projectNameQuestion } from "../questions";
import { awsAccountQuestions } from "../questions/aws-account.questions";
import { environmentSelectionQuestion } from "../questions/environments-selection.question";
import { taggingQuestions } from "../questions/tagging.questions";
import { awsCdkTemplate } from "../templates/aws-cdk/aws-cdk.template";
import { showInfo, showSuccess } from "../utils/logger.util";

export async function awsCdkActions(): Promise<any> {

    showInfo('Lets gather some information about your project')
    const { projectName } = await projectNameQuestion();
    const { environmentSelection } = await environmentSelectionQuestion();

    showInfo('Lets gather some tagging information')
    const tagging = await taggingQuestions();

    const accountDetails: EnvironmentAwsAccountAnswer[] = [];

    for (const env of environmentSelection) {
        showInfo(`Lets gather details on your aws environments for ${env}`)
        const envAccountDetails = await awsAccountQuestions(env);
        accountDetails.push({env, ...envAccountDetails});
    }

    await awsCdkTemplate(projectName, tagging, accountDetails);

    showSuccess('Setup complete, you are now on the aws-cdk golden path');
}
